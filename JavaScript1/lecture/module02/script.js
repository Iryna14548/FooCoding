send.addEventListener('click', async () => {
    const userInfo = document.querySelector('#loginForm');
    const formData = new FormData(userInfo);
    formData.append('serialnumber', 12345);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
});

const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];

const createList = async () => {
    const foodList = document.querySelector('#food');

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < food.length; i++) {
        const newFood = document.createElement('li');
        newFood.textContent = food[i]; /*  */

        fragment.appendChild(newFood);
    }
    foodList.appendChild(fragment);
};

createList();

const deleteFoodElement = () => {
    const foodList = document.querySelector('#food');
    const foodName = document.querySelector('#foodName');
    const deleteButton = document.querySelector('#deleteFood');

    deleteButton.addEventListener('click', () => {
        if (foodName.value === '') {
            alert('Please enter a food name');

            return;
        }

        let isDeleted = '';
        for (let i = 0; i < foodList.children.length; i++) {
            const element = foodList.children[i];

            if (foodName.value === element.textContent) {
                isDeleted = 'x';
                element.remove();
            }
            // else {
            //     if (index === foodList.children.length - 1) {
            //         alert("Food not found");
            //     }
            // }
        }
        if (isDeleted === '') {
            alert('Food not found');
        }
    });
};

deleteFoodElement();
