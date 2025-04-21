import { Country } from "../types/Country";

export const fetchData = async (
  url: string,
  options?: RequestInit & { signal?: AbortSignal }
): Promise<Country[]> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Country[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
