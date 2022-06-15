import {
	HStack,
	Box,
	Slide,
	useDisclosure,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import useScrollControl from '../hooks/useScrollControl';

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

const NavButton = ({ toggle, Icon }) => (
	<Box
		p='1'
		bg='primary.100'
		fontSize='32px'
		borderRadius='10'
		cursor='pointer'
		_hover={{ bg: 'primary.200' }}
		onClick={toggle}
		color='background'
	>
		<Icon />
	</Box>
);

const Navbar = () => {
	const router = useRouter();
	const path = router.asPath;

	const { isOpen, onToggle } = useDisclosure();
	const device = useBreakpointValue({ base: 'phone', md: 'others' });
	const { allowScroll, preventScroll } = useScrollControl();

	useEffect(() => {
		isOpen ? preventScroll() : allowScroll();
	}, [isOpen, allowScroll, preventScroll]);

	return (
		<Box w='full'>
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
				{device == 'phone' ? (
					<NavButton toggle={onToggle} Icon={BiMenuAltRight} />
				) : (
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
				)}
			</HStack>
			<Slide direction='right' in={isOpen} style={{ zIndex: 10 }}>
				<VStack p='6' color='black' bg='background' h='100vh'>
					<Box alignSelf='flex-end'>
						<NavButton toggle={onToggle} Icon={MdOutlineClose} />
					</Box>
					<VStack flex={1} justifyContent='space-around' py='40'>
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
					</VStack>
				</VStack>
			</Slide>
		</Box>
	);
};

export default Navbar;
