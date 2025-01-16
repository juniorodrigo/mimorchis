import React from "react";
import { motion } from "framer-motion";

const messages = [
	"Kelly, mi amor, tu sonrisa ilumina mi vida. 💖",
	"Eres mi musa, mi apoyo y mi amor eterno.",
	"Gracias por hacer del mundo un lugar más hermoso.",
	"Cada día a tu lado es una nueva aventura.",
	"Tu amor me hace mejor persona.",
];

const LoveMessages: React.FC = () => {
	return (
		<div className="w-full max-w-4xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold text-center mb-8 text-red-600">Mensajes de Amor ❤️</h2>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{messages.map((message, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: index * 0.2 }}
						className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						<p className="text-lg text-gray-800 text-center font-medium">{message}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default LoveMessages;
