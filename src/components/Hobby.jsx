import styles from "../style";
import { useState } from "react";
import { Button, CardHobby } from "../components";
import { hobbyAnggrekClassifier, hobbyNiceVizual, hobbySatuKlik, hobbyCheatSheet, hobbyNiceList, hobbyTheReaderrr, hobbyAtozMind, hobbyRightTr4ck, hobbyDeepDive, hobbyKnowYourself101, hobbyDesignShowcase, hobbyInsightStories, hobbyPetualanganOemar } from "../assets";

const Hobby = () => {
	const [showMore, setShowMore] = useState(false);

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	return (
		<>
			<section id="hobby" className={`${styles.maxWidth}`}>
				{/* ---------------------------------- Title --------------------------------- */}

				<div className={`${styles.flexCenter} mb-10`}>
					<h3 className="text-h3">It's just a hobby ☕</h3>
				</div>

				{/* ---------------------------------- Card ---------------------------------- */}

				<div id="target-hobby-last"></div>

				<div className={`${styles.maxWidth} ${styles.flexBetween} flex-wrap items-stretch gap-4`}>
					<CardHobby image={hobbyAnggrekClassifier} alt="Anggrek Classifier" link="https://github.com/alamehan/skripsi-cnn-anggrek" classCard="bg-brown-100" title="Anggrek Classifier" description="Orchid plant genus classification using Deep Learning ConvNets." />
					<CardHobby image={hobbyNiceVizual} alt="NiceVizual" link="https://nicevizual.github.io/" classCard="bg-purple-100" title="NiceVizual" description="A collection of simple interactive apps based on HTML, CSS & JavaScript." />
					<CardHobby image={hobbySatuKlik} alt="SatuKlik" link="https://satuklik.github.io/" classCard="bg-sky-100" title="SatuKlik" description="All your links are collected into one web page. More than 20 themes are available." />
					<CardHobby image={hobbyCheatSheet} alt="CheatSheet" link="https://alamehan.github.io/alamehan-v1/sheet/" classCard="bg-blue-100" title="CheatSheet" description="A ready-to-use reference, presented in a fun style with engaging illustrations." />
					<CardHobby image={hobbyNiceList} alt="NiceList" link="https://alamehan.github.io/projects/nice-list-web/" classCard="bg-violet-100" title="NiceList" description="A list of quality and useful websites and digital products in one place." />
					<CardHobby image={hobbyTheReaderrr} alt="The Readerrr" link="https://alamehan.github.io/alamehan-v1/epub/" classCard="bg-slate-100" title="The Readerrr" description="Curated for book lovers. Useful tools, book recommendations, and selected reading lists." />
					<CardHobby image={hobbyAtozMind} alt="ATOZ Mind" link="https://alamehan.github.io/projects/atoz-mind/" classCard="bg-pink-100" title="ATOZ Mind" description="A collection of mind maps on various topics. See the Big Picture!" />
					<CardHobby image={hobbyRightTr4ck} alt="Right Tr4ck" link="https://alamehan.github.io/alamehan-v1/road/" classCard="bg-orange-100" title="Right Tr4ck" description="A learning framework. Want to learn something new and don't know where to start?" />
					<CardHobby image={hobbyDeepDive} alt="DeepDive" link="https://alamehan.github.io/projects/deep-dive/" classCard="bg-sky-100" title="DeepDive" description="Deep dive into any subject with the powerful of GPT-4. Comprehensively." />

					{/* ---------------------------- Show More Content --------------------------- */}

					{showMore && (
						<>
							<CardHobby image={hobbyKnowYourself101} alt="Know Yourself 101" link="https://drive.google.com/drive/u/3/folders/1q2XKCioGNsoqeyc-NfiG0BcaAXIfwCwD" classCard="bg-lime-100" title="Know Yourself 101" description="Find out who you really are. All great achievements start with knowing yourself." />
							<CardHobby image={hobbyDesignShowcase} alt="Design Showcase" link="https://alamehan.github.io/alamehan-v1/portfolios.html" classCard="bg-indigo-100" title="Design Showcase" description="Design exploration such as digital illustration, logo design, playing with color, etc." />
							<CardHobby image={hobbyInsightStories} alt="Insight Stories" link="https://alamehan.medium.com/selamat-datang-di-alamehan-35a43da9d87e" classCard="bg-slate-100" title="Insight Stories" description="Sharing insights, book reviews, and stories about life. Read Raihan's stories here." />
							<CardHobby image={hobbyPetualanganOemar} alt="Petualangan Oemar" link="http://petualanganoemar.blogspot.com/" classCard="bg-sky-100" title="Petualangan Oemar" description="A simple game created using the RPG maker engine in 2012. An archive." />
						</>
					)}
				</div>

				{/* --------------------------------- Button --------------------------------- */}

				<div className={`${styles.flexCenter} mt-10`}>
					<Button targetLink="#none" onClick={handleMoreClick}>
						{showMore ? "- Show less" : "+ Show more"}
					</Button>
				</div>
			</section>
		</>
	);
};

export default Hobby;
