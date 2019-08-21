const topMenus = {
  art: 'Art',
  blog: 'Blog',
  code: 'Code',
  de: 'De',
  eg: 'Eg',
  fun: 'Fun',
  game: 'Game',
  wiki: 'Wiki',
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
