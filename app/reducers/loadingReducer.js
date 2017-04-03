const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_IMAGES':
      return true;
    case 'GET_IMAGES_SUCCESS':
      return false;
    case 'GET_IMAGES_ERROR':
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
