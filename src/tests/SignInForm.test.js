import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import SignInForm from '../pages/SignInForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SignInForm', () => {
  
  let wrapper;
  beforeEach(() => wrapper = shallow(<SignInForm />));

  it('should render seven <div />', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });

 

 
  it('should render four <label>s', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
  it('should render four <input>s', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it('renders a fname input', () => {
    expect(shallow(<SignInForm />).find('#email').length).toEqual(1)
  })
  it('renders a lname input', () => {
    expect(shallow(<SignInForm />).find('#password').length).toEqual(1)
  })
  it('should change the state of the Login Component', () => {
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
    expect(wrapper.state('email')).toEqual('blah@gmail.com');
  })

  it('should change the state of the Login Component', () => {
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'blah' } });
    expect(wrapper.state('password')).toEqual('blah');
  })
  {/*it('valid path', () => {
    const wrapper = mount(
      <Router initialEntries={['/allPatients']}>
        <App />
      </Router>
    );
    expect(wrapper.find(SignInForm)).toHaveLength(1);
  });*/}

})
