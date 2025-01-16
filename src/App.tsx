import React from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./components/FloatingHearts";
import Header from "./components/Header";
import PhotoGallery from "./components/PhotoGallery";
import LoveMessages from "./components/LoveMessages";
import ScratchCard from "./components/ScratchCard";
import HoverMessage from "./components/HoverMessage";
import GiftButton from "./components/GiftButton";

function App() {
	return (
		<div className="relative min-h-screen">
			<FloatingHearts />

			<div className="relative z-10">
				<Header />

				<main className="container mx-auto px-4">
					<section id="gallery">
						<PhotoGallery />
					</section>

					<section className="py-16">
						<h2 className="text-3xl font-bold text-center mb-12 text-red-600">Sorpresas Especiales 🎉</h2>
						<div className="grid gap-12">
							<ScratchCard />
							<HoverMessage />
							<GiftButton />
						</div>
					</section>

					<section>
						<LoveMessages />
					</section>

					<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto py-16 px-4 text-center">
						<div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
							<h2 className="text-3xl font-bold text-red-600 mb-6">Mi Dedicatoria Especial 💝</h2>
							<p className="text-lg text-gray-800 leading-relaxed">
								Mi amor, cada momento contigo es un tesoro. Eres la razón por la que sonrío cada día, y hoy celebro a la mujer maravillosa que eres. Gracias por ser mi todo. Tu amor ilumina mi vida de una
								manera que las palabras no pueden describir. Que este día esté lleno de toda la alegría y felicidad que mereces. Te amo, siempre y para siempre. Felices 24 años llenos de éxitos, muchos besos,
								mucho amor y una infinta cantidad de sueños cumplidos, siempre siempre juntitos.❤️
							</p>
						</div>
					</motion.section>
				</main>

				<footer className="bg-red-50/80 backdrop-blur-sm py-8 mt-16">
					<div className="container mx-auto px-4 text-center">
						<p className="text-lg text-gray-700">
							Gracias por llenar mi vida de amor, felicidad y aventuras. Este día es solo el comienzo de muchas más celebraciones juntos. Te amo con todo mi corazón y más. ❤️
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
