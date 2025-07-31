import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Support = () => {
	return (
		<div className="bg-[#1c1c1c] text-white pt-20 pb-10 w-full" id="support">
			<div className="px-4 md:px-12 max-w-4xl mx-auto space-y-16">

				{/* Header */}
				<section aria-labelledby="support-heading">
					<motion.h2
						id="support-heading"
						className="text-4xl font-bold text-center text-[#ba6a5a] mb-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Support & Service
					</motion.h2>

					<motion.p
						className="text-gray-300 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						Support That Flows as Smoothly as Our Fans
					</motion.p>
				</section>

				{/* Experience Section */}
				<section aria-labelledby="experience-heading">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						<h3 id="experience-heading" className="text-2xl font-semibold mb-3 text-[#e49385]">
							Experience Matters
						</h3>
						<p className="text-gray-300">
							Our customer-first approach ensures that from installation to years later, you're always taken care of.
						</p>
					</motion.div>
				</section>

				{/* What We Offer */}
				<section aria-labelledby="offer-heading">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<h3 id="offer-heading" className="text-2xl font-semibold mb-3 text-[#e49385]">
							What We Offer
						</h3>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							<li>Guided Installations & Smart Usage Tips</li>
							<li>Remote & Control Troubleshooting</li>
							<li>Swift Warranty Replacements</li>
						</ul>
					</motion.div>
				</section>

				{/* Warranty Section */}
				<section aria-labelledby="warranty-heading">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<h3 id="warranty-heading" className="text-2xl font-semibold mb-3 text-[#e49385]">
							Warranty at a Glance
						</h3>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							<li>Induction Motor: <strong>2 Years</strong></li>
							<li>BLDC Motor: <strong>5 Years</strong></li>
							<li>PCB: <strong>2 Years</strong></li>
						</ul>
					</motion.div>
				</section>

				{/* Contact Support */}
				<section aria-labelledby="contact-heading">
					<motion.div
						className="bg-[#2f2f2f] rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-[#ba6a5a]/30"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						<div>
							<h4 id="contact-heading" className="text-xl font-semibold mb-2 text-[#e49385]">
								Need more help?
							</h4>
							<p className="text-gray-300 mb-2">
								Our support team is available Mon–Sat, 10am–6pm.
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 text-[#efb4a5]">
								<Mail />
								<a
									href="mailto:support@anthemfans.com"
									className="underline hover:text-[#ba6a5a] transition"
								>
									support@anthemfans.com
								</a>
							</div>
							<div className="flex items-center gap-2 text-[#e49385]">
								<Phone />
								<a
									href="tel:+919930101710"
									className="underline hover:text-[#ba6a5a] transition"
								>
									+91 9930101710
								</a>
							</div>
						</div>
					</motion.div>
				</section>
			</div>
		</div>
	);
};

export default Support;
