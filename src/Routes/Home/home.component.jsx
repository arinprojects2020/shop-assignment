import React from "react";
import Categories from "../../Components/Categories/Categories.component";
import Banner from "../../Components/Banner/Banner.component";
import Footer from "../../Components/Footer/Footer.component";




const Home= ()=>{
return(
  <>
  <div className="home-component">
  <Banner/>
  <Categories/>
  <Footer/>
  </div>
  </>
);


 
};

export default Home;