import { Box } from '@chakra-ui/react';
import Link from 'next/link';

const ButtonLink = ({ href, text }) => {
	return (
		<Link href={href}>
			<Box
				color='background'
				fontSize='28px'
				fontFamily='dosis'
				fontWeight='bold'
				bg='primary.100'
				_hover={{ bg: 'primary.200' }}
				px='32px'
				py='8px'
				cursor='pointer'
				borderRadius={15}
			>
				{text}
			</Box>
		</Link>
	);
};

export default ButtonLink;
