import styles from "../style";

const IconContact = (props) => {
	return (
		<>
			<a href={props.link} target="_blank">
				<img src={props.image} alt={props.alt} className="hover:flip" />
			</a>
		</>
	);
};

export default IconContact;
