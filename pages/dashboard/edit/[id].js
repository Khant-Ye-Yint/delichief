import Layout from '../../../components/Layout';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next//router';

const EditItem = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<Layout>
			<Box
				fontFamily='dosis'
				fontWeight='bold'
				fontSize={{ base: '2.5rem', md: '4rem' }}
			>
				Edit {id}
			</Box>
		</Layout>
	);
};

export default EditItem;
