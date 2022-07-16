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

const Dashboard = () => {
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
						<Tr>
							<Td>Healthy Salad</Td>
							<Td>Two Adults</Td>
							<Td>Salad</Td>
							<Td isNumeric>
								<HStack justifyContent='flex-end'>
									<ButtonLink
										href='/dashboard/edit/someId'
										text='Edit'
										variant='green'
										size='sm'
									/>
									<ButtonLink href='/dashboard/edit' text='Delete' size='sm' />
								</HStack>
							</Td>
						</Tr>
						<Tr>
							<Td>Healthy Salad</Td>
							<Td>Two Adults</Td>
							<Td>Salad</Td>
							<Td isNumeric>
								<HStack justifyContent='flex-end'>
									<ButtonLink
										href='/dashboard/edit/someId'
										text='Edit'
										variant='green'
										size='sm'
									/>
									<ButtonLink href='/dashboard/edit' text='Delete' size='sm' />
								</HStack>
							</Td>
						</Tr>
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

export default Dashboard;
