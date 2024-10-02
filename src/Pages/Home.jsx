
import HeroSection from "../Components/Home/HeroSection";
import Projects from "../Components/Home/Projects";
import ReviewSlider from "../Components/Home/ReviewSlider";
import ContactMe from "../Components/Home/ContactMe";
import Images from "../Components/Common/Images";
import Footer from "../Components/Common/Footer";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col w-screen">
            <div className="flex flex-col w-full">
                <div id="Home"></div>
                <HeroSection />
                <div id="projects"></div>
                <Projects/>
                <div id="recommendations"></div>
                <ReviewSlider/>
                <div id="contact"></div>
                <ContactMe/>
                <div id="education"></div>
                <Images/>

                <Footer/>
            </div>
            
            
        </div>
    );
};

export default Home;
