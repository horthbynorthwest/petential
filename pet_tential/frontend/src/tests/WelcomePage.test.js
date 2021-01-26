
import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount } from "enzyme";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WelcomePage from '../components/WelcomePage';
// import toJson from "enzyme-to-json";

it("renders without crashing", () => {
    shallow(<WelcomePage />);
  });

// it('renders welcome message', () => {
//   render(<WelcomePage />);  
//   expect(screen.getByText('Petential')).toBeInTheDocument();
// });
  // it("renders Page header", () => {
// const wrapper = shallow(<WelcomePage />);
// const welcome = <h3>Petential</h3>;
// expect(wrapper.contains(welcome)).toEqual(true);
// });
