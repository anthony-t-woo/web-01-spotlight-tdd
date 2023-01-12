// IMPORT MODULES under test here:
import {
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    renderDogLI,
    addExclamationPoints,
    renderDogDiv,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.deepEqual(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.deepEqual(actual, expected);
});

test('should take in a string and add !!! to the end', (expect) => {
    const expected = 'dang!!!';
    const actual = addExclamationPoints('dang');
    expect.deepEqual(actual, expected, 'Should Return dang!!!');

    const expected2 = 'dude!!!';
    const actual2 = addExclamationPoints('dude');
    expect.deepEqual(actual2, expected2, 'Should return dude!!!');

    const expected3 = 'wow!!!';
    const actual3 = addExclamationPoints('wow');
    expect.deepEqual(actual3, expected3, 'Should return wow!!!');
});

test('should take a number and multiply by 7', (expect) => {
    const expected = 28;
    const actual = multiplyBySeven(4);
    expect.deepEqual(actual, expected, '4 * 7 should equal 28');

    const expected2 = 63;
    const actual2 = multiplyBySeven(9);
    expect.deepEqual(actual2, expected2, '9 * 7 should equal 63');

    const expected3 = 224;
    const actual3 = multiplyBySeven(32);
    expect.deepEqual(actual3, expected3, '32 * 7 should equal 224');
});

test('should take a number and multiply by 12 then half', (expect) => {
    const expected = 6;
    const actual = multiplyBy12ThenHalve(1);
    expect.deepEqual(actual, expected, '(1*12)/2 should equal 6');

    const expected2 = 54;
    const actual2 = multiplyBy12ThenHalve(9);
    expect.deepEqual(actual2, expected2, '(9*12)/2 should equal 54');

    const expected3 = 78;
    const actual3 = multiplyBy12ThenHalve(13);
    expect.deepEqual(actual3, expected3, '(13*12)/2 should equal 78');
});

test('should divide a number by a second number and multiply by a third number', (expect) => {
    const expected = 3;
    const actual = divideThenMultiply(2, 6, 9);
    expect.deepEqual(actual, expected, '2/6*9 should equal 3');

    const expected2 = 70;
    const actual2 = divideThenMultiply(30, 6, 14);
    expect.deepEqual(actual2, expected2, '30/6*14 should equal 70');

    const expected3 = 16;
    const actual3 = divideThenMultiply(8, 4, 8);
    expect.deepEqual(actual3, expected3, '8/4*8 should equal 16');
});

test('should take in three separate numbers and return an array of those numbers', (expect) => {
    const expected = [2, 6, 9];
    const actual = returnAsAnArray(2, 6, 9);
    expect.deepEqual(actual, expected, 'should return [2, 6, 9]');

    const expected2 = [30, 6, 14];
    const actual2 = returnAsAnArray(30, 6, 14);
    expect.deepEqual(actual2, expected2, 'should return [30, 6, 14]');

    const expected3 = [8, 4, 8];
    const actual3 = returnAsAnArray(8, 4, 8);
    expect.deepEqual(actual3, expected3, 'should return [8, 4, 8]');
});

test('should take in three separate numbers and return a string of those numbers', (expect) => {
    const expected = '269';
    const actual = returnAsAString(2, 6, 9);
    expect.deepEqual(actual, expected, 'should return 269');

    const expected2 = '30614';
    const actual2 = returnAsAString(30, 6, 14);
    expect.deepEqual(actual2, expected2, 'should return 30614');

    const expected3 = '848';
    const actual3 = returnAsAString(8, 4, 8);
    expect.deepEqual(actual3, expected3, 'should return 848');
});

test('should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number ', (expect) => {
    const expected = 'Hello! Your lucky number is 26';
    const actual = makeLuckyGreeting(2, 6);
    expect.deepEqual(actual, expected, 'should return: Hello! Your lucky number is 26');

    const expected2 = 'Hello! Your lucky number is 306';
    const actual2 = makeLuckyGreeting(30, 6);
    expect.deepEqual(actual2, expected2, 'should return: Hello! Your lucky number is 306');

    const expected3 = 'Hello! Your lucky number is 84';
    const actual3 = makeLuckyGreeting(8, 4);
    expect.deepEqual(actual3, expected3, 'should return: Hello! Your lucky number is 84');
});

test('should take in an array of any length and return the arrays second value', (expect) => {
    const expected = 'hey';
    const actual = getSecondItem(['oh', 'hey', 'how', 'are', 'you']);
    expect.deepEqual(actual, expected, 'should return "hey"');

    const expected2 = 'wine';
    const actual2 = getSecondItem(['cheese', 'wine', 'crackers', 'salami', 'grapes']);
    expect.deepEqual(actual2, expected2, 'should return "wine"');

    const expected3 = 4;
    const actual3 = getSecondItem([8, 4, 30, 6, 15]);
    expect.deepEqual(actual3, expected3, 'should return 4');
});

test('should take in an array of any length and return the arrays last value', (expect) => {
    const expected = 'you';
    const actual = getLastItem(['oh', 'hey', 'how', 'are', 'you']);
    expect.deepEqual(actual, expected, 'should return "you"');

    const expected2 = 'grapes';
    const actual2 = getLastItem(['cheese', 'wine', 'crackers', 'salami', 'grapes']);
    expect.deepEqual(actual2, expected2, 'should return "grapes"');

    const expected3 = 15;
    const actual3 = getLastItem([8, 4, 30, 6, 15]);
    expect.deepEqual(actual3, expected3, 'should return 15');
});

test('should take in a dog object and return an <li> with the name of the dog', (expect) => {
    const expected = '<li>Mars</li>';
    const actual = renderDogLI({ name: 'Mars', age: 3 });
    expect.deepEqual(actual, expected, 'should return <li>Mars</li>');

    const expected2 = '<li>Cake</li>';
    const actual2 = renderDogLI({ name: 'Cake', age: 2 });
    expect.deepEqual(actual2, expected2, 'should return <li>Cake</li>');

    const expected3 = '<li>Chancho</li>';
    const actual3 = renderDogLI({ name: 'Chancho', age: 2.5 });
    expect.deepEqual(actual3, expected3, 'should return <li>Chancho</li>');
});

test('should take in a dog object and return a div with the dogs information', (expect) => {
    const expected = '<div><h1>Mars</h1><p>Mars is 3 years old</p></div>';
    const actual = renderDogDiv({ name: 'Mars', age: 3 });
    expect.deepEqual(
        actual,
        expected,
        'should return <div><h1>Mars</h1><p>Mars is 3 years old</p></div>'
    );

    const expected2 = '<div><h1>Cake</h1><p>Cake is 2 years old</p></div>';
    const actual2 = renderDogDiv({ name: 'Cake', age: 2 });
    expect.deepEqual(
        actual2,
        expected2,
        'should return <div><h1>Cake</h1><p>Cake is 2 years old</p></div>'
    );

    const expected3 = '<div><h1>Chancho</h1><p>Chancho is 2.5 years old</p></div>';
    const actual3 = renderDogDiv({ name: 'Chancho', age: 2.5 });
    expect.deepEqual(
        actual3,
        expected3,
        'should return <div><h1>Chancho</h1><p>Chancho is 2.5 years old</p></div>'
    );
});
