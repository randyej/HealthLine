const initStore = {
  order: 'latest',
  category: '',
  images: [
    {
      id: 0,
      type: 'photo',
      imageWidth: 1,
      imageHeight: 1,
      previewURL: 'http://www.healthline.com/images/clear.gif',
      previewWidth: 1,
      previewHeight: 1,
      webformatURL: 'http://www.healthline.com/images/clear.gif',
      webformatHeight: 1,
      webformatWidth: 1
    }
  ],
  activeImg: undefined,
  activeImgIndex: 0
};

initStore.activeImg = initStore.images[initStore.activeImgIndex];

export default initStore;
