new fullpage('#fullpage', {
  licenseKey: '9B56D9A6-015E49C1-99039BAD-CA082B96',
  autoScrolling: true,
  navigation: true,
  scrollHorizontally: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['Home', 'AboutUs', 'Projects', 'ContactUs'],
  navigationTooltips: ['Wolf Studios', 'About Us', 'Projects', 'Contact Us'],
  // afterRender: () => {
  //   setInterval(function () {
  //     fullpage_api.moveSlideRight();
  //   }, 6000);
  //}
});

//Read more button click
$(document).on('click', '#ReadMore', () => {
  fullpage_api.moveTo('AboutUs');
});

$(document).on('click', '#ContactBTN', () => {
  fullpage_api.moveTo('ContactUs');
})

// DrawMe
$(".overlay").click( () => {
  window.open('https://drawme.wolfstudios.dev/')
})