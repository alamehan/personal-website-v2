import styles from "../style";
import { Button } from "../components";
import { tablerIconsLock } from "../assets";

const CardWork = (props) => {
	return (
		<>
			<div className={`${styles.flexBetween} ${props.classCard} mt-6 flex-col rounded-lg p-5 md:mt-8`}>
				<div className={`${styles.flexCenter} w-1/2`}>
					<img src={props.image} alt={props.alt} className={`${styles.imgScale} ${props.classImage} px-5 my-4 md:my-8`} />
				</div>
				<div className={`${styles.flexStartTop} w-1/2 flex-col rounded-lg bg-white p-6 md:p-8`}>
					<h4 className="text-h4">{props.title}</h4>
					<div className="w- mt-6 flex max-w-full flex-wrap gap-2">{props.children}</div>
					<p className="text-p2 mb-10 mt-6">{props.description}</p>
					<div className={`${styles.flexEnd}`}>
						<Button targetLink={props.link} customClass={`${props.classButton} hover:shake w-full justify-center md:w-fit`}>
							View <img src={tablerIconsLock} />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardWork;
