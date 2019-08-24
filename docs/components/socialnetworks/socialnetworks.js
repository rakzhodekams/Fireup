const social = {
  bandcamp: '<a target="_blank" href="https://odicforcesounds.bandcamp.com/"><img width=18px" src="./img/icons8-bandcamp.png"></a>',
  blogspot: '<a target="_blank" href="https://odicforcesounds.blogspot.com/"><img width="18px" src="./img/icons8-blogger-48.png"></a>',
  facebook: '<a target="_blank" href="https://www.facebook.com/odicforcesounds"><img width="18px" src="./img/icons8-facebook-circled-48.png"></a>',
  github: '<a target="_blank" href="https://github.com/rakzhodekams"><img width="18px" src="./img/icons8-octocat-48.png"></a>',
  gitlab: '<a target="_blank" href="https://gitlab.com/OdicforceSounds"><img width="18px" src="./img/icons8-gitlab-48.png"></a>',
  instagram: '<a target="_blank" href="https://www.instagram.com/odicforcesounds/"><img width="18px" src="./img/icons8-instagram-48.png"></a>',
  keybase: '<a target="_blank" href="https://keybase.io/path_of_shields"><img width="18px" src="./img/icons8-keybase-48.png"></a>',
  reddit: '<a target="_blank" href="https://www.reddit.com/user/odicforcesounds/"><img width="18px" src="./img/icons8-reddit-48.png"></a>',
  stackoverflow: '<a target="_blank" href="https://stackoverflow.com/users/6806076/odicforcesounds"><img width="18px" src="./img/icons8-stack-overflow-48.png"></a>',
  tumblr: '<a target="_blank" href="https://rakzhodekams.tumblr.com/"><img width="18px" src="./img/icons8-tumblr-48.png"></a>',
  twitter: '<a target="_blank" href="https://twitter.com/odicforcesounds"><img width="18px" src="./img/icons8-twitter-circled-48.png"></a>',
  youtube: '<a target="_blank" href="https://www.youtube.com/channel/UCKxb1p0OzXuiAQBkiY0dCGg"><img width="18px" src="./img/icons8-youtube-48.png"></a>',
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

