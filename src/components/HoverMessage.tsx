import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = ["Eres mi persona favorita en el mundo. 🌎", "¡Gracias por ser tú, mi Kellita! 🎈", "Cada día contigo es un regalo. 💖"];

const HoverMessage: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [currentMessage] = useState(messages[Math.floor(Math.random() * messages.length)]);

	return (
		<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-md mx-auto">
			<div
				className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/90"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="text-center">
					<p className="text-lg font-baloo text-gray-600 mb-2">Clickea aquí para descubrir algo especial...</p>
					<AnimatePresence>
						{isHovered && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-100 via-red-50 to-purple-100 rounded-xl"
							>
								<p className="text-xl font-baloo text-red-600 p-6">{currentMessage}</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default HoverMessage;
