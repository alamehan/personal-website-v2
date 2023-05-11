import styles from "../style";
import { Button } from "../components";
import { ilustrasiAbout, tablerIconsArrowDown, cvRaihan } from "../assets";

const About = () => {
	return (
		<>
			<section id="about" className={`${styles.maxWidth}`}>
				<div className={`${styles.flexEvenly} flex-col lg:flex-row`}>
					{/* -------------------------------- Content 1 ------------------------------- */}
					<div>
						<img src={ilustrasiAbout} alt="Ilustrasi About" className={`${styles.imgScale}`} />
					</div>
					{/* -------------------------------- Content 2 ------------------------------- */}
					<div className="mt-6 text-center md:mt-12 lg:mt-0 lg:text-start">
						<h2 className="text-h2">
							Hi there <span className="hithere ml-1 inline-block">👋</span>
						</h2>
						<p className="text-p1 mx-auto mb-10 mt-6 max-w-[360px] md:max-w-[460px]">I'm Raihan Allaam, a UI/UX designer based in Sukabumi, Indonesia.</p>
						<div className="flex justify-center gap-4 lg:justify-start">
							<Button targetLink={"#target-quotes"} customClass={"bounce"}>
								Explore <img src={tablerIconsArrowDown} />
							</Button>
							<Button targetLink={cvRaihan} customClass={"!bg-blue-50 !text-blue-900"} newTab={"_blank"}>
								Resume
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
