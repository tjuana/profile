import Link from "next/link";
import Layout from "../components/Layout";
import type { IndexPageProps } from "../types/types";
import api from "../utils/axios";

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
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

export async function getStaticProps() {
    try {
      // Make a GET request to the specified apiUrl
      const result = await api.get('/users');
      // Pass the data to the component props
      return {
        props: {
          data: result,
        },
      };
    } catch (error) {
      // Handle errors
      console.error('Failed to fetch user data' || 'API Error:', error);
  
      // Pass an empty data prop and custom error text in case of an error
      return {
        props: {
          data: null,
          errorText: 'Failed to fetch user data' || "Failed to fetch data",
        },
      };
  };
}

export default IndexPage;
