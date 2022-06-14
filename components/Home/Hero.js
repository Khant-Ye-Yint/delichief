import { HStack, VStack, Box } from '@chakra-ui/react';
import ButtonLink from '../ButtonLink';

import Image from 'next/image';
import SaladImg from '../../public/salad.jpg';

const Hero = () => {
	return (
		<HStack h='80vh' justifyContent='space-between' alignItems='center'>
			<VStack flex={1} alignItems='flex-start' rowGap='60px'>
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
		</HStack>
	);
};

export default Hero;
