import styles from "../style";
import { useState } from "react";
import { ilustrasiSkill } from "../assets";

const Skill = () => {
	const [showMore, setShowMore] = useState(false);

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	return (
		<>
			<section id="skill" className={`${styles.maxWidth}`}>
				<div className={`${styles.flexEvenly} flex-col lg:flex-row-reverse`}>
					{/* -------------------------------- Content 1 ------------------------------- */}
					<div>
						<img src={ilustrasiSkill} alt="Ilustrasi Skill" className={`${styles.imgScale}`} />
					</div>
					{/* -------------------------------- Content 2 ------------------------------- */}
					<div className="mx-auto mt-6 text-center md:mt-12 lg:mt-0 lg:text-start">
						<h2 className="text-h2">
							What can i do <span className="swing ml-1 inline-block">🤔</span>
						</h2>
						<p className="text-p1 mx-auto mt-6 max-w-[360px] md:max-w-[460px]">I can help you in design and dev process. Website, mobile app, landing page, etc.</p>
						<div className="mt-10 flex max-w-full flex-wrap justify-center gap-2 md:max-w-[460px] lg:justify-start">
							<div className="text-label">User Research</div>
							<div className="text-label">User Flow</div>
							<div className="text-label">Wireframes</div>
							<div className="text-label">UI Design</div>
							<div className="text-label">Design System</div>
							<div className="text-label">Prototyping</div>
							<div className="text-label">Logo</div>
							<div className="text-label">Illustration</div>
							<div className="text-label">Figma</div>
							<div className="text-label">FigJam</div>
							<div className="text-label">Photoshop</div>
							<div className="text-label">HTML</div>
							<div className="text-label">CSS</div>
							<div className="text-label">Basic JavaScript</div>
							<div className="text-label">Tailwind CSS</div>
							<div className="text-label">Basic React</div>
							{/* ---------------------------- Show More Content --------------------------- */}
							{showMore && (
								<>
									<div className="text-label">Adobe XD</div>
									<div className="text-label">Balsamiq Wireframes</div>
									<div className="text-label">Fisamiq</div>
									<div className="text-label">Notion</div>
									<div className="text-label">Whimsical</div>
									<div className="text-label">Draw.io</div>
									<div className="text-label">Bootstrap</div>
									<div className="text-label">Ant Design</div>
									<div className="text-label">Vite</div>
									<div className="text-label">Git</div>
									<div className="text-label">Visual Studio Code</div>
								</>
							)}
							{/* --------------------------------- Button --------------------------------- */}
							<div className="text-label-button pulse" onClick={handleMoreClick}>
								{showMore ? "Hide" : "+11"}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skill;
