import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	Tfoot,
	Box,
	HStack,
} from '@chakra-ui/react';
import Layout from '../../components/Layout';
import ButtonLink from '../../components/ButtonLink';
import Button from '../../components/Button';
import axios from 'axios';

const Dashboard = ({ data }) => {
	return (
		<Layout>
			<HStack justifyContent='space-between'>
				<Box
					fontFamily='dosis'
					fontWeight='bold'
					fontSize={{ base: '2.5rem', md: '4rem' }}
				>
					Dashboard
				</Box>
				<ButtonLink href='/dashboard/add' text='Add' variant='green' />
			</HStack>
			<TableContainer>
				<Table variant='simple'>
					<Thead fontFamily='dosis'>
						<Tr>
							<Th>Title</Th>
							<Th>Serves</Th>
							<Th>Category</Th>
							<Th isNumeric>Actions</Th>
						</Tr>
					</Thead>
					<Tbody fontFamily='saira'>
						{data.map((chunk) => (
							<Tr key={chunk.id}>
								<Td>{chunk.title}</Td>
								<Td>{chunk.serves}</Td>
								<Td>{chunk.category}</Td>
								<Td isNumeric>
									<HStack justifyContent='flex-end'>
										<ButtonLink
											href={`/dashboard/edit/${chunk.id}`}
											text='Edit'
											variant='green'
											size='sm'
										/>
										<Button text='Delete' size='sm' />
									</HStack>
								</Td>
							</Tr>
						))}
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>Title</Th>
							<Th>Serves</Th>
							<Th>Category</Th>
							<Th isNumeric>Actions</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await axios.get('http://localhost:5236/api/Delichef');
	return { props: { data: res.data }, revalidate: 60 };
}

export default Dashboard;
