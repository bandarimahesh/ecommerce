import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/NewsLetter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <React.Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
