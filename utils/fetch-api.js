const baseUrl = "/api";

const fetchApi = async (endpoint, method = "GET", data = null) => {
  try {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    const uri = endpoint.includes("api") ? endpoint : `${baseUrl}${endpoint}`;

    const response = await fetch(uri, config);
    const result = await response.json();

    if (result.status) {
      return result;
    } else {
      throw new Error(result.errorMessage);
    }
  } catch (error) {
    // Handle any other errors that might occur during the fetch process
    throw new Error(error.message);
  }
};

export default fetchApi;
