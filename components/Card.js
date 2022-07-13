import { useState } from 'react';

import { Box, HStack, VStack, Badge, background } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import Image from 'next/image';
import { useRouter } from 'next/router';

import SaladImg from '../public/salad.jpg';

const Card = ({ title, category, serves }) => {
	const [hover, setHover] = useState(false);
	const router = useRouter();

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
			onClick={() => router.push(`/recipes/${title}`)}
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
					alt={title}
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
						fontSize={12}
						fontFamily='saira'
						px='2'
						py='1'
						borderRadius='5'
					>
						{category}
					</Badge>
					<Badge
						bg='primary.100'
						color='background'
						fontWeight='bold'
						fontSize={12}
						fontFamily='saira'
						px='2'
						py='1'
						borderRadius='5'
					>
						{serves}
					</Badge>
				</HStack>
			</VStack>
		</Box>
	);
};

export default Card;
