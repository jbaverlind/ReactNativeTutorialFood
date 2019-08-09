import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer pDx252SSd90FHFZPwr1pJNIhWzl2wDRYbT-ZZsIEIhcy_WcdZZHrFG-4ydpe_c3pSAYPiLh9IKYZEhmSErdPIFZBsvYgKhW9-TziilncqEd7zC2ZjUnaEjf2iwlMXXYx'
  }
});

