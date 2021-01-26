
import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount } from "enzyme";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreatePackPage from '../components/CreatePackPage';
// import toJson from "enzyme-to-json";

it("renders without crashing", () => {
    shallow(<CreatePackPage />);
  });

