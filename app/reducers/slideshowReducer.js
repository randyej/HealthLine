const slideshowReducer = (state, action) => {
  let newState = {};
  switch (action.type) {
    // updates filter params for get images
    case 'GET_IMAGES':
      newState = {
        ...state,
        order: action.data.order,
        category: action.data.category
      };
      return newState;
    
    // updates images
    case 'GET_IMAGES_SUCCESS':
      newState = {
        ...state,
        images: action.data.hits,
        activeImg: undefined,
        activeImgIndex: 0
      };
      newState.activeImg = newState.images[newState.activeImgIndex];
      return newState;
    
    // TODO
    case 'GET_IMAGES_ERROR':
      return state;
    
    // updates active image to the previous image
    case 'PREV_IMAGE':
      newState = {
        ...state
      };
      newState.activeImgIndex--;
      if(newState.activeImgIndex < 0) {
        newState.activeImgIndex = newState.images.length - 1;
      }
      newState.activeImg = newState.images[newState.activeImgIndex];
      //console.log(newState.activeImgIndex + "..." + newState.activeImg.webformatURL);
      return newState;
    
    // updates active image to the next image
    case 'NEXT_IMAGE':
      newState = {
        ...state
      };
      newState.activeImgIndex++;
      if(newState.activeImgIndex >= newState.images.length) {
        newState.activeImgIndex = 0;
      }
      newState.activeImg = newState.images[newState.activeImgIndex];
      //console.log(newState.activeImgIndex + "..." + newState.activeImg.webformatURL);
      return newState;
    
    //
    default:
      return state;
  }
}

export default slideshowReducer;
