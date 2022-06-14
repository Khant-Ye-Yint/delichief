import { HStack, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ text, href, active }) => {
	return (
		<Link href={href}>
			<Box
				cursor='pointer'
				fontSize='24px'
				fontFamily='saira'
				color={active ? 'secondary.100' : 'text.200'}
				_hover={{ color: !active && 'text.100' }}
			>
				{text}
			</Box>
		</Link>
	);
};

const Navbar = () => {
	const router = useRouter();
	const path = router.asPath;

	return (
		<HStack
			h='10vh'
			justifyContent='space-between'
			alignItems='center'
			w='full'
		>
			<Link href='/'>
				<Box
					fontSize='48px'
					color='primary.100'
					fontWeight='bold'
					flex={1}
					cursor='pointer'
					fontFamily='dosis'
				>
					Delichef
				</Box>
			</Link>
			<HStack justifyContent='space-between' flex={{ base: 1, lg: 2 / 3 }}>
				<NavLink text='home' href='/' active={path == '/'} />
				<NavLink
					text='recipes'
					href='/recipes'
					active={path.includes('recipes')}
				/>
				<NavLink
					text='about me'
					href='/about'
					active={path.includes('about')}
				/>
			</HStack>
		</HStack>
	);
};

export default Navbar;
