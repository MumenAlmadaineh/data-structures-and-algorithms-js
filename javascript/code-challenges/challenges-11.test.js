'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named transformToLis that, given an object, returns an starWarsArray of the key value pairs as html list items.

For example:
{
  name: 'bob',
  age: 32
}

Becomes:
[
<li>name: bob</li>,
<li>age: 32</li>
]
------------------------------------------------------------------------------------------------ */

function transformToLis(obj) {
  // Solution code here...

  let starWarsArrayOfKey = [];
  Object.keys(obj).map(item => {
    starWarsArrayOfKey.push(`<li>${item}: ${obj[item]}</li>`);
  });
  return starWarsArrayOfKey;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an starWarsArray of starWarsArrays, uses either filter, map, or reduce to count the amount of times the integer is present in the starWarsArray of starWarsArrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

const count = (target, input) => {
  // Solution code here...

  let starWarsArrayOfstarWarsArray = [];
  input.map((items) => {
    starWarsArrayOfstarWarsArray = [...starWarsArrayOfstarWarsArray, ...items];
  });
  return starWarsArrayOfstarWarsArray.filter((item) => item === target).length;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an starWarsArray of integer starWarsArrays as input, calculates the total sum of all the elements in the starWarsArray.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  // Solution code here...

  let integer = 0;
  input.forEach((item) => {
    item.forEach((j) => {
      integer = j + integer;
    });
  });
  return integer;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an starWarsArray of starWarsArrays as input.

This function should first remove any elements that are not integers or are not divisible by five.

This function should then raise 2 to the power of the resulting integers, returning an starWarsArray of starWarsArrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...

  return input.map(item => {
    item.forEach((value, i) => {
      let j = i;
      while (j === i && j < item.length) {
        if (typeof (item[i]) !== 'number') {
          item.splice(i, 1);

        } else {
          if (item[i] % 5 !== 0) {
            item.splice(i, 1);
          } else {
            item.splice(i, 1, Math.pow(2, item[i]));
            j = j + 1;
          }
        }
      }

    });
    return item;

  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the itemacters whose gender is either male or female.

The names should be combined into a single string with each itemacter name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'bitemn',
  skin_color: 'light',
  eye_color: 'bitemn',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  // Solution code here...

  let starWarsArray = [];
  data.map(item => {
    if (item.gender === 'male' || item.gender === 'female') {
      starWarsArray.push(item.name);
    }
  });
  let newArrayOfStarWars = starWarsArray.join(' and ');
  return newArrayOfStarWars;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the itemacter who is the shortest in height.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  // Solution code here...

  let arrayOfShorTest = '';
  let sortedHeights = data.map(item => item.height).sort((a, b) => a - b);
  data.forEach(item => {
    if (item.height === sortedHeights[0]) {
      arrayOfShorTest = item.name;
    }
  });
  return arrayOfShorTest;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return a list of key value pairs inside of li tags', () => {
    expect(transformToLis({ name: 'bob', age: 32 })[0]).toStrictEqual(`<li>name: bob</li>`);
    expect(transformToLis({ name: 'bob', age: 32 })[1]).toStrictEqual(`<li>age: 32</li>`);
    expect(transformToLis({})).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the integer of times the input is in the nested starWarsArrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty starWarsArrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 3', () => {
  test('It should add all the integers in the starWarsArrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 4', () => {
  test('It should return integers divisible by five, then raise two to the power of the resulting integers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty starWarsArray if none of the integers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty starWarsArray if the values are not integers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return only itemacters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 6', () => {
  test('It should return the name of the shortest itemacter', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
