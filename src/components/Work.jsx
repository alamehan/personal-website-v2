import styles from "../style";
import { useState } from "react";
import { Button, CardWork } from "../components";
import { workLinistore, workLiniseller, workKelolaGudangClient, workKelolaGudangStaff, workKelolaIklan, workKelolaPaket, workKelolaBayar, workLandingPage, workDesignSystem, workLogoRebranding, workAisc2023, workIchec2022 } from "../assets";

const Work = () => {
	const [showMore, setShowMore] = useState(false);

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	return (
		<>
			<section id="work" className={`${styles.maxWidth}`}>
				{/* ---------------------------------- Title --------------------------------- */}

				<div className={`${styles.flexCenter} mb-10`}>
					<h3 className="text-h3">Some of my work 👨‍💻</h3>
				</div>

				{/* ---------------------------------- Card ---------------------------------- */}

				<CardWork image={workLinistore} alt="LiniStore" link="#none" classCard="bg-indigo-500 lg:flex-row" classImage="lg:mr-4" classButton="!bg-indigo-500 !text-white" title="LiniStore" description="A social-commerce website with group buying, group chat, live, friend activity features. Fully responsive. 200+ pages in total.">
					<div className="text-label !bg-indigo-50 !text-indigo-500">Research</div>
					<div className="text-label !bg-indigo-50 !text-indigo-500">Design</div>
					<div className="text-label !bg-indigo-50 !text-indigo-500">Prototype</div>
				</CardWork>

				<CardWork image={workLiniseller} alt="LiniSeller" link="#none" classCard="bg-emerald-500 lg:flex-row-reverse" classImage="lg:ml-4" classButton="!bg-emerald-500 !text-white" title="LiniSeller" description="LiniStore is for buyers, while LiniSeller is for sellers. Sellers can open an online store and sell their products on LiniStore. 100+ pages in total.">
					<div className="text-label !bg-emerald-50 !text-emerald-500">Research</div>
					<div className="text-label !bg-emerald-50 !text-emerald-500">Design</div>
					<div className="text-label !bg-emerald-50 !text-emerald-500">Prototype</div>
				</CardWork>

				<CardWork image={workKelolaGudangClient} alt="Kelola Gudang" link="#none" classCard="bg-sky-500 lg:flex-row" classImage="lg:mr-4" classButton="!bg-sky-500 !text-white" title="Kelola Gudang" description="An e-commerce fulfillment service that helps online sellers to focus on selling, operational management matters such as packaging to shipping products from the warehouse to the client are handled by staff. 120+ pages in total.">
					<div className="text-label !bg-sky-50 !text-sky-500">Design</div>
					<div className="text-label !bg-sky-50 !text-sky-500">Prototype</div>
				</CardWork>

				<CardWork image={workLandingPage} alt="Landing Page" link="#none" classCard="bg-pink-500 lg:flex-row-reverse" classImage="lg:ml-4" classButton="!bg-pink-500 !text-white" title="Landing Page" description="Kelola Super App landing page. A web page that contains information about the product and serve as a promotional tool.">
					<div className="text-label !bg-pink-50 !text-pink-500">Research</div>
					<div className="text-label !bg-pink-50 !text-pink-500">Design</div>
					<div className="text-label !bg-pink-50 !text-pink-500">Prototype</div>
				</CardWork>

				<CardWork image={workDesignSystem} alt="Design System" link="#none" classCard="bg-slate-500 lg:flex-row" classImage="lg:mr-4" classButton="!bg-slate-500 !text-white" title="Design System" description="Build, manage, and maintain both LiniStore and Kelola Super App design system. From color system, typography, style, effect, spacing, grid, iconography, illustration, and basic components.">
					<div className="text-label !bg-slate-50 !text-slate-500">Research</div>
					<div className="text-label !bg-slate-50 !text-slate-500">Design</div>
				</CardWork>

				<div id="target-work-last"></div>

				<CardWork image={workLogoRebranding} alt="Logo Rebranding" link="#none" classCard="bg-red-500 lg:flex-row-reverse" classImage="lg:ml-4" classButton="!bg-red-500 !text-white" title="Logo Rebranding" description="Rebranding the Kelola Super App logo. Designing logos for Kelola Gudang, Kelola Paket, Kelola Asuransi, Kelola Bayar, Kelola TMS, Kelola ERP, and Kelola SAAS.">
					<div className="text-label !bg-red-50 !text-red-500">Research</div>
					<div className="text-label !bg-red-50 !text-red-500">Design</div>
				</CardWork>

				{/* ---------------------------- Show More Content --------------------------- */}

				{showMore && (
					<>
						<CardWork image={workKelolaGudangStaff} alt="Kelola Gudang Staff" link="#none" classCard="bg-cyan-500 lg:flex-row" classImage="lg:mr-4" classButton="!bg-cyan-500 !text-white" title="Kelola Gudang Staff" description="Kelola Gudang is for online sellers, while Kelola Gudang Staff is for staff who helps with the operational management of the online sellers as instructed in the app. 70+ pages in total.">
							<div className="text-label !bg-cyan-50 !text-cyan-500">Design</div>
							<div className="text-label !bg-cyan-50 !text-cyan-500">Prototype</div>
						</CardWork>

						<CardWork image={workKelolaIklan} alt="Kelola Iklan" link="#none" classCard="bg-purple-500 lg:flex-row-reverse" classImage="lg:ml-4" classButton="!bg-purple-500 !text-white" title="Kelola Iklan" description="A bidding website for advertising space. Connects media owners (ad space owners) and clients (ad space renters). 70+ pages in total.">
							<div className="text-label !bg-purple-50 !text-purple-500">Research</div>
							<div className="text-label !bg-purple-50 !text-purple-500">Design</div>
							<div className="text-label !bg-purple-50 !text-purple-500">Prototype</div>
						</CardWork>

						<CardWork image={workKelolaPaket} alt="Kelola Paket" link="#none" classCard="bg-indigo-500 lg:flex-row" classImage="lg:mr-4" classButton="!bg-indigo-500 !text-white" title="Kelola Paket" description="A package delivery app with a wide selection of the best expedition services. Track delivery status, check shipping costs, multi-order features, etc. 50+ pages in total.">
							<div className="text-label !bg-indigo-50 !text-indigo-500">Research</div>
							<div className="text-label !bg-indigo-50 !text-indigo-500">Design</div>
							<div className="text-label !bg-indigo-50 !text-indigo-500">Prototype</div>
						</CardWork>

						<CardWork image={workKelolaBayar} alt="Kelola Bayar" link="#none" classCard="bg-blue-500 lg:flex-row-reverse" classImage="lg:ml-4" classButton="!bg-blue-500 !text-white" title="Kelola Bayar" description="A payment gateway widget that handles balance top-ups and payments in the Kelola Super App environment.">
							<div className="text-label !bg-blue-50 !text-blue-500">Design</div>
							<div className="text-label !bg-blue-50 !text-blue-500">Prototype</div>
						</CardWork>

						<CardWork image={workAisc2023} alt="AISC 2023" link="#none" classCard="bg-lime-500 lg:flex-row" classImage="lg:mr-4" classButton="!bg-lime-500 !text-white" title="AISC 2023" description="Designing the AISC 2023 (AIChE Indonesia Student Conference) Universitas Pertamina website user interface, fully-responsive. A website that displays information on annual events and competitions.">
							<div className="text-label !bg-lime-50 !text-lime-500">Design</div>
							<div className="text-label !bg-lime-50 !text-lime-500">Prototype</div>
							<div className="text-label !bg-lime-50 !text-lime-500">Code</div>
						</CardWork>

						<CardWork image={workIchec2022} alt="IChEC 2022" link="#none" classCard="bg-yellow-500 lg:flex-row-reverse" classImage="lg:ml-4" classButton="!bg-yellow-500 !text-white" title="IChEC 2022" description="Designing the IChEC 2022 (Indonesia Chemical Engineering Challenge) Institut Teknologi Bandung website user interface. A website that displays information on annual events and competitions.">
							<div className="text-label !bg-yellow-50 !text-yellow-500">Design</div>
							<div className="text-label !bg-yellow-50 !text-yellow-500">Prototype</div>
							<div className="text-label !bg-yellow-50 !text-yellow-500">Code</div>
						</CardWork>
					</>
				)}

				{/* --------------------------------- Button --------------------------------- */}

				<div className={`${styles.flexCenter} mt-10`}>
					<Button targetLink={`${showMore ? "#none" : "#target-work-last"}`} onClick={handleMoreClick}>
						{showMore ? "- Show less" : "+ Show more"}
					</Button>
				</div>
			</section>
		</>
	);
};

export default Work;
