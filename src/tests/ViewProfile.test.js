import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import ViewProfile from '../pages/ViewProfile';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {adminDetailsData} from '../pages/data.js'
 
configure({ adapter: new Adapter() });

    describe('testing ViewProfile',() =>{
	let wrapper;
    adminDetailsData.add('alex','alex@gmail.com','Reddy@123','26/05/1996','9798989898','Chennai')
	beforeEach(()=>wrapper=shallow(<ViewProfile match={{params:{adminId:1}}}/>))

	it('should render nine <div/>',() => {
		expect(wrapper.find('div').length).toEqual(9);
	});

	
    
    it('should render five span <span/>',() => {
        expect(wrapper.find('span').length).toEqual(5);
    })
    it('renders a name input',() => {
    	expect(shallow(<ViewProfile match={{params:{adminId:1}}}/>).find('#name').length).toEqual(1);
    })
    it('renders a email',() => {
    	expect(shallow(<ViewProfile match={{params:{adminId:1}}}/>).find('#email').length).toEqual(1);
    })
    it('renders a dob',() => {
    	expect(shallow(<ViewProfile match={{params:{adminId:1}}}/>).find('#dob').length).toEqual(1);
    })
      it('renders a location',() => {
        expect(shallow(<ViewProfile match={{params:{adminId:1}}}/>).find('#mobileno').length).toEqual(1);
    })
    it('renders a mobile',() => {
    	expect(shallow(<ViewProfile match={{params:{adminId:1}}}/>).find('#location').length).toEqual(1);
    })
    
    {/*it('valid path', () => {
    const wrapper = mount(
      <Router initialEntries={['/allPatients']}>
        <App />
      </Router>
    );
    expect(wrapper.find(AddPatient)).toHaveLength(1);
  }); */}

})
