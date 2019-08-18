const topMenus = {
  art: '<a target="_blank" href="#">Art</a>',
  blog: '<a target="_blank" href="#">Blog</a>',
  code: '<a target="_blank" href="#">Code</a>',
  de: '<a target="_blank" href="#">De</a>',
  eg: '<a target="_blank" href="#">Eg</a>',
  fun: '<a target="_blank" href="#">Fun</a>',
  game: '<a target="_blank" href="#">Game</a>',
  in: '<a target="_blank" href="#">In</a>',
  lo: '<a target="_blank" href="#">Lo</a>',
  om:'<a target="_blank" href="#">Om</a>',
  wiki: '<a target="_blank" href="https://wiki.odicforcesounds.com/docs">Wiki</a>',
};

function tmenu(){
  for (var prop in topMenus){
    if (topMenus.hasOwnProperty(prop)){
      var target = document.getElementById(prop);
      if ( target !== null){
        target.innerHTML = topMenus[prop];
      }
    }
  }
}tmenu();