import Layout from '../components/Layout';

import { Box } from '@chakra-ui/react';

const Recipes = () => {
	return (
		<Layout>
			<Box
				fontSize='48px'
				fontFamily='dosis'
				fontWeight='bold'
				color='text.100'
				mt='20px'
			>
				Our Delecious Recipes
			</Box>
		</Layout>
	);
};

export default Recipes;
