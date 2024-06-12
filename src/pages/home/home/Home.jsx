import Container from "../../shared/container/Container";
import TrendingProducts from "../../trendingProducts/FeaturedSection";
import Slider from "../slider/Slider";


const Home = () => {
    return (
        <Container>
            <Slider></Slider>
            <TrendingProducts></TrendingProducts>
        </Container>
    );
};

export default Home;