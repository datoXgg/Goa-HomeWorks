// getelementbyId
var header = document.getElementById('header');
header.style.color = 'blue';

var mainContent = document.getElementById('mainContent');
mainContent.innerHTML = 'Hello, World!';

var footer = document.getElementById('footer');
footer.style.backgroundColor = 'lightgrey';

// getelementsbyclassName
var items = document.getElementsByClassName('item');
items[0].style.color = 'red';

var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.border = '1px solid black';
}

var buttons = document.getElementsByClassName('button');
buttons[1].innerText = 'Clicked';

// getelementsbytagname
var paragraphs = document.getElementsByTagName('p');
paragraphs[0].style.fontSize = '18px';

var divs = document.getElementsByTagName('div');
divs[2].style.marginTop = '10px';

var links = document.getElementsByTagName('a');
for (var j = 0; j < links.length; j++) {
    links[j].style.textDecoration = 'none';
}

// queryselector
var firstItem = document.querySelector('.item');
firstItem.style.backgroundColor = 'yellow';

var mainDiv = document.querySelector('#main');
mainDiv.style.padding = '20px';

var navLink = document.querySelector('nav a');
navLink.style.color = 'green';

// queryselectorall
var allItems = document.querySelectorAll('.item');
allItems.forEach(function(item) {
    item.style.fontWeight = 'bold';
});

var allDivs = document.querySelectorAll('div');
allDivs.forEach(function(div) {
    div.style.borderRadius = '5px';
});

var allLinks = document.querySelectorAll('a');
allLinks.forEach(function(link) {
    link.style.color = 'purple';
});

// children
var list = document.getElementById('list');
var listItems = list.children;
listItems[0].style.fontStyle = 'italic';

var menu = document.getElementById('menu');
var menuItems = menu.children;
menuItems[1].style.fontSize = '20px';

var gallery = document.getElementById('gallery');
var images = gallery.children;
images[2].style.border = '2px solid red';

// firstelementchild
var container = document.getElementById('container');
var firstChild = container.firstElementChild;
firstChild.style.color = 'orange';

var nav = document.getElementById('nav');
var firstNavItem = nav.firstElementChild;
firstNavItem.style.backgroundColor = 'lightblue';

var card = document.getElementById('card');
var firstCardContent = card.firstElementChild;
firstCardContent.style.padding = '10px';

// lastelementchild
var form = document.getElementById('form');
var lastInput = form.lastElementChild;
lastInput.style.marginBottom = '15px';

var sidebar = document.getElementById('sidebar');
var lastSidebarItem = sidebar.lastElementChild;
lastSidebarItem.style.textAlign = 'center';

var footerNav = document.getElementById('footerNav');
var lastFooterLink = footerNav.lastElementChild;
lastFooterLink.style.textDecoration = 'underline';

// nextelementsibling
var firstListItem = document.querySelector('.list-item');
var nextListItem = firstListItem.nextElementSibling;
nextListItem.style.color = 'brown';

var firstImage = document.querySelector('.image');
var nextImage = firstImage.nextElementSibling;
nextImage.style.opacity = '0.8';

var firstButton = document.querySelector('.btn');
var nextButton = firstButton.nextElementSibling;
nextButton.style.fontSize = '14px';

// previouselementsibling
var secondListItem = document.querySelector('.list-item:nth-child(2)');
var previousListItem = secondListItem.previousElementSibling;
previousListItem.style.fontWeight = 'bold';

var secondImage = document.querySelector('.image:nth-child(2)');
var previousImage = secondImage.previousElementSibling;
previousImage.style.border = '1px solid grey';

var secondButton = document.querySelector('.btn:nth-child(2)');
var previousButton = secondButton.previousElementSibling;
previousButton.style.backgroundColor = 'pink';
