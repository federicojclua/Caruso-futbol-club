import axios from 'axios';

const fetchProductData = async () => {
  try {
    const response = await axios.get('http://localhost:5004/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default fetchProductData;