var feed = new Instafeed({
  get : 'user',
  userId: 1391335357,
  accessToken: '1391335357.467ede5.7ba9271fabf643bc85ab081885d9033d',
  resolution : 'low_resolution',
  template: '<div class="grid__item insta-item large--one-fifth medium--one-fifth small--one-half"><a href="{{link}}"><div class="overlay"><img src="{{image}}" /></a></div></div>',
  limit: '5'
});
feed.run();