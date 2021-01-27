import React from 'react';
import Enzyme from 'enzyme';
import ReactDOM from 'react-dom';
import TestRenderer, { act } from 'react-test-renderer';
//import renderer from 'react-test-renderer';
import Pack from '../components/Pack';
import {cleanup, fireEvent, render} from '@testing-library/react';
//import toJson from "enzyme-to-json";

import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve({ pet_name: "houmous", is_host: true, id: "1"})
        }));

describe('Pack page', function() {
  it("renders without crashing", () => {
      const func = () => {};
      const hist = [];
  shallow(<Pack history={hist} leavePackCallback={func} match={{params: {packCode: "ABCDEF"}}}/>);
  });

//   it('shows pet details', function() {
//     let houmous = new Pack();
//     expect(houmous.props.petName).toEqual({petName: "houmous", isHost: True})
//   });
});
