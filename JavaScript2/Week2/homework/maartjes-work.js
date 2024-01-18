'use strict';

const monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180,
    },
    {
        name: 'Some web development',
        duration: 120,
    },
    {
        name: 'Fix homework for class10',
        duration: 20,
    },
    {
        name: 'Talk to a lot of people',
        duration: 200,
    },
];

const tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240,
    },
    {
        name: 'Some more web development',
        duration: 180,
    },
    {
        name: 'Staring out the window',
        duration: 10,
    },
    {
        name: 'Talk to a lot of people',
        duration: 200,
    },
    {
        name: 'Look at application assignments new students',
        duration: 40,
    },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
    const durationsInHours = tasks.map((task) => task.duration / 60);
    const moreThanTwoHours = durationsInHours.filter((hour) => hour >= 2);
    const totalBilling =
        moreThanTwoHours.reduce((accumulator, currentValue) => accumulator + currentValue, 0) *
        maartjesHourlyRate;

    console.log('durationsInHours', durationsInHours);
    console.log('moreThanTwoHours', moreThanTwoHours);

    console.log(tasks, hourlyRate);

    return totalBilling;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log('earnings', earnings);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

function formatToEuro(amount) {
    const formatMoney = new Intl.NumberFormat('en-GB', {
        currency: 'EUR',
        style: 'currency',
        maximumFractionDigits: 2,
    }).format(amount);

    return formatMoney;
}

const formattedEarnings = formatToEuro(earnings);
console.log(`Maartje has earned ${formattedEarnings}`);

// Do not change or remove anything below this line

if (typeof module !== 'undefined') {
    module.exports = {
        maartjesTasks,
        maartjesHourlyRate,
        computeEarnings,
    };
}
