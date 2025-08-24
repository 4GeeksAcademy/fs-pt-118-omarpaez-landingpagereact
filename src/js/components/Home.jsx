import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<Container />
			<Footer />
		</div>
	)
};

export default Home;