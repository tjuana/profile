// pages/index.tsx
import Link from "next/link";
import Layout from "../components/Layout";
import App from "./_app/app";
import { getStaticPropsRequest } from "./utils/getStaticProps";
import type { IndexPageProps, ApiData, HomeWithThemeProps } from "./types/types";

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

const HomeWithTheme: React.FC<HomeWithThemeProps> = (props) => (
  <App Component={IndexPage} pageProps={props} />
);

export async function getStaticProps() {
  // Pass the URL and custom error text to the utility function
  return getStaticPropsRequest(
    '/users',
    'Failed to fetch user data'
  );
}

export default HomeWithTheme;
