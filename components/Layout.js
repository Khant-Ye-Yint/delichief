import Footer from './Footer';
import Navbar from './Navbar';

import { VStack, Stack, Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<Stack
			minH='100vh'
			justifyContent='center'
			alignItems='center'
			bg='background'
			color='text.100'
		>
			<VStack
				minH='100vh'
				justifyContent='space-between'
				alignItems='center'
				maxW={{ base: '90%', md: '900px' }}
				minW='80%'
			>
				<Navbar />
				<Box flex={1} w='full'>
					{children}
				</Box>
				<Footer />
			</VStack>
		</Stack>
	);
};

export default Layout;
