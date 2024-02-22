import Link from "next/link";
import Layout from "../components/Layout";
import { getStaticPropsRequest } from "./utils/getStaticProps";
import type { IndexPageProps } from "./types/types";

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
      <p className="space-text">This is a space-themed paragraph.</p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export async function getStaticProps() {
  // Pass the URL and custom error text to the utility function
  return getStaticPropsRequest(
    '/users',
    'Failed to fetch user data'
  );
}

export default IndexPage;
