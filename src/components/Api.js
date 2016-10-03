import axios from 'axios';

const id = "7pn5rdu7ehiljlk51d4wc1eqeyrl303";
const url = "https://api.twitch.tv/kraken/";

function callApi(req, cb){
  axios.get(req)
       .then(res => {
         cb(res.data);
       });
  }

  export function fetchGames(query, cb) {
    const req = `${url}streams?client_id=${id}&game=${query}&limit=50`;
    callApi(req, cb);
    console.log(req);
  }

  export function fetchFeatured(cb) {
    const req = `${url}streams/featured?client_id=${id}`;
    callApi(req, cb);
  }
