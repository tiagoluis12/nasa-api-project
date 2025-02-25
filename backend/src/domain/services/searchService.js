const axios = require('axios');

/**
 * Calls NASA's Image and Video Library Search endpoint
 * @param {string} query, The search term (ex "Mars")
 * @param {string} mediaType, The media types (ex "image,video,audio")
 * @param {string} sortOption, Custom sort option ("date" or "title")
 */
exports.searchNasaLibrary = async (query, mediaType, sortOption) => {
  // Fallback defaults
  const searchQuery = query || 'Mars';
  const mediaTypeQuery = mediaType || 'image,video,audio';

  // NASA Images API endpoint
  // Docs: https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
  // Example: https://images-api.nasa.gov/search?q=Orion&media_type=image,video
  const url = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=${mediaTypeQuery}`;

  // Fetch data from NASA
  const response = await axios.get(url);
  let items = response.data.collection.items || [];

  // Example: custom sorting on the server side
  // NASA’s API doesn’t have robust built-in sort for all fields,
  // so you can sort the returned items as needed:
  if (sortOption === 'date') {
    // Sort by date_created (descending)
    items = items.sort((a, b) => {
      const dateA = new Date(a.data[0].date_created);
      const dateB = new Date(b.data[0].date_created);
      return dateB - dateA;
    });
  } else if (sortOption === 'title') {

    // Sort by title (alphabetical)
    items = items.sort((a, b) => {
      const titleA = a.data[0].title?.toLowerCase() || "";
      const titleB = b.data[0].title?.toLowerCase() || "";
      return titleA.localeCompare(titleB);
    });
  }

  return {
    collection: {
      items,
    },
  };
};
