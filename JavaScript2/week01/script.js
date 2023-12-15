'use strict';

//1.1

let books = [
    'harry_potter_chamber_secrets',
    'harry_potter_philosophers_stone',
    'harry_potter_prisoner_azkaban',
    'harry_potter_goblet_fire',
    'harry_potter_order_phoenix',
    'harry_potter_half_blood_prince',
    'harry_potter_deathly_hallows',
    'harry_potter_cursed_child',
    'harry_potter_beasts',
    'harry_potter_quidditch_through_ages',
];

// 1.2

// console.log(books);

//1.3
let createList = (items) => {
    const newList = document.createElement('ul');
    for (let i = 0; i < items.length; i++) {
        const newListItem = document.createElement('li');

        newListItem.textContent = items[i];

        newList.appendChild(newListItem);
    }
    return newList;
};

console.log(createList(books));

//1.4

books = {
    harry_potter_chamber_secrets: {
        title: 'Harry Potter and the Chamber of Secrets',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_philosophers_stone: {
        title: "Harry Potter and the Philosopher's Stone",
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_prisoner_azkaban: {
        title: 'Harry Potter and the Prisoner of Azkaban',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_goblet_fire: {
        title: 'Harry Potter and the Goblet of Fire',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_order_phoenix: {
        title: 'Harry Potter and the Order of the Phoenix',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_half_blood_prince: {
        title: 'Harry Potter and the Half-Blood Prince',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_deathly_hallows: {
        title: 'Harry Potter and the Deathly Hallows',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_cursed_child: {
        title: 'Harry Potter and the Cursed Child',
        language: 'English',
        author: 'J.K. Rowling and Jack Thorne',
    },
    harry_potter_beasts: {
        title: 'Fantastic Beasts and Where to Find Them',
        language: 'English',
        author: 'J.K. Rowling',
    },
    harry_potter_quidditch_through_ages: {
        title: 'Quidditch Through the Ages',
        language: 'English',
        author: 'Kennilworthy Whisp (J.K. Rowling)',
    },
};

//1.5

createList = (items) => {
    const books = document.querySelector('#books');
    const newList = document.createElement('ul');
    for (let key in items) {
        const newListItem = document.createElement('li');
        const title = document.createElement('h2');
        const language = document.createElement('p');
        const author = document.createElement('p');
        const wrapper = document.createElement('div');

        title.className = 'book__title';
        language.className = 'book__language';
        author.className = 'book__author';
        wrapper.className = 'book__wrapper';
        newListItem.id = key;

        title.textContent = items[key].title;
        language.textContent = items[key].language;
        author.textContent = items[key].author;

        wrapper.appendChild(title);
        wrapper.appendChild(language);
        wrapper.appendChild(author);
        newListItem.appendChild(wrapper);

        newList.appendChild(newListItem);
    }
    books.appendChild(newList);
};

createList(books);

//1.6 Beautify your html page with css (use the style.css file for that), add sources and alts to each of the images.

//1.7

let icons = {
    harry_potter_chamber_secrets: './images/1.jpg',
    harry_potter_philosophers_stone: './images/9781781100219.jpg',
    harry_potter_prisoner_azkaban: './images/91VZqV0Cy8L._AC_UF1000,1000_QL80_.jpg',
    harry_potter_goblet_fire: './images/91OaFqznVCL._AC_UF1000,1000_QL80_.jpg',
    harry_potter_order_phoenix: './images/813lOXWdSNL._AC_UF1000,1000_QL80_.jpg',
    harry_potter_half_blood_prince: './images/81YvqjX4AdL._AC_UF1000,1000_QL80_.jpg',
    harry_potter_deathly_hallows: './images/811t1pfIZXL._AC_UF1000,1000_QL80_.jpg',
    harry_potter_cursed_child: './images/534x840.jpg',
    harry_potter_beasts: './images/71FKyizMPHL._AC_UF1000,1000_QL80_.jpg',
    harry_potter_quidditch_through_ages: './images/81-qAWbm9VL._AC_UF1000,1000_QL80_.jpg',
};

//1.8

const addIconsToBooks = (icons) => {
    const listItems = document.querySelectorAll('#books li');
    for (let i = 0; i < listItems.length; i++) {
        const image = document.createElement('img');
        const alt = document.createAttribute('alt');

        image.src = icons[listItems[i].id];
        image.alt = books[listItems[i].id].title;

        listItems[i].prepend(image);
    }
};

addIconsToBooks(icons);
