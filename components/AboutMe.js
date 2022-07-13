import { Stack, VStack, Box } from '@chakra-ui/react';
import ButtonLink from './ButtonLink';
import Image from 'next/image';

import ChefImg from '../public/chef.jpg';

const AboutMe = () => {
	return (
		<Stack
			minH='90vh'
			justifyContent='space-between'
			alignItems='center'
			rowGap='80px'
			flexDir={{ base: 'column-reverse', xl: 'row' }}
		>
			<Stack
				flex={1}
				justifyContent='center'
				alignItems={{ base: 'center', lg: 'flex-start' }}
			>
				<Box
					w={{ base: '300px', md: '430px' }}
					h={{ base: '500px', md: '700px' }}
					position='relative'
					borderRadius={20}
					overflow='hidden'
				>
					<Image
						src={ChefImg}
						alt='salad'
						layout='fill'
						objectFit='cover'
						objectPosition='center'
						placeholder='blur'
					/>
				</Box>
			</Stack>
			<VStack flex={1} alignItems='flex-start' rowGap='40px'>
				<Box
					fontSize={{ base: '3.25rem', md: '3.5rem' }}
					fontFamily='dosis'
					color='primary.100'
					fontWeight='bold'
				>
					Meet Our Chef
				</Box>
				<Box
					fontSize={{ base: '1.25rem', md: '1.75rem' }}
					fontFamily='saira'
					color='text.200'
				>
					<Box
						fontFamily='saira'
						color='secondary.100'
						fontWeight='bold'
						display='inline-block'
					>
						Eant Wint Hunt ,
					</Box>{' '}
					presenter from Forever Group MRTV-4 and Channel-7 mostly popular in
					cooking shows and other cooking programs. My recipes are fast and easy
					to follow. You can change meat, fish, seafood, vegetables included in
					my recipe to your alikes. I hope my recipes are useful for office
					stuffs, children and anyone who doesn’t have time to cook.
				</Box>
			</VStack>
		</Stack>
	);
};

export default AboutMe;
