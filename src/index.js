/*jshint esversion: 6 */

const social = {
  blogspot: '<a target="_blank" href="https://odicforcesounds.blogspot.com/"><img width="24px" src="./img/icons8-blogger-48.png"></a>',
  facebook: '<a target="_blank" href="https://www.facebook.com/odicforcesounds"><img width="24px" src="./img/icons8-facebook-circled-48.png"></a>',
  github: '<a target="_blank" href="https://github.com/rakzhodekams"><img width="24px" src="./img/icons8-github-48.png"></a>',
  instagram: '<a target="_blank" href="https://www.instagram.com/odicforcesounds/"><img width="24px" src="./img/icons8-instagram-48.png"></a>',
  stackoverflow: '<a target="_blank" href="https://stackoverflow.com/users/6806076/odicforcesounds"><img width="24px" src="./img/stack-overflow.png"></a>',
  tumblr: '<a target="_blank" href="https://rakzhodekams.tumblr.com/"><img width="24px" src="./img/icons8-tumblr-48.png"></a>',
  twitter: '<a target="_blank" href="https://twitter.com/odicforcesounds"><img width="24px" src="./img/icons8-twitter-circled-48.png"></a>',
  youtube: '<a target="_blank" href="https://www.youtube.com/channel/UCKxb1p0OzXuiAQBkiY0dCGg"><img width="24px" src="./img/icons8-youtube-48.png></a>',
};

function populate(){
  for (var property in social) {
    if (social.hasOwnProperty(property)) {
      var target = document.getElementById(property);
      if ( target !== null ) {
        target.innerHTML = social[property];
      }
    }
  }
}populate();