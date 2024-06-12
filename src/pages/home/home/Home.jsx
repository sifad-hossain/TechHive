import Container from "../../shared/container/Container";
import FeaturedSection from "../../trendingProducts/FeaturedSection";
import TrendingProducts from "../../trendingProducts/TrendingProducts";
import Slider from "../slider/Slider";


const Home = () => {
    return (
        <Container>
            <Slider></Slider>
            <h1 className="text-3xl text-center">Feautred Section</h1>
            <p className="">Dive into the forefront of technology with our curated Featured Products. Handpicked by our dedicated moderators, these cutting-edge tools, groundbreaking apps, and revolutionary software represent the best in tech innovation. Explore the top-tier products that are setting new industry standards.</p>
            <FeaturedSection></FeaturedSection>
            <h1 className="text-3xl text-center">Trending Section</h1>
            <p>Stay ahead of the curve with our Trending Products section. These tech innovations are making waves in the community, driven by user engagement and upvotes. Explore the most popular tools, apps, and software that are capturing the attention and admiration of tech enthusiasts worldwide.</p>
            <TrendingProducts></TrendingProducts>
        </Container>
    );
};

export default Home;