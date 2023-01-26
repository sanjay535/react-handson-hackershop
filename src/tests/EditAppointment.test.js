import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import EditAppointment from '../pages/EditAppointment';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {appDetailsData} from '../pages/data.js'

configure({ adapter: new Adapter() });

    describe('testing EditAppointment',() =>{
	let wrapper;
    appDetailsData.add('Alex','fever','16/6/2999','1-2 PM','Cold and Fever')
	beforeEach(()=>wrapper=shallow(<EditAppointment match={{params:{appId:1}}}/>))

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
    	expect(shallow(<EditAppointment match={{params:{appId:1}}}/>).find('#name').length).toEqual(1);
    })
    it('renders a disease',() => {
    	expect(shallow(<EditAppointment match={{params:{appId:1}}}/>).find('#disease').length).toEqual(1);
    })
    it('renders a appdate',() => {
    	expect(shallow(<EditAppointment match={{params:{appId:1}}}/>).find('#appdate').length).toEqual(1);
    })
      it('renders a slot',() => {
        expect(shallow(<EditAppointment match={{params:{appId:1}}}/>).find('#slot').length).toEqual(1);
    })
    it('renders a description',() => {
    	expect(shallow(<EditAppointment match={{params:{appId:1}}}/>).find('#description').length).toEqual(1);
    })
    it('should change the name state of adding patient',() => {
    	wrapper.find('#name').simulate('change',{target: {name: 'name',value:'Alex'}});
    	expect(wrapper.state('name')).toEqual('Alex');
    })
  
    it('should change the disease state of adding patient',() => {        
    	wrapper.find('#disease').simulate('change',{target: {name: 'disease',value:'Fever'}});
    	expect(wrapper.state('disease')).toEqual('Fever');
    })
    it('should change the appdate state of adding patient',() => {
    	wrapper.find('#appdate').simulate('change',{target: {name: 'appdate',value:'26/05/1996'}});
    	expect(wrapper.state('appdate')).toEqual('26/05/1996');
    })
    it('should change the slot state of adding patient',() => {
        wrapper.find('#slot').simulate('change',{target: {name: 'slot',value:'10-11 AM'}});
        expect(wrapper.state('slot')).toEqual('10-11 AM');
    })

    it('should change the description state of adding patient',() => {
    	wrapper.find('#description').simulate('change',{target: {name: 'description',value:'Having fever'}});
    	expect(wrapper.state('description')).toEqual('Having fever');
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
