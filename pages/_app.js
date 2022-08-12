import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	RedirectToSignIn,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';

import '@fontsource/dosis/500.css';
import '@fontsource/saira/500.css';

const publicPages = ['/', '/recipes', '/recipes/[...id].js', '/about'];

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();
	const isPublicPage = publicPages.includes(pathname);
	return (
		<ChakraProvider theme={theme}>
			<ClerkProvider {...pageProps}>
				{isPublicPage ? (
					<Component {...pageProps} />
				) : (
					<>
						<SignedIn>
							<Component {...pageProps} />
						</SignedIn>
						<SignedOut>
							<RedirectToSignIn />
						</SignedOut>
					</>
				)}
			</ClerkProvider>
		</ChakraProvider>
	);
}

export default MyApp;
