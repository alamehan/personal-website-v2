const Button = ({ children, targetLink, customClass, newTab, onClick }) => {
	return (
		<>
			<a href={targetLink} className={`text-button ${customClass}`} target={newTab} onClick={onClick}>
				{children}
			</a>
		</>
	);
};

export default Button;
