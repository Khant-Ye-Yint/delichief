import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Crousel from './Crousel';

const Featured = ({ data }) => {
	return (
		<Box>
			<VStack
				justifyContent='space-between'
				alignItems='center'
				mb={{ base: '0', md: '6', lg: '14' }}
			>
				<Box
					fontSize={{ base: '3.25rem', md: '3.5rem' }}
					fontFamily='dosis'
					color='primary.100'
					fontWeight='bold'
				>
					Latest Dishes
				</Box>
			</VStack>
			<Crousel data={data} />
		</Box>
	);
};

export default Featured;
