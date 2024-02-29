import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import type { IndexPageProps } from "../types";
import api from "../utils/axios";
import { GetStaticProps } from "next/types";

const IndexPage: React.FC<IndexPageProps> = ({ data, navigation, externalLinks }) => (
  <Layout title="Home | Next.js + TypeScript Example" navigation={navigation} linkedinUrl={externalLinks?.['linkedinUrl']?.href}>
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
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    try {
      // Make a GET request to the specified apiUrl
      const navigation = await api.get('/api/navigation');
      const externalLinks = await api.get('/api/external-links');
      // const navigation = response.data;
      // Pass the data to the component props
      return {
        props: {
          navigation,
          externalLinks
        },
      };
    } catch (error) {
      // Handle errors
      console.error('Failed to fetch user data' || 'API Error:', error);
  
      // Pass an empty data prop and custom error text in case of an error
      return {
        props: {
          data: null,
          navigation: null,
          errorText: 'Failed to fetch user data' || "Failed to fetch data",
        },
      };
  }
}

export default IndexPage;
