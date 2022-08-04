import React from 'react';
import { Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Card from './Card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Crousel = ({ data }) => {
	const slides = useBreakpointValue({
		base: 1,
		md: 1,
		lg: 3,
	});

	return (
		<Swiper
			slidesPerView={slides}
			spaceBetween={30}
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			style={{
				'--swiper-navigation-color': '#03A678',
				'--swiper-pagination-color': '#03A678',
			}}
		>
			{data.map((chunk) => (
				<SwiperSlide key={chunk.id}>
					<Stack justifyContent='center' alignItems='center' py='8'>
						<Card
							id={chunk.id}
							title={chunk.title}
							category={chunk.category}
							serves={chunk.serves}
							imgUrl={chunk.imgUrl}
						/>
					</Stack>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Crousel;
