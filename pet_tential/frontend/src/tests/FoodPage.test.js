import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer, { act } from 'react-test-renderer';
//import renderer from 'react-test-renderer';
import FoodPage from '../components/FoodPage';
import {cleanup, fireEvent, render} from '@testing-library/react';

// feature - go to page food and expect content to be 'Food Log'
// feature - fill in form and click Post, expect page to have content that they've just added
// unit -
describe ('Test the FoodPage and actions', () => {
  test('handleMealTypeChange method changes the mealType state', () => {
    let foodpage = new FoodPage();
    expect(foodpage.state).toEqual({ mealType: "",
    date: "",
    comment: "",
    treats: 0, })
  });
});


// it('should return the initial state', () => {
//     let foodpage = new FoodPage();
//     expect(foodpage.initialState).toContain({ mealType: "",
//     comment: "",
//     treats: 0, })
// })
//
// let foodpage = new FoodPage();
// const handleMealTypeChange = jest.fn();
//
// foodpage.handleMealTypeChange({target: 'lunch'});
// expect(foodpage.mealType).toEqual('lunch');
