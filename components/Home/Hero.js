import { HStack, VStack, Box, Stack } from '@chakra-ui/react';
import ButtonLink from '../ButtonLink';

import Image from 'next/image';
import SaladImg from '../../public/salad.jpg';

const Hero = () => {
	return (
		<Stack
			minH='80vh'
			justifyContent='space-between'
			alignItems='center'
			flexWrap='wrap'
			rowGap='80px'
			flexDir={{ base: 'column', lg: 'row' }}
		>
			<VStack flex={1} alignItems='flex-start' rowGap='40px'>
				<Box
					fontSize='96px'
					fontFamily='dosis'
					color='text.100'
					fontWeight='bold'
				>
					All happiness starts from delicious meal.
				</Box>
				<ButtonLink href='/recipes' text='Our Recipes' />
			</VStack>
			<Stack
				flex={1}
				justifyContent='center'
				alignItems={{ base: 'center', lg: 'flex-end' }}
			>
				<Box
					w='600px'
					h='600px'
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
