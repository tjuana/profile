import api from "./axios";

export async function getStaticPropsRequest(apiUrl: string, errorText: string) {
  try {
    // Make a GET request to the specified apiUrl
    const result = await api.get(apiUrl);
    // Pass the data to the component props
    return {
      props: {
        data: result,
      },
    };
  } catch (error) {
    // Handle errors
    console.error(errorText || 'API Error:', error);

    // Pass an empty data prop and custom error text in case of an error
    return {
      props: {
        data: null,
        errorText: errorText || "Failed to fetch data",
      },
    };
  }
}
