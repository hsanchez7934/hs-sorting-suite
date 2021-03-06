import { assert } from 'chai';
import genRandomLettersArray from '../lib/RandomLetterArray';
import genRandomNumberArray from '../lib/RandomNumberArray';
import bubbleSort from '../lib/Bubblesort';

describe('Bubblesort', () => {

  it('bubbleSort function should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('genRandomLettersArray function should be a function', () => {
    assert.isFunction(genRandomLettersArray);
  });

  it('genRandomNumberArray should be a function', () => {
    assert.isFunction(genRandomNumberArray);
  });

  it('genRandomNumberArray should produce an array, length should be 10', () => {
    const numArray = genRandomNumberArray(10);
    assert.isArray(numArray);
    assert.equal(numArray.length, 10);
  });

  it('genRandomLettersArray should produce an array, length should be 10', () => {
    const letterArray = genRandomLettersArray(10);
    assert.isArray(letterArray);
    assert.equal(letterArray.length, 10);
  });

  it.skip('bubbleSort function should return an array', () => {
    const letterArray = genRandomLettersArray(5);
    const returnedArray = bubbleSort(letterArray);

    assert.isArray(returnedArray);
  })

  it.skip('bubbleSort function should sort a small array of numbers in numerical order', () => {
    const numArray = genRandomNumberArray(5);
    const sorted = [...numArray].sort((a, b) => a - b);

    assert.deepEqual(bubbleSort(numArray), sorted);
  });

  it.skip('bubbleSort function should sort a large array of numbers in numerical order', () => {
    const numArray = genRandomNumberArray(50);
    const sorted = [...numArray].sort((a, b) => a - b);

    assert.deepEqual(bubbleSort(numArray), sorted);
  });

  it.skip('bubbleSort function should move smallest number of numArray to index 0 of sorted array', () => {
    const numArray = genRandomNumberArray(10);
    const smallestNum = Math.min(...numArray);

    assert.equal(bubbleSort(numArray)[0], smallestNum);
  });

  it.skip('bubbleSort function should move largest number of numArray to last index of sorted array', () => {
    const numArray = genRandomNumberArray(10);
    const lastIndex = numArray.length - 1;
    const largestNum = Math.max(...numArray);

    assert.equal(bubbleSort(numArray)[lastIndex], largestNum);
  });

  it.skip('bubbleSort function should sort a small array of letters', () => {
    const letterArray = genRandomLettersArray(10);
    const sorted = [...letterArray].sort();

    assert.deepEqual(bubbleSort(letterArray), sorted);
  });

  it.skip('bubbleSort function should sort a large array of letters', () => {
    const letterArray = genRandomLettersArray(40);
    const sorted = [...letterArray].sort();

    assert.deepEqual(bubbleSort(letterArray), sorted);
  });
})
