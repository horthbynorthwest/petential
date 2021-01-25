import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

//
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
