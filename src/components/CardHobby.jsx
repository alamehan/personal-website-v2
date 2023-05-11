import styles from "../style";
import { tablerIconsExternalLink } from "../assets";

const CardHobby = (props) => {
	return (
		<>
			{/* flex-1 artinya flex: 1 1 0%; dimana flex: [flex-grow] [flex-shrink] [flex-basis]; */}
			<div className={`${props.classCard} min-w-[330px] flex-1 rounded-lg p-8`}>
				<div className={`${styles.flexBetweenTop} mb-6`}>
					<img src={props.image} alt={props.alt} />
					<a href={props.link} target="_blank">
						<img src={tablerIconsExternalLink} alt="External Link" className="hover:pulse rounded-full bg-transparent p-3 hover:bg-white" />
					</a>
				</div>
				<h5 className="text-h5 mb-6">{props.title}</h5>
				<p className="text-p2">{props.description}</p>
			</div>
		</>
	);
};

export default CardHobby;
