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

function lm (){
    for(var p in leftMenu){
        if(leftMenu.hasOwnProperty(p)){
            var t = document.getElementById(p);
            if(t !== null){
                t.innerHTML = leftMenu[p];
            }
        }
    }
}lm();


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