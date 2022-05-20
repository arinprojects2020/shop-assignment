import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCarousel from "react-hero-carousel/dist/HeroCarousel";
import "./Banner.styles.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const config = {
	url: "http://localhost:5000/banners",
	method: "get",
	headers: { "Content-Type": "application/json" }
};
SwiperCore.use([Navigation, Pagination, A11y, Autoplay,Scrollbar]);

const Banner = () => {
	const [banners, setBanners] = useState([]);
	const fetchData = async () => {
		try {
			const response = await axios(config);
			console.log("respnse from banner", response.data);
			setBanners(response.data);
		} catch (err) {
			console.log("error while fetching data ", err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="banner-wrapper">
			<Swiper
				slidesPerView={1}
				pagination={{ clickable: true }}
				autopla={{ delay: 6000 }}
				scrollbar={{ draggable: true }}
				navigation={{ prevE1: ".prevE1", nextE1: ".nextE1" }}
				loop
			>
				{banners.map((banner) => {
					return (
						<SwiperSlide key={banner.id}>
							<HeroCarousel>
								<img
									src={banner.bannerImageUrl}
									alt={banner.bannerImageAlt}
									
								/>
							</HeroCarousel>
						</SwiperSlide>
					);
				})}
				<button className="prevE1">PREVIOUS</button>
				<button className="pnextE1">NEXT</button>
			</Swiper>
		</div>
	);
};

export default Banner;
