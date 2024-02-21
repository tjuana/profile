import Link from "next/link";
import Layout from "../components/Layout";
import MyApp from "../_app/app";
import api from "../utils/axios";

const IndexPage = ({ data }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    {data ? (
      <div>
        {/* Display the fetched data */}
        <p>Data from API:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

const HomeWithTheme = (props) => (
  <MyApp Component={IndexPage} pageProps={props} />
)

export async function getStaticProps() {
  try {
    // Make a GET request to the '/example' endpoint (replace with your actual endpoint)
    const result = await api.get('/users');
    console.log('API data:', result);
    // Pass the data to the component props
    return {
      props: {
        data: result,
      },
    };
  } catch (error) {
    // Handle errors
    console.error('API Error:', error);

    // Pass an empty data prop in case of an error
    return {
      props: {
        data: null,
      },
    };
  }
}

export default HomeWithTheme;
