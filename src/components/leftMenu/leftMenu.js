const leftMenu = {
    yy: "<b>YinYang</b>",
    t: "<b>Tao</b>",
    v: "<b>Visions</b>",
    w: "<b>Who</b>",
    o: "<b>OscarFM</b>",
    lov: "<b>Love</b>",
    li: "<b>License</b>",
    to: "<b>ToolKit</b>",
};

function lm(){
    for(var p in leftMenu){
        if(leftMenu.hasOwnProperty(p)){
            var t = document.getElementById(p);
            if(t !== null){
                t.innerHTML = leftMenu[p];
            }
        }
    }
}lm(); 



























/* function showContent(content) {
    document.getElementById('post').innerHTML = content;
  }
  
  function setupshowContent() {
    var contentText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ];
  
    for (var i = 0; i < contentText.length; i++) {
      (function() {
         var item = contentText[i];
         document.getElementById(item.id).onfocus = function() {
           showContent(item.content);
         };
      })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
    }
  }
  
  setupshowContent(); */


/* function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'item yy')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item t')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item v')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item w')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item o')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item lov')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item li')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    } else if (hasClass(e.target, 'item to')) {
        document.getElementsByClassName('posts').innerHTML = 'YinYang';
    }
}, true); */








/**
NOTE: FUNCTION TO CREATE NEW ELEMENT
function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href,
  }).click();
}
NOTE: 
'beforebegin': Before the element itself.
'afterbegin': Just inside the element, before its first child.
'beforeend': Just inside the element, after its last child.
'afterend': After the element itself.

var mylist = document.getElementById('mylist');
mylist.insertAdjacentHTML('beforeend', '<li>third</li>');

NOTE: If newState is provided add/remove the class accordingly, otherwise toggle theClass
function toggleClass(elem, theClass, newState) {
    var matchRegExp = new RegExp('(?:^|\\s)' + theClass + '(?!\\S)', 'g');
    var add=(arguments.length>2 ? newState : (elem.className.match(matchRegExp) == null));

    elem.className=elem.className.replace(matchRegExp, ''); // clear all
    if (add) elem.className += ' ' + theClass;
}

function toggle(id) {
    var elem = document.getElementById('thetext');
    if (id=='toggle') toggleClass(elem, 'red');
    if (id=='add') toggleClass(elem, 'red', true);
    if (id=='remove') toggleClass(elem, 'red', false);
}


NOTE: CHECK IF CLASS IN ELEMENT IS ALREADY IN USE
if ( document.getElementById("MyElement").className.match(/(?:^|\s)MyClass(?!\S)/) )

NOTE: REMOVE ALL NODE CHILDREN FROM FOO
const parent = document.getElementById("foo");
while (parent.firstChild) {
    parent.firstChild.remove();
}
 **/