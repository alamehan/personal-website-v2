import styles from "../style";
import { iconAbout, iconSkill, iconWork, iconHobby, iconContact } from "../assets";

const Navbar = () => {
	return (
		<>
			{/* ---------------------------- Tablet & Desktop ---------------------------- */}
			<nav className={`${styles.maxWidth} bg-navbar hidden rounded-b-lg py-5 md:flex`}>
				<ul className={`${styles.flexBetween} m-auto max-w-[560px] flex-1 list-none`}>
					<li className="text-navbar">
						<a href="#target-about">About</a>
					</li>
					<li className="text-navbar">
						<a href="#target-skill">Skill</a>
					</li>
					<li className="text-navbar">
						<a href="#target-work">Work</a>
					</li>
					<li className="text-navbar">
						<a href="#target-hobby">Hobby</a>
					</li>
					<li className="text-navbar">
						<a href="#target-contact">Contact</a>
					</li>
				</ul>
			</nav>
			{/* --------------------------------- Mobile --------------------------------- */}
			<nav className={`${styles.maxWidth} bg-navbar rounded-lg py-5 md:hidden`}>
				<ul className={`${styles.flexEvenly} m-auto max-w-[560px] flex-1 list-none`}>
					<li className="text-navbar">
						<a href="#target-about">
							<img src={iconAbout} alt="About" />
						</a>
					</li>
					<li className="text-navbar">
						<a href="#target-skill">
							<img src={iconSkill} alt="Skill" />
						</a>
					</li>
					<li className="text-navbar">
						<a href="#target-work">
							<img src={iconWork} alt="Work" />
						</a>
					</li>
					<li className="text-navbar">
						<a href="#target-hobby">
							<img src={iconHobby} alt="Hobby" />
						</a>
					</li>
					<li className="text-navbar">
						<a href="#target-contact">
							<img src={iconContact} alt="Contact" />
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
