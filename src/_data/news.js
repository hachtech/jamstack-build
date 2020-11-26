const axios = require("axios");

require('dotenv').config();

module.exports = async function getNews(){
    try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines/?sources=google-news&apiKey=${process.env.NEWS_API_KEY}`);
       // console.log(response);
       return response.data;
    }catch(error){
        console.error(error);
    }
}
