import Layout from '../components/Layout';

import { Box } from '@chakra-ui/react';

const About = () => {
	return (
		<Layout>
			<Box
				fontSize='48px'
				fontFamily='dosis'
				fontWeight='bold'
				color='text.100'
			>
				About
			</Box>
		</Layout>
	);
};

export default About;
