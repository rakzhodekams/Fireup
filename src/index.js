// const babel = require("@babel/core");
// babel.transform("code", optionsObject);

function blog(){
  document.querySelector('.postsTitle').innerHTML = '<p> You clicked in Blog Top-menu </p>';
}

function code(){
  document.querySelector('.postsTitle').innerHTML = '<p> You clicked in Code Top-menu <p>';
}

function de(){
  document.querySelector('.postsTitle').innerHTML = '<p> You clicked in <b>De</b> Top-menu</p>';
}

function eg(){
  document.querySelector('.postsTitle').innerHTML = '<p> You clicked in the Eg Top-menu</p>';
}

function fun(){
  document.querySelector('.postsTitle').innerHTML = '<p> You clicked in Fun Top-menu</p>';
}

function game(){
  document.querySelector('.postsTitle').innerHTML =  '<p> You clicked in Game Top-menu</p>';
}

function music(){
  document.querySelector('.postsTitle').innerHTML =  '<p> You clicked in Music Top-menu</p>';
}


function wiki(){
  document.querySelector('.postsTitle').innerHTML = '<p> You clicked in Wiki Top-menu</p>';
  document.querySelector('.postContent').innerHTML = '<p> LoL <b> this should have wiki content </p>';
}

