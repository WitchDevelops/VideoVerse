import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' // here he uses https://youtube-v31.p.rapidapi.com/search

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);

    return response.data;
}