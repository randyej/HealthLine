import axios from 'axios';

import { config } from './../config/config.json';
//import { hits } from './../data/pixabayPrettySample.json';

const API_BASE_URL = config.pixabayApi.baseUrl;
const API_KEY = config.pixabayApi.apiKey;

const pixabayService = store => next => action => {
  //
  next(action);
  //
  switch (action.type) {
    case 'GET_IMAGES':
      /*next({
        type: 'GET_IMAGES_SUCCESS',
        data: hits
      });*/
      axios.get(API_BASE_URL, {
        params: {
          key: API_KEY,
          image_type: 'photo', // "all" (default), "photo", "illustration", "vector"
          orientation: 'horizontal', // "all" (default), "horizontal", "vertical"
          per_page: 10, // 3 - 200 (20 default)
          order: action.data.order, // "popular" (default), "latest"
          category: action.data.category, // fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music
          q: '', // up to 100 char URL encoded search term (ex. yellow+flower)
          pretty: false
        }
      })
      .then(function(response) {
        //console.log(`[GOOD] [GET_IMAGES] ${JSON.stringify(response.data)}`);
        next({
          type: 'GET_IMAGES_SUCCESS',
          data: response.data
        });
      })
      .catch(function(error) {
        const errorOrData = error.response ? error.response.data : error;
        //console.log(`[FAIL] [GET_IMAGES] ${JSON.stringify(errorOrData)}`);
        return next({
          type: 'GET_IMAGES_ERROR',
          error: errorOrData
        });
      });
      break;

    // default is to do nothing for actions not being handled by this service
    default:
      break;
  }

};

export default pixabayService;
