import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Calendar, Gift } from "lucide-react";

interface LoveVoucher {
	id: string;
	title: string;
	description: string;
	validUntil: string;
	icon: string;
}

const giftVouchers: LoveVoucher[] = [
	{
		id: "LOVE-100K-2024",
		title: "100 Besos Infinitos",
		description: "Vale por 100 besos llenos de amor, redimibles en cualquier momento del día",
		validUntil: "31/12/2024",
		icon: "💋",
	},
	{
		id: "HUG-100X-2024",
		title: "100 Abrazos Especiales",
		description: "Vale por 100 abrazos cálidos y reconfortantes cuando más los necesites",
		validUntil: "31/12/2024",
		icon: "🤗",
	},
	{
		id: "DINNER-LUX-2024",
		title: "Cena Romántica Gourmet",
		description: "Una cena especial preparada con todo mi amor, incluyendo tu plato favorito",
		validUntil: "31/12/2024",
		icon: "🍝",
	},
	{
		id: "MASSAGE-SPA-2024",
		title: "Sesión de Masaje Relajante",
		description: "Un masaje relajante de 20 minutos para eliminar todo tu estrés",
		validUntil: "31/12/2024",
		icon: "💆‍♀️",
	},
	{
		id: "MOVIE-NIGHT-2024",
		title: "Noche de Películas Premium",
		description: "Una noche mágica viendo tus películas favoritas con snacks incluidos",
		validUntil: "31/12/2024",
		icon: "🎬",
	},
	{
		id: "COSITAS-SUCIAS-2024",
		title: "Noche de Pasión y Amor",
		description: "Una noche especial llena de amor, pasión y mucho mucho chiquitingo",
		validUntil: "31/12/2024",
		icon: "🔥",
	},
];

const GiftButton: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const containerVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3 },
		},
	};

	return (
		<div className="max-w-md mx-auto text-center">
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(true)}
				className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
			>
				¡Abre tu regalo! 🎁
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
							onClick={(e) => e.stopPropagation()}
						>
							<h3 className="text-2xl font-baloo text-red-600 mb-6 flex items-center justify-center gap-2">
								<Gift className="w-6 h-6" />
								¡Tus vales de amor! 💝
							</h3>

							<div className="space-y-6">
								{giftVouchers.map((voucher, index) => (
									<motion.div key={index} variants={itemVariants} className="relative bg-gradient-to-r from-pink-50 to-red-50 rounded-lg overflow-hidden">
										{/* Ticket Border */}
										<div className="absolute left-0 top-0 h-full w-4 bg-red-500 flex flex-col">
											<div className="flex-1 border-r border-dashed border-white/50"></div>
										</div>

										<div className="pl-8 pr-4 py-4">
											{/* Header */}
											<div className="flex justify-between items-start mb-3">
												<div>
													<h4 className="text-xl font-bold text-red-600 flex items-center gap-2">
														{voucher.icon} {voucher.title}
													</h4>
													<p className="text-sm text-gray-500">ID: {voucher.id}</p>
												</div>
												<QrCode className="w-8 h-8 text-gray-400" />
											</div>

											{/* Content */}
											<p className="text-gray-700 mb-3">{voucher.description}</p>

											{/* Footer */}
											<div className="flex items-center justify-between text-sm text-gray-500 border-t border-dashed border-gray-200 pt-2">
												<div className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													Válido hasta: {voucher.validUntil}
												</div>
												<span className="text-red-500 font-semibold">Con todo mi amor ❤️</span>
											</div>
										</div>
									</motion.div>
								))}
							</div>

							<motion.p variants={itemVariants} className="mt-6 text-gray-600 italic">
								Esto es solo el principio... ¡El resto de los regalos vienen del corazón! ❤️
							</motion.p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default GiftButton;
