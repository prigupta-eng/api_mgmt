const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function apiClient(endpoint,
  {
     method = "GET",
     body,
     headers = {} 
  }
  = {}
) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API Error");
    }

    return await response.json();
  } catch (error) {
    console.error("API CLIENT ERROR:", error);
  }
}
