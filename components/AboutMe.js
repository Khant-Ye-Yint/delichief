import { Stack, VStack, Box } from '@chakra-ui/react';
import ButtonLink from './ButtonLink';
import Image from 'next/image';

import ChefImg from '../public/chef.png';

const AboutMe = () => {
	return (
		<Stack
			minH='80vh'
			justifyContent='space-between'
			alignItems='center'
			rowGap={{ base: '30px', md: '80px' }}
			flexDir={{ base: 'column-reverse', xl: 'row' }}
		>
			<Stack
				flex={1}
				justifyContent='center'
				alignItems={{ base: 'center', lg: 'flex-start' }}
			>
				<Box
					w={{ base: '300px', md: '500px' }}
					h={{ base: '500px', md: '700px' }}
					position='relative'
					borderRadius={20}
					overflow='hidden'
				>
					<Image
						src={ChefImg}
						alt='salad'
						layout='fill'
						objectFit='contain'
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
						Masaharu Morimoto ,
					</Box>{' '}
					(森本 正治, Morimoto Masaharu, born May 26, 1955, in Hiroshima, Japan)
					is a Japanese chef, best known as an Iron Chef on the Japanese TV
					cooking show Iron Chef and its spinoff Iron Chef America. He is also
					known for his unique style of presenting food.
				</Box>
			</VStack>
		</Stack>
	);
};

export default AboutMe;
