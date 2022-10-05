'use strict';

const mainElem = document.querySelector('main');

let articleElem = document.createElement('article');
mainElem.appendChild(articleElem);

let headerElem = document.createElement('header');
articleElem.appendChild(headerElem);

let h2Elem = document.createElement('h2');
headerElem.appendChild(h2Elem);
h2Elem.innerText = 'Hauskoja tietoja';

let pElem = document.createElement('p');
pElem.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ultricies placerat. Nunc ultrices quam et viverra sodales. Nullam est ipsum, elementum a tempor in, gravida sit amet ipsum. Mauris dignissim mattis tincidunt. Duis ornare dui non rutrum auctor. Phasellus quis accumsan lectus, ac tristique nibh. Ut scelerisque fringilla felis ut facilisis. Sed nec velit euismod, mattis sapien a, dignissim ante. Nunc ac ligula sit amet purus consectetur pulvinar. In hac habitasse platea dictumst. Aliquam ex lorem, volutpat eu lacus nec, finibus elementum turpis. In pretium, nisl id auctor rutrum, nisi justo aliquet dui, quis fringilla lacus leo ut felis. Sed vel quam ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam quis laoreet erat. Curabitur facilisis purus eu accumsan vestibulum. Morbi lorem metus, gravida ac rhoncus suscipit, aliquam at est. Aenean consequat sit amet arcu ac lacinia. Donec luctus sem vitae nisi facilisis, a commodo magna interdum. Nam ornare consequat mi ut rutrum. In laoreet libero ac tellus malesuada sodales. Ut nec ante ligula. Integer porttitor facilisis enim non efficitur. Quisque id sapien ut dui convallis efficitur. Pellentesque commodo vitae sem eget scelerisque. Morbi ullamcorper diam eu nibh cursus cursus. Maecenas euismod iaculis."
articleElem.appendChild(pElem);

let headerElem1 = document.createElement('header');
articleElem.appendChild(headerElem1);

let h2Elem1 = document.createElement('h2');
headerElem1.appendChild(h2Elem1);
h2Elem1.innerText = 'Lisää hassunhauskaa faktaa';

let pElem1 = document.createElement('p');
pElem1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ultricies placerat. Nunc ultrices quam et viverra sodales. Nullam est ipsum, elementum a tempor in, gravida sit amet ipsum. Mauris dignissim mattis tincidunt. Duis ornare dui non rutrum auctor. Phasellus quis accumsan lectus, ac tristique nibh. Ut scelerisque fringilla felis ut facilisis. Sed nec velit euismod, mattis sapien a, dignissim ante. Nunc ac ligula sit amet purus consectetur pulvinar. In hac habitasse platea dictumst. Aliquam ex lorem, volutpat eu lacus nec, finibus elementum turpis. In pretium, nisl id auctor rutrum, nisi justo aliquet dui, quis fringilla lacus leo ut felis. Sed vel quam ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam quis laoreet erat. Curabitur facilisis purus eu accumsan vestibulum. Morbi lorem metus, gravida ac rhoncus suscipit, aliquam at est. Aenean consequat sit amet arcu ac lacinia. Donec luctus sem vitae nisi facilisis, a commodo magna interdum. Nam ornare consequat mi ut rutrum. In laoreet libero ac tellus malesuada sodales. Ut nec ante ligula. Integer porttitor facilisis enim non efficitur. Quisque id sapien ut dui convallis efficitur. Pellentesque commodo vitae sem eget scelerisque. Morbi ullamcorper diam eu nibh cursus cursus. Maecenas euismod iaculis."
articleElem.appendChild(pElem1);
