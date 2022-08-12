import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Box, VStack, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import { ChevronRightIcon } from '@chakra-ui/icons';
import axios from 'axios';

const RecipeItem = ({ data }) => {
	const router = useRouter();
	const { slug } = router.query;

	const directionsArray = data.directions.split('|');
	const ingredientsArray = data.ingredients.split('|');

	// const dummyData = {
	// 	ingredients: [
	// 		'2 eggs',
	// 		'30 ml of low-fat milk',
	// 		'pepper',
	// 		'pinch of salt if desired',
	// 		'½ tsp of cinnamon',
	// 		'1 tsp of vanilla extract',
	// 	],
	// 	directions: [
	// 		'Beat egg, milk, pepper, salt, cinnamon and vanilla together in ashallow bowl',
	// 		'Dip the slices of bread in the egg mixture',
	// 		'Fry in hot oil until they are golden brown ',
	// 		'Drain on kitchen paper',
	// 	],
	// };

	return (
		<Layout>
			<Box
				fontFamily='dosis'
				fontWeight='bold'
				fontSize={{ base: '2.5rem', md: '4rem' }}
			>
				{data.title}
			</Box>
			<HStack
				my='10'
				justifyContent='space-between'
				alignItems='flex-start'
				flexWrap='wrap'
				gap='10'
			>
				<VStack
					flex='1'
					justifyContent='center'
					alignItems={{ base: 'center', xl: 'flex-start' }}
				>
					<Box
						bg='white'
						w={{ base: '20rem', md: '32rem' }}
						borderRadius='20'
						overflow='hidden'
					>
						<Box w='full' h='20rem' position='relative'>
							<Image
								src={data.imgUrl}
								alt={slug}
								layout='fill'
								objectFit='cover'
								objectPosition='center'
							/>
						</Box>
						<VStack
							fontFamily='saira'
							fontWeight='semibold'
							fontSize={{ base: '1rem', md: '1.5rem' }}
							py='5'
							shadow='lg'
							minW='32rem'
							px='10'
						>
							<HStack justifyContent='space-between' w='full'>
								<Box flex={{ base: '0.5', md: '1' }}>Serves -</Box>
								<Box color='primary.100' flex='1'>
									{data.serves}
								</Box>
							</HStack>
							<HStack justifyContent='space-between' w='full'>
								<Box flex={{ base: '0.5', md: '1' }}>Preparation Time -</Box>
								<Box color='primary.100' flex='1'>
									{data.prepTime}
								</Box>
							</HStack>
							<HStack justifyContent='space-between' w='full'>
								<Box flex={{ base: '0.5', md: '1' }}>Cooking Time -</Box>
								<Box color='primary.100' flex='1'>
									{data.cookTime}
								</Box>
							</HStack>
						</VStack>
					</Box>
				</VStack>
				<VStack
					flex='1'
					justifyContent='center'
					alignItems='flex-start'
					spacing={10}
					minW={{ base: '100%', md: '20rem' }}
				>
					<VStack
						fontFamily='saira'
						fontWeight='semibold'
						fontSize='1.5rem'
						justifyContent='center'
						alignItems='flex-start'
					>
						<Box color='primary.100'>Ingredients</Box>
						<VStack
							justifyContent='center'
							alignItems='flex-start'
							fontSize='1.25rem'
						>
							{ingredientsArray.map((item, index) => (
								<HStack
									alignItems='center'
									justifyContent='flex-start'
									spacing='1'
									key={index}
								>
									<ChevronRightIcon fontSize='2rem' color='primary.100' />
									<Box>{item}</Box>
								</HStack>
							))}
						</VStack>
					</VStack>
					<VStack
						fontFamily='saira'
						fontWeight='semibold'
						fontSize='1.5rem'
						justifyContent='center'
						alignItems='flex-start'
					>
						<Box color='primary.100'>Directions</Box>
						<VStack
							justifyContent='center'
							alignItems='flex-start'
							fontSize='1.25rem'
						>
							{directionsArray.map((chunk, index) => (
								<HStack
									alignItems='flex-start'
									justifyContent='flex-start'
									spacing='3'
									key={index}
								>
									<Box color='primary.100'>{index + 1}.</Box>
									<Box>{chunk}</Box>
								</HStack>
							))}
						</VStack>
					</VStack>
				</VStack>
			</HStack>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await axios.get('http://localhost:5236/api/Delichef');
	const paths = res.data.map((chunk) => {
		return {
			params: { slug: chunk.id },
		};
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await axios.get(
		`http://localhost:5236/api/Delichef/${params.slug}`
	);
	return { props: { data: res.data }, revalidate: 60 };
}

export default RecipeItem;
