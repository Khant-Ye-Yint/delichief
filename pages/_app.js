import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

import '@fontsource/dosis/500.css';
import '@fontsource/saira/500.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
