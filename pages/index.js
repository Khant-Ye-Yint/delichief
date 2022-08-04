import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Featured from '../components/Featured';

import axios from 'axios';

const Home = ({ data }) => {
	return (
		<Layout>
			<Hero />
			<AboutMe />
			<Featured data={data} />
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await axios.get('http://localhost:5236/api/Delichef');
	return { props: { data: res.data }, revalidate: 60 };
}

export default Home;
