import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
