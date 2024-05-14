const axios = require('axios');
require('dotenv').config()

const BASE_URL = "https://newsdata.io/api/1/news";

var newsApiPromise = (preferences)=>{
    let preferenceString = commaSeparated(preferences);
    
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL, {
        params: { apiKey: process.env.API_KEY, category: preferenceString },
        }).then((response) => {
            return resolve(response.data)
        }).catch(err => {
            console.log(err)
            return reject(err)
        })
    })
}

const commaSeparated = (data) =>{
    let n = data.length;
    let string = ''
    for(let i=0;i<n-1;i++){
        string+=data[i]+','
    }
    string+=data[n-1]
    return string
}

module.exports = newsApiPromise