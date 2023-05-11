import styles from "../style";

const Footer = () => {
	return (
		<>
			<footer className={`${styles.maxWidth} ${styles.flexCenter} rounded-t-lg bg-gray-800 pb-28 pt-5 md:pb-5`}>
				<p className="text-p2 !text-white">Designed & Built by Raihan Allaam ✌️</p>
			</footer>
		</>
	);
};

export default Footer;
