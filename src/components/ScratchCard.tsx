import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
  "Kelly, eres el amor de mi vida. ❤️",
  "¡Hoy celebramos lo maravillosa que eres! 🎂",
  "No puedo esperar para seguir creando recuerdos contigo. 💕"
];

const ScratchCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [message] = useState(messages[Math.floor(Math.random() * messages.length)]);
  const [isDrawing, setIsDrawing] = useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Fill with gray scratch-off layer
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Check if enough has been scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] < 128) transparent++;
    }
    if (transparent > pixels.length / 4 * 0.5) {
      setIsRevealed(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="relative aspect-video">
        {!isRevealed ? (
          <canvas
            ref={canvasRef}
            onMouseDown={() => setIsDrawing(true)}
            onMouseUp={() => setIsDrawing(false)}
            onMouseMove={handleScratch}
            onTouchStart={() => setIsDrawing(true)}
            onTouchEnd={() => setIsDrawing(false)}
            onTouchMove={handleScratch}
            className="absolute inset-0 w-full h-full cursor-pointer"
          />
        ) : null}
        <div className={`absolute inset-0 flex items-center justify-center p-6 text-center ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xl font-baloo text-red-600">{message}</p>
        </div>
        {!isRevealed && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-lg font-baloo text-gray-600">¡Rasca aquí para revelar tu mensaje especial! 🎉</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ScratchCard;