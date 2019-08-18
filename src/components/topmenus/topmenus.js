const topMenus = {
  art: '<a href="#">Art</a>',
  blog: '<a href="#">Blog</a>',
  code: '<a href="#">Code</a>',
  de: '<a href="#">De</a>',
  eg: '<a href="#">Eg</a>',
  fun: '<a href="#">Fun</a>',
  game: '<a href="#">Game</a>',
  in: '<a href="#">In</a>',
  lo: '<a href="#">Lo</a>',
  om:'<a href="#">Om</a>',
  wiki: '<a href="https://wiki.odicforcesounds.com/docs">Wiki</a>',
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

