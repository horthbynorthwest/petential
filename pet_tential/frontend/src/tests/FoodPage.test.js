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
  it('allows user to include meal type, date, comment and treats', () => {
    let foodpage = new FoodPage();
    expect(foodpage.state).toEqual({ mealType: "",
    date: "",
    comment: "",
    treats: 0,
    foodList: []})
  });

});
