import axios from "axios";


const baseUrl = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
  });
  
const loggerUrl = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key":process.env.REACT_APP_API_KEY
      }
  });
  
export  {baseUrl,loggerUrl};
