import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Lista de rutas de las imágenes que están en /public
const photos = [
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.55_197669d7.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_8b40311a.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_58f5ef32.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_309ec4ea.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_509bb280.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_a46ae36a.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_b83f04cc.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_e85d63ce.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_e0136421.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_ed8f1d56.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_fd2cb58e.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.56_ff4fe8b6.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.57_4c22c5ad.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.57_6e25d072.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.57_22a66e6c.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.57_0741196e.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.57_aacc0488.jpg",
	"/Imagen de WhatsApp 2025-01-15 a las 18.49.57_fc547f98.jpg",
];

const PhotoGallery: React.FC = () => {
	const settings = {
		dots: false, // No mostrar puntos de paginación
		arrows: false, // No mostrar flechas "Next"/"Prev"
		infinite: true,
		speed: 500,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		swipeToSlide: true,
		pauseOnHover: false,
	};

	return (
		<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-3xl mx-auto px-4 py-8">
			<h2 className="text-3xl font-bold text-center mb-8 text-red-600">Nuestros recuerdos favoritos 📸</h2>

			{/*
        Contenedor con un tamaño fijo y responsive.
        Ajusta la altura para que no sea demasiado grande.
      */}
			<div
				className="
          bg-white p-4 rounded-lg shadow-xl 
          overflow-hidden mx-auto
          w-full max-w-[700px]
          max-h-[600px]
        "
			>
				<Slider {...settings}>
					{photos.map((photo, index) => (
						<div key={index} className="px-2">
							<img src={photo} alt={`Momento especial ${index + 1}`} className="w-full h-full object-contain p-2" />
						</div>
					))}
				</Slider>
			</div>

			<p className="text-center mt-4 text-gray-700 italic">Cada uno de estos momentos me recuerda lo afortunado que soy de tenerte a mi lado.</p>
		</motion.div>
	);
};
export default PhotoGallery;
