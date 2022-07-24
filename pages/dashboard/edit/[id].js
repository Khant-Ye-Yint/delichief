import Layout from '../../../components/Layout';
import {
	Box,
	HStack,
	VStack,
	Button,
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Select,
} from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { Formik, Field } from 'formik';

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

const EditItem = ({ data }) => {
	const router = useRouter();

	return (
		<Layout>
			<Box
				fontFamily='dosis'
				fontWeight='bold'
				fontSize={{ base: '2.5rem', md: '4rem' }}
			>
				Edit{' '}
				<Box color='primary.100' display='inline'>
					{data.title}
				</Box>
			</Box>
			<Box my='5'>
				<Formik
					initialValues={{
						title: data.title,
						category: 'Breakfast',
						serves: data.serves,
						preparationTime: data.prepTime,
						cookingTime: data.cookTime,
						ingredients: data.ingredients,
						directions: data.directions,
						imgUrl: data.imgUrl,
					}}
					onSubmit={(values) => {
						// values.title = '';
						// values.category = '';
						// values.serves = '';
						// values.preperationTime = '';
						// values.cookingTime = '';
						// values.ingredients = '';
						// values.directions = '';
						// values.imgUrl = '';

						console.log(JSON.stringify(values, null, 2));
					}}
				>
					{({ handleSubmit, touched, errors }) => (
						<form onSubmit={handleSubmit}>
							<VStack alignItems='flex-start' spacing={5}>
								<FormControl isInvalid={!!errors.title && touched.title}>
									<FormLabel
										htmlFor='title'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Title
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='title'
										name='title'
										type='text'
										placeholder='title'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error = 'Title must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.title}</FormErrorMessage>
								</FormControl>
								<FormControl isInvalid={!!errors.category && touched.category}>
									<FormLabel
										htmlFor='category'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Category
									</FormLabel>
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
										<option style={optionStyle}>Breakfast</option>
										<option style={optionStyle}>Soups</option>
										<option style={optionStyle}>BEEF, LAMB & PORK</option>
										<option style={optionStyle}>FISH</option>
										<option style={optionStyle}>VEGETARIAN</option>
										<option style={optionStyle}>SALADS</option>
									</Field>
									<FormErrorMessage>{errors.category}</FormErrorMessage>
								</FormControl>
								<FormControl isInvalid={!!errors.serves && touched.serves}>
									<FormLabel
										htmlFor='serves'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Serves
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='serves'
										name='serves'
										type='text'
										placeholder='serves'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error = 'Serves must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.serves}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={
										!!errors.preparationTime && touched.preparationTime
									}
								>
									<FormLabel
										htmlFor='preparationTime'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Preparation Time
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='preparationTime'
										name='preparationTime'
										type='text'
										placeholder='preparation time'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error =
													'PreparationTime time must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.preparationTime}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={!!errors.cookingTime && touched.cookingTime}
								>
									<FormLabel
										htmlFor='cookingTime'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Cooking Time
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='cookingTime'
										name='cookingTime'
										type='text'
										placeholder='cooking time'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error =
													'Cooking time must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.cookingTime}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={!!errors.ingredients && touched.ingredients}
								>
									<FormLabel
										htmlFor='ingredients'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Ingredients
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='ingredients'
										name='ingredients'
										type='text'
										placeholder='ingredients'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error =
													'Ingredients must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.ingredients}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={!!errors.directions && touched.directions}
								>
									<FormLabel
										htmlFor='directions'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Directions
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='directions'
										name='directions'
										type='text'
										placeholder='directions'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error = 'Directions must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.directions}</FormErrorMessage>
								</FormControl>
								<FormControl isInvalid={!!errors.imgUrl && touched.imgUrl}>
									<FormLabel
										htmlFor='imgUrl'
										fontSize='1.5rem'
										fontWeight='bold'
										cursor='pointer'
									>
										Image Url
									</FormLabel>
									<Field
										as={Input}
										sx={inputStyle}
										id='imgUrl'
										name='imgUrl'
										type='text'
										placeholder='image url'
										_placeholder={{
											color: 'secondary.100',
											opacity: '40%',
										}}
										_focus={{
											borderColor: whiten('secondary.100', 30),
											shadow: 'none',
										}}
										validate={(value) => {
											let error;

											if (value.length < 5) {
												error = 'Image Url must contain at least 6 characters';
											}

											return error;
										}}
									/>
									<FormErrorMessage>{errors.imgUrl}</FormErrorMessage>
								</FormControl>
								<HStack>
									<Button
										type='submit'
										bg='secondary.100'
										fontWeight='bold'
										p='2'
										_hover={{
											bg: whiten('secondary.100', 20),
										}}
										_active={{
											bg: whiten('secondary.100', 30),
										}}
										shadow='md'
									>
										Update
									</Button>
									<Link href='/dashboard'>
										<Button
											type='reset'
											bg='gray.300'
											fontWeight='bold'
											p='2'
											_hover={{
												bg: 'gray.200',
											}}
											_active={{
												bg: 'gray.100',
											}}
											shadow='md'
										>
											Cancel
										</Button>
									</Link>
								</HStack>
							</VStack>
						</form>
					)}
				</Formik>
			</Box>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await axios.get('http://localhost:5236/api/Delichef');
	const paths = res.data.map((chunk) => {
		return {
			params: { id: chunk.id },
		};
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await axios.get(
		`http://localhost:5236/api/Delichef/${params.id}`
	);
	console.log(res.data);
	return { props: { data: res.data }, revalidate: 60 };
}

export default EditItem;
