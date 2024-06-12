import Container from "../../shared/container/Container";
import FeaturedSection from "../../trendingProducts/FeaturedSection";
import TrendingProducts from "../../trendingProducts/TrendingProducts";
import Slider from "../slider/Slider";


const Home = () => {
    return (
        <Container>
            <Slider></Slider>
            <h1 className="text-3xl text-center">Feautred Section</h1>
            <FeaturedSection></FeaturedSection>
            <h1 className="text-3xl text-center">Trending Section</h1>
            <TrendingProducts></TrendingProducts>
        </Container>
    );
};

export default Home;