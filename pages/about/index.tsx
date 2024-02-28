import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import api from "../../utils/axios";
import { GetStaticProps } from "next/types";

const AboutPage = ({ navigation }) => (
  <Layout title="About | Next.js + TypeScript Example" navigation={navigation}>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const navigation = await api.get('/api/navigation');

    return {
      props: {
        navigation,
      },
    };
  } catch (error) {
    console.error('Failed to fetch data', error);

    return {
      props: {
        data: null,
        errorText: 'Failed to fetch data',
      },
    };
  }
};

export default AboutPage;
