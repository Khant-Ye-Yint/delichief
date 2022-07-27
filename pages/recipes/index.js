import Layout from '../../components/Layout';
import { Field, Formik } from 'formik';
import {
	Box,
	HStack,
	Button,
	Input,
	Select,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import { Search2Icon } from '@chakra-ui/icons';
import axios from 'axios';

import Card from '../../components/Card';
import { useState } from 'react';

const optionStyle = {
	background: 'white',
	color: '#F27405',
};

const inputStyle = {
	border: '2px solid',
	color: 'secondary.100',
	borderColor: 'secondary.100',
	fontFamily: 'saira',
	_hover: {
		borderColor: 'secondary.100',
	},
	border: '2px solid',
};

const Recipes = ({ data }) => {
	const [filteredData, setFilteredData] = useState(data);

	return (
		<Layout>
			<Box
				fontSize={{ base: '2.5rem', md: '4rem' }}
				fontFamily='dosis'
				fontWeight='bold'
				color='text.100'
				mt='5'
			>
				Our Delecious Recipes
			</Box>
			<Box mt='5' mb='10'>
				<Formik
					initialValues={{
						category: '',
						keywords: '',
					}}
					onSubmit={(values) => {
						const dataWeWant = [];

						if (values.category == 'All') {
							if (values.keywords == '') {
								setFilteredData(data);
								return;
							}

							dataWeWant = data.filter((chunk) => {
								return chunk.title
									.toLowerCase()
									.includes(values.keywords.toLowerCase());
							});
							setFilteredData(dataWeWant);
							return;
						}

						// first filter
						dataWeWant = data.filter((chunk) => {
							return (
								chunk.category.toLowerCase() == values.category.toLowerCase()
							);
						});

						// second filter
						dataWeWant = dataWeWant.filter((chunk) => {
							return chunk.title
								.toLowerCase()
								.includes(values.keywords.toLowerCase());
						});

						setFilteredData(dataWeWant);
					}}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<HStack maxW={['100%', '80%', '50%', '40%']}>
								<Field
									sx={inputStyle}
									as={Select}
									id='category'
									name='category'
									focusBorderColor={whiten('secondary.100', 20)}
									_hover={{
										borderColor: 'secondary.100',
									}}
									iconColor='secondary.100'
								>
									<option style={optionStyle}>All</option>
									<option style={optionStyle}>BREAKFAST</option>
									<option style={optionStyle}>SOUPS</option>
									<option style={optionStyle}>BEEF, LAMB & PORK</option>
									<option style={optionStyle}>FISH</option>
									<option style={optionStyle}>VEGETARIAN</option>
									<option style={optionStyle}>SALADS</option>
								</Field>
								<Field
									as={Input}
									sx={inputStyle}
									id='keywords'
									name='keywords'
									type='text'
									placeholder='Search...'
									_placeholder={{
										color: 'secondary.100',
										opacity: '40%',
									}}
									_focus={{
										borderColor: whiten('secondary.100', 30),
										shadow: 'none',
									}}
								/>
								<Button
									type='submit'
									bg='secondary.100'
									p='2'
									_hover={{
										bg: whiten('secondary.100', 20),
									}}
									_active={{
										bg: whiten('secondary.100', 30),
									}}
									shadow='md'
								>
									<Search2Icon />
								</Button>
							</HStack>
						</form>
					)}
				</Formik>
			</Box>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
					xl: 'repeat(5, 1fr)',
				}}
				gap={7}
			>
				{filteredData.map((chunk) => (
					<GridItem key={chunk.id}>
						<HStack justifyContent='center' alignItems='center'>
							<Card
								id={chunk.id}
								title={chunk.title}
								category={chunk.category}
								serves={chunk.serves}
							/>
						</HStack>
					</GridItem>
				))}
			</Grid>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await axios.get('http://localhost:5236/api/Delichef');
	return { props: { data: res.data }, revalidate: 60 };
}

export default Recipes;
