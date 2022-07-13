import { VStack, Box, Stack } from '@chakra-ui/react';
import ButtonLink from './ButtonLink';

import Image from 'next/image';
import SaladImg from '../public/salad.jpg';

const Hero = () => {
	return (
		<Stack
			minH='90vh'
			justifyContent='space-between'
			alignItems='center'
			rowGap='80px'
			flexDir={{ base: 'column', xl: 'row' }}
			mb={{ base: 20, xl: 0 }}
		>
			<VStack flex={1} alignItems='flex-start' rowGap='40px'>
				<Box
					fontSize={{ base: '4.25rem', md: '6rem' }}
					fontFamily='dosis'
					color='text.100'
					fontWeight='bold'
				>
					All happiness starts from delicious meal.
				</Box>
				<ButtonLink href='/recipes' text='Our Recipes' variant='green' />
			</VStack>
			<Stack
				flex={1}
				justifyContent='center'
				alignItems={{ base: 'center', lg: 'flex-end' }}
			>
				<Box
					w={{ base: '350px', md: '600px' }}
					h={{ base: '350px', md: '600px' }}
					position='relative'
					borderRadius='50%'
					overflow='hidden'
				>
					<Image
						src={SaladImg}
						alt='salad'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
						placeholder='blur'
					/>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Hero;
