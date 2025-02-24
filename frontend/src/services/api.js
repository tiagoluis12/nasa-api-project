import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const fetchSearchResults = async (query, mediaType = "all") => {
  try {
    const params = { q: query };
    // If a specific media type is selected (not "all"), add it to params
    if (mediaType && mediaType !== "all") {
      params.media_type = mediaType;
    }
    const response = await axios.get(`${API_BASE_URL}/search`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
