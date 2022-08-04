import { useState } from 'react';

import { Box, HStack, VStack, Badge, background } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import Image from 'next/image';
import { useRouter } from 'next/router';

import SaladImg from '../public/salad.jpg';

const Card = ({ id, title, category, serves, imgUrl }) => {
	const [hover, setHover] = useState(false);
	const router = useRouter();

	const truncate = (str, n) => {
		return str.length > n ? str.substr(0, n - 1) + '...' : str;
	};

	return (
		<Box
			w={{ base: '16rem', lg: '15rem' }}
			bg='white'
			borderRadius={15}
			overflow='hidden'
			cursor='pointer'
			_hover={{
				bg: whiten('background', 50),
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={() => router.push(`/recipes/${id}`)}
		>
			<Box w='full' h='15rem' overflow='hidden'>
				<Box
					w='full'
					h='full'
					position='relative'
					transition='ease-in'
					transitionDuration='0.4s'
					transform={hover && 'scale(1.2)'}
				>
					<Image
						src={imgUrl}
						alt={title}
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</Box>
			</Box>
			<VStack
				px='5'
				py='4'
				alignItems='flex-start'
				justifyContent='space-between'
			>
				<Box
					color='primary.100'
					fontWeight='bold'
					fontSize='1.75rem'
					fontFamily='dosis'
				>
					{truncate(title, 16)}
				</Box>
				<HStack>
					<Badge
						bg='secondary.100'
						color='background'
						fontWeight='bold'
						fontSize={10}
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
						fontSize={10}
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
