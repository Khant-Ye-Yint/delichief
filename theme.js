import { extendTheme } from '@chakra-ui/react';

const theme = {
	colors: {
		primary: {
			100: '#03A678',
			200: '#02735E',
			300: '#014040',
		},
		secondary: {
			100: '#F27405',
			200: '#731702',
		},
		text: {
			100: '#31393C',
			200: '#676869',
		},
		background: '#F1F0EC',
	},
	fonts: {
		dosis: 'Dosis',
		saira: 'Saira',
	},
	initialColorMode: 'light',
	useSystemColorMode: false,
};

export default extendTheme(theme);
