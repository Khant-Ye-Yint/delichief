import { Box } from '@chakra-ui/react';
import Link from 'next/link';

const ButtonLink = ({ href, text, variant, size }) => {
	return (
		<Link href={href}>
			<Box
				color='background'
				fontSize={(size = 'sm' ? '1rem' : '1.75rem')}
				fontFamily='dosis'
				fontWeight='bold'
				bg={variant == 'green' ? 'primary.100' : 'secondary.100'}
				_hover={{ bg: variant == 'green' ? 'primary.200' : 'secondary.200' }}
				px={(size = 'sm' ? '3' : '5')}
				py={(size = 'sm' ? '2' : '3')}
				cursor='pointer'
				borderRadius={(size = 'sm' ? '10' : '15')}
			>
				{text}
			</Box>
		</Link>
	);
};

export default ButtonLink;
