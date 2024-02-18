import Link from "next/link";
import Layout from "../components/Layout";
import MyApp from "../_app/app";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

const HomeWithTheme = () => (
  <MyApp Component={IndexPage} pageProps={{}} />
)

export default HomeWithTheme;
