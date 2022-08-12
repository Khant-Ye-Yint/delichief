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
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import Layout from '../../components/Layout';
import ButtonLink from '../../components/ButtonLink';
import Button from '../../components/Button';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';

const Dashboard = ({ data }) => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const [deleteId, setDeleteId] = useState('');
	const [keywords, setKeywords] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	useEffect(() => {
		const desiredData = data.filter((chunk) =>
			chunk.title.toLowerCase().includes(keywords.toLocaleLowerCase())
		);
		setFilteredData(desiredData);
	}, [keywords, data]);

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
				<HStack gap={3}>
					<Input
						placeholder='Search by title'
						border='2px solid'
						borderColor='secondary.100'
						color='secondary.100'
						_placeholder={{
							color: whiten('secondary.100', 30),
						}}
						_hover={{
							borderColor: whiten('secondary.100', 30),
							shadow: 'none',
						}}
						_focus={{
							borderColor: whiten('secondary.100', 30),
							shadow: 'none',
						}}
						size='lg'
						value={keywords}
						onChange={(e) => setKeywords(e.target.value)}
					/>
					<ButtonLink href='/dashboard/add' text='Add' variant='green' />
				</HStack>
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
						{filteredData.map((chunk) => (
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
										<Box
											onClick={() => {
												setDeleteId(chunk.id);
												onOpen();
											}}
										>
											<Button text='Delete' size='sm' />
										</Box>
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
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Delete Recipe
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can&ap0s;t undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={onClose}
								size='sm'
								text='Cancel'
								variant='green'
							/>

							<Button
								colorScheme='red'
								onClick={() => {
									axios.delete(
										`http://localhost:5236/api/Delichef/${deleteId}`
									);
									setDeleteId('');
									onClose();
									router.reload();
								}}
								size='sm'
								text='Delete'
								ml={3}
							/>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await axios.get('http://localhost:5236/api/Delichef');
	return { props: { data: res.data }, revalidate: 60 };
}

export default Dashboard;
