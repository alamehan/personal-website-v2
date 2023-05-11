import styles from "./style";
import { Navbar, About, Quotes, Skill, Work, Hobby, Contact, Footer } from "./components";

const App = () => {
	return (
		<div className="w-full overflow-hidden">
			<div id="target-navbar"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${window.innerWidth < 768 ? "bottom-[12px]" : "top-[0px]"} fixed z-10`}>
				<Navbar />
			</div>
			<div id="target-about"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginHero}`}>
				<About />
			</div>
			<div id="target-quotes"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginSection}`}>
				<Quotes />
			</div>
			<div id="target-skill"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginSection}`}>
				<Skill />
			</div>
			<div id="target-work"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginSection}`}>
				<Work />
			</div>
			<div id="target-hobby"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginSection}`}>
				<Hobby />
			</div>
			<div id="target-contact"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginSection}`}>
				<Contact />
			</div>
			<div id="target-footer"></div>
			<div className={`${styles.container} ${styles.flexCenter} ${styles.marginSection}`}>
				<Footer />
			</div>
		</div>
	);
};

export default App;