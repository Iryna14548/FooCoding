//1.1

// function doubleOddNumbers(numbers) {
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             newNumbers.push(numbers[i] * 2);
//         }
//     }
//     return newNumbers;
// }

function doubleOddNumbers(numbers) {
    let result = numbers.filter((number) => {
        if (number % 2 !== 0) {
            return true;
        }
    });
    result = result.map((number) => {
        return number * 2;
    });
    return result;

    // return numbers
    //     .filter((number) => {
    //         if (number % 2 !== 0) {
    //             return true;
    //         }
    //     })
    //     .map((number) => {
    //         return number * 2;
    //     });
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

//1.2

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
        duration: 1.0,
    },
];

const tuesday = [
    {
        name: 'Keep writing summary',
        duration: 1.0,
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
        duration: 1.0,
    },
    {
        name: 'Look at application assignments new students',
        duration: 40,
    },
];

//Map the tasks to durations in hours.
//Filter out everything that took less than two hours (i.e., remove from the collection)

const dayToHours = (day) => {
    let minuteToHours = day.map((day) => {
        return day.duration / 60;
    });
    console.log('minuteToHours', minuteToHours);

    let lessThanTwoHours = minuteToHours.filter((hour) => {
        if (hour >= 2) {
            return true;
        }
    });

    console.log('lessThanTwoHours', lessThanTwoHours);

    return lessThanTwoHours;
};

const mondayHours = dayToHours(monday);
const tuesdayHours = dayToHours(tuesday);
const totalHoursForAllDays = mondayHours.concat(tuesdayHours);

//console.log('mondayHours', mondayHours);
//console.log('tuesdayHours', tuesdayHours);
console.log('totalHoursForAllDays', totalHoursForAllDays);

//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.

const totalBillingsCost = (totalHours) => {
    // let totalSum = 0;
    // totalHours.forEach((hour) => {
    //     totalSum += hour * 20;
    // });
    // return totalSum;

    const totalSumOfBillings = totalHours.reduce(
        (accumulator, currentValue) => accumulator + currentValue * 20,
        0
    );
    const formatMoney = new Intl.NumberFormat('en-IE', {
        currency: 'EUR',
        style: 'currency',
        maximumFractionDigits: 2,
    }).format(totalSumOfBillings);

    return formatMoney;
};

const sumOfTotalBillings = totalBillingsCost(totalHoursForAllDays);
console.log('sumOfTotalBillings', sumOfTotalBillings);
