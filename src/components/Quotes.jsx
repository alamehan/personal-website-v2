import styles from "../style";
import { ilustrasiQuotes } from "../assets";

const Quotes = () => {
	return (
		<>
			<section id="quotes" className={`${styles.maxWidth}`}>
				<div className={`${styles.flexCenter} flex-col text-center`}>
					<img src={ilustrasiQuotes} alt="Ilustrasi Quotes" className={`${styles.imgScale} mb-10`} />
					<h2 className="text-h2 max-w-full md:max-w-[480px] lg:max-w-[680px]">Not just a cool user interface, but also easy to use and solve user problems <span className="flip ml-1 inline-block">✨</span></h2>
				</div>
			</section>
		</>
	);
};

export default Quotes;
