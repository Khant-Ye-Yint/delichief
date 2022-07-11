import { useState } from 'react';

import { Box, HStack, VStack, Badge, background } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import Image from 'next/image';

import SaladImg from '../public/salad.jpg';

const Card = ({ title, mainMeat, method, alt }) => {
	const [hover, setHover] = useState(false);

	return (
		<Box
			w={{ base: '16rem', lg: '20rem' }}
			bg='white'
			borderRadius={15}
			overflow='hidden'
			cursor='pointer'
			_hover={{
				bg: whiten('background', 50),
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Box
				w='full'
				h='15rem'
				position='relative'
				transition='ease-in'
				transitionDuration='0.3s'
				filter={hover && 'grayscale(80%)'}
			>
				<Image
					src={SaladImg}
					alt={alt}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</Box>
			<VStack px='5' py='4' alignItems='flex-start' justifyContent='center'>
				<Box
					color='primary.100'
					fontWeight='bold'
					fontSize={35}
					fontFamily='dosis'
				>
					{title}
				</Box>
				<HStack>
					<Badge
						bg='secondary.100'
						color='background'
						fontWeight='bold'
						fontSize={13}
						fontFamily='saira'
						px='3'
						py='1'
						borderRadius='5'
					>
						{method}
					</Badge>
					<Badge
						bg='primary.100'
						color='background'
						fontWeight='bold'
						fontSize={13}
						fontFamily='saira'
						px='3'
						py='1'
						borderRadius='5'
					>
						{mainMeat}
					</Badge>
				</HStack>
			</VStack>
		</Box>
	);
};

export default Card;
