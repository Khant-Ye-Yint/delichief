import { HStack, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const SocialLink = ({ href, Wrapper }) => {
	return (
		<Link href={href}>
			<Box
				color='primary.100'
				cursor='pointer'
				_hover={{ color: 'primary.200' }}
			>
				<Wrapper size='42px' />
			</Box>
		</Link>
	);
};

const Footer = () => {
	return (
		<HStack w='full' h='10vh'>
			<Link href='/'>
				<Box
					fontSize='48px'
					color='primary.100'
					fontWeight='bold'
					flex={1}
					cursor='pointer'
				>
					Delichef
				</Box>
			</Link>
			<Box
				fontFamily='dosis'
				fontSize='28px'
				fontWeight='bold'
				color='text.100'
			>
				{new Date().getFullYear()}
			</Box>
			<HStack flex='1' justifyContent='flex-end' columnGap='70px'>
				<SocialLink Wrapper={BsFacebook} href='#' />
				<SocialLink Wrapper={BsTwitter} href='#' />
				<SocialLink Wrapper={BsInstagram} href='#' />
			</HStack>
		</HStack>
	);
};

export default Footer;
