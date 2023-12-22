import { totalBillingsCost, filterHour } from '../script.js';

describe('Working hours', () => {
    test('billing cost', () => {
        const hours = [1, 2, 3];
        const returnResult = totalBillingsCost(hours);

        expect(returnResult).toEqual('€120.00');
    });
    test('hours tuesday', () => {
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

        const returnResult = filterHour(monday);
        console.log('returnResult', returnResult);

        expect(returnResult).toEqual([3, 2]);
    });
    test('hours tuesday', () => {
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
        const returnResult = filterHour(tuesday);
        console.log('returnResult', returnResult);

        expect(returnResult).toEqual([3]);
    });
});
