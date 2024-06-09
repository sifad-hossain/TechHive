
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css'

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Container from '../../shared/container/Container';

const Slider = () => {
    return (
        <>
            <Container>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation, Autoplay]}
                    className="mySwiper "
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            'background-image':
                                'url(https://i.ibb.co/yfLcwvy/pikaso-texttoimage-Modern-technology-related-image.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide className='space-y-3'>
                        <div className="title mt-32 text-[44px] font-normal uppercase" data-swiper-parallax="-300">
                        Your Gateway to the Future
                        </div>
                        <div className="subtitle font-normal text-3xl text-[#FFFFFF] " data-swiper-parallax="-200">
                        Explore the Latest in Web Apps, AI Tools, Software, Games
                        </div>
                        <div className="text text-[21px] pb-9 font-normal text-[#FFFFFF]" data-swiper-parallax="-100">
                            <p>
                            Step into TechHive, where the future of technology is at your fingertips. Discover cutting-edge tech products, vote for your favorites, and share your own innovations. Whether you are a tech enthusiast or a developer, TechHive is your gateway to the latest and greatest in tech.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='space-y-3'>
                        <div className="title mt-32 text-[44px] font-normal uppercase" data-swiper-parallax="-300">
                        Dive into Tech Excellence
                        </div>
                        <div className="subtitle font-normal text-3xl text-[#FFFFFF] " data-swiper-parallax="-200">
                        Discover the Best Tech Innovations and Share Your Own Creations
                        </div>
                        <div className="text text-[21px] pb-9 font-normal text-[#FFFFFF]" data-swiper-parallax="-100">
                            <p>
                            At TechHive, we celebrate tech excellence. Dive into a curated collection of the best web apps, AI tools, software, games, and mobile apps. Submit your own products, connect with like-minded innovators, and help shape the tech landscape of tomorrow.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='space-y-3'>
                        <div className="title mt-32 text-[44px] font-normal uppercase" data-swiper-parallax="-300">
                        The Hive of Innovation
                        </div>
                        <div className="subtitle font-normal text-3xl text-[#FFFFFF] " data-swiper-parallax="-200">
                        Discover, Upvote, and Share the Next Big Thing in Tech
                        </div>
                        <div className="text text-[21px] pb-9 font-normal text-[#FFFFFF]" data-swiper-parallax="-100">
                            <p>
                            TechHive is your hive of innovation. Discover the next big thing in tech, from cutting-edge apps to groundbreaking tools. Upvote your favorite products, share your own, and collaborate with a community of tech enthusiasts driving the future of technology.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='space-y-3'>
                        <div className="title mt-32 text-[44px] font-normal uppercase" data-swiper-parallax="-300">
                        Unleash Innovation
                        </div>
                        <div className="subtitle font-normal text-3xl text-[#FFFFFF] " data-swiper-parallax="-200">
                        Discover, Share, and Elevate Cutting-Edge Tech Products
                        </div>
                        <div className="text text-[21px] pb-9 font-normal text-[#FFFFFF]" data-swiper-parallax="-100">
                            <p>
                            Welcome to TechHive, your ultimate destination for discovering the latest innovations in technology. From web apps and AI tools to software, games, and mobile apps, explore a world of groundbreaking tech products. Join our community, share your creations, and elevate the future of technology together.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='space-y-3'>
                        <div className="title mt-32 text-[44px] font-normal uppercase" data-swiper-parallax="-300">
                        Innovate Together
                        </div>
                        <div className="subtitle font-normal text-3xl text-[#FFFFFF] " data-swiper-parallax="-200">
                        Explore New Tech Horizons and Contribute to the Future of Technology
                        </div>
                        <div className="text text-[21px] pb-9 font-normal text-[#FFFFFF]" data-swiper-parallax="-100">
                            <p>
                            Welcome to TechHive, a platform dedicated to collective innovation. Explore new tech horizons with the latest web apps, AI tools, software, games, and mobile apps. Contribute your own creations and join a community committed to advancing the future of technology.
                            </p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </Container>
        </>
    );
};

export default Slider;