import Adapater from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapater() });
const enzyme3shallow = Enzyme.shallow;
