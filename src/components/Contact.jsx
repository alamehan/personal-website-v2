import styles from "../style";
import { useState } from "react";
import { Button, IconContact } from "../components";
import { ilustrasiModal, contactLinkedin, contactBehance, contactDribbble, contactGithub, contactKaggle, contactMedium, contactInstagram, contactAlamehan } from "../assets";

const Contact = () => {
	const [showModal, setShowModal] = useState(false);

	function handleMoreClick() {
		setShowModal(!showModal);
	}

	return (
		<>
			<section id="contact" className={`${styles.maxWidth}`}>
				<div className={`${styles.flexCenter} flex-col text-center`}>
					{/* ---------------------------------- Text ---------------------------------- */}

					<h2 className="text-h2">
						Get in touch <span className="bounce ml-1 inline-block">🤝</span>
					</h2>
					<p className="text-p1 mx-auto mb-10 mt-6 max-w-[360px] md:max-w-[540px]">Whether you have a question or just want to say hi, my inbox is always open.</p>

					{/* --------------------------------- Button --------------------------------- */}

					<Button targetLink={"https://www.linkedin.com/in/alamehan"} newTab={"_blank"}>
						Say hello on LinkedIn
					</Button>

					{/* ---------------------------------- Links --------------------------------- */}

					<div className={`${styles.maxWidth} ${styles.flexCenter} mt-10 max-w-[320px] flex-wrap gap-4 md:max-w-full`}>
						<IconContact link="https://www.linkedin.com/in/alamehan" image={contactLinkedin} alt="LinkedIn" />
						<IconContact link="https://www.behance.net/alamehan" image={contactBehance} alt="Behance" />
						<IconContact link="https://dribbble.com/alamehan" image={contactDribbble} alt="Dribbble" />
						<IconContact link="https://github.com/alamehan" image={contactGithub} alt="Github" />
						<IconContact link="https://www.kaggle.com/raihanallaam" image={contactKaggle} alt="Kaggle" />
						<IconContact link="https://alamehan.medium.com/" image={contactMedium} alt="Medium" />
						<IconContact link="https://www.instagram.com/alamehan/" image={contactInstagram} alt="Instagram" />
						<button target="_blank" onClick={handleMoreClick}>
							<img src={contactAlamehan} alt="Alamehan Website" className="hover:flip" />
						</button>
					</div>

					{/* ---------------------------------- Modal --------------------------------- */}

					{showModal && (
						<>
							<div className={`${styles.modalCenter} z-10 w-full`}>
								<div className="flex h-screen items-center justify-center text-center">
									{/* ------------------------------- Background ------------------------------- */}
									<div className="fixed inset-0 transition-opacity">
										<div className="absolute inset-0 bg-blue-900 opacity-90" />
									</div>
									{/* --------------------------------- Content -------------------------------- */}
									<div className="align-center inline-block transform overflow-hidden rounded-lg bg-white shadow-xl">
										<div className={`${styles.flexCenter} flex-col bg-white py-4`}>
											<img src={ilustrasiModal} alt="Ilustrasi Modal" className="h-[96px] w-[96x]" />
											<h4 className="text-h4 mt-4">Old Website</h4>
										</div>
										<div className="flex justify-center gap-4 bg-blue-100 px-4 py-4 lg:justify-start">
											<Button targetLink={"https://alamehan.github.io/alamehan-v1"}>Open</Button>
											<Button onClick={handleMoreClick} customClass={"!bg-rose-500 !text-white"}>
												Cancel
											</Button>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</section>
		</>
	);
};

export default Contact;
