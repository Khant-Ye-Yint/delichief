import Layout from '../components/Layout';
import { Field, Formik } from 'formik';
import {
	Box,
	HStack,
	Button,
	Input,
	Select,
	VStack,
	Badge,
	Flex,
} from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import { Search2Icon } from '@chakra-ui/icons';

import Card from '../components/Card';

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

const Recipes = () => {
	return (
		<Layout>
			<Box
				fontSize='48px'
				fontFamily='dosis'
				fontWeight='bold'
				color='text.100'
				mt='20px'
			>
				Our Delecious Recipes
			</Box>
			<Box my='5'>
				<Formik
					initialValues={{
						mainMeat: '',
						keywords: '',
					}}
					onSubmit={(values) => {
						console.log(JSON.stringify(values, null, 2));
					}}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<HStack maxW={['100%', '80%', '40%']}>
								<Field
									sx={inputStyle}
									as={Select}
									id='mainMeat'
									name='mainMeat'
									focusBorderColor={whiten('secondary.100', 20)}
									_hover={{
										borderColor: 'secondary.100',
									}}
									iconColor='secondary.100'
								>
									<option style={optionStyle}>All</option>
									<option style={optionStyle}>Chicken</option>
									<option style={optionStyle}>Pork</option>
									<option style={optionStyle}>Sea Food</option>
									<option style={optionStyle}>Vegan</option>
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
			<Flex
				flexWrap='wrap'
				flexDir='row'
				justifyContent='center'
				alignItems='center'
				gap='20'
				my='20'
			>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(({ id }) => (
					<Card
						title='Healthy Salad'
						mainMeat='Vegan'
						method='Classic'
						key={id}
						alt='Salad'
					/>
				))}
			</Flex>
		</Layout>
	);
};

export default Recipes;
