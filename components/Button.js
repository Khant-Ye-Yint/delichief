import { Box } from '@chakra-ui/react';

const ButtonLink = (props) => {
	const { text, variant, size } = props;

	return (
		<Box
			color='background'
			fontSize={size != 'sm' ? '1.75rem' : '1rem'}
			fontFamily='dosis'
			fontWeight='bold'
			bg={variant == 'green' ? 'primary.100' : 'secondary.100'}
			_hover={{ bg: variant == 'green' ? 'primary.200' : 'secondary.200' }}
			px={{ base: '3', md: '4' }}
			py={{ base: '2', md: '2' }}
			cursor='pointer'
			borderRadius={{ base: '10', md: '15' }}
			{...props}
		>
			{text}
		</Box>
	);
};

export default ButtonLink;
