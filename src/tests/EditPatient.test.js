import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import EditPatient from '../pages/EditPatient';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {patientDetailsData} from '../pages/data.js'

configure({ adapter: new Adapter() });

    describe('testing EditPatient',() =>{
	let wrapper;
    patientDetailsData.add('alex','alex@gmail.com','26/05/1996','Syria','9898989899')
	beforeEach(()=>wrapper=shallow(<EditPatient match={{params:{id:1}}}/>))

	it('should render eight <div/>',() => {
		expect(wrapper.find('div').length).toEqual(10);
	});

    
    it('should render five labels <label/>',() => {
    	expect(wrapper.find('label').length).toEqual(5);
    })
    it('should render three inputs <input/>',() => {
    	expect(wrapper.find('input').length).toEqual(5);
    })
    it('renders a name input',() => {
    	expect(shallow(<EditPatient match={{params:{id:1}}}/>).find('#name').length).toEqual(1);
    })
    it('renders a email',() => {
    	expect(shallow(<EditPatient match={{params:{id:1}}}/>).find('#email').length).toEqual(1);
    })
    it('renders a dob',() => {
    	expect(shallow(<EditPatient match={{params:{id:1}}}/>).find('#dob').length).toEqual(1);
    })
      it('renders a location',() => {
        expect(shallow(<EditPatient match={{params:{id:1}}}/>).find('#location').length).toEqual(1);
    })
    it('renders a mobile',() => {
    	expect(shallow(<EditPatient match={{params:{id:1}}}/>).find('#mobile').length).toEqual(1);
    })
    it('should change the name state of adding patient',() => {
    	wrapper.find('#name').simulate('change',{target: {name: 'name',value:'Alex'}});
    	expect(wrapper.state('name')).toEqual('Alex');
    })
  
    it('should change the email state of adding patient',() => {        
    	wrapper.find('#email').simulate('change',{target: {name: 'email',value:'alex@gmail.com'}});
    	expect(wrapper.state('email')).toEqual('alex@gmail.com');
    })
    it('should change the dob state of adding patient',() => {
    	wrapper.find('#dob').simulate('change',{target: {name: 'dob',value:'26/05/1996'}});
    	expect(wrapper.state('dob')).toEqual('26/05/1996');
    })
    it('should change the location state of adding patient',() => {
        wrapper.find('#location').simulate('change',{target: {name: 'location',value:'Chennai'}});
        expect(wrapper.state('location')).toEqual('Chennai');
    })

    it('should change the mobile state of adding patient',() => {
    	wrapper.find('#mobile').simulate('change',{target: {name: 'mobile',value:'8667879989'}});
    	expect(wrapper.state('mobile')).toEqual('8667879989');
    })

    {/*it('valid path', () => {
    const wrapper = mount(
      <Router initialEntries={['/allPatients']}>
        <App />
      </Router>
    );
    expect(wrapper.find(AddPatient)).toHaveLength(1);
  });*/}

})
