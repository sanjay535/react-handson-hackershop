import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import AddPatient from '../pages/AddPatient';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HashRouter as Router } from 'react-router-dom';
import {patientDetailsData} from '../pages/data.js'

configure({ adapter: new Adapter() });

describe('testing add patient',() =>{
	let wrapper;
	beforeEach(()=>wrapper=shallow(<AddPatient/>))

	it('should render eight <div/>',() => {
		expect(wrapper.find('div').length).toEqual(10);
	});

    it('should set the state values',() => {
        wrapper.setProps({ history: {
            push: function(){}
        }})
        wrapper.setState({name:'alex',email:'alex@gmail.com',dob:'26/05/1996',location:'syria',mobile:'989898989'});
        const form = wrapper.find('form');
        form.simulate('submit');
        console.log(patientDetailsData.getData());
        {/*expect(wrapper.state('email')).toEqual('alex@gmail.com');*/}

    });

	
    it('should render five labels <label/>',() => {
    	expect(wrapper.find('label').length).toEqual(5);
    })
    it('should render five inputs <input/>',() => {
    	expect(wrapper.find('input').length).toEqual(5);
    })
    it('renders a name input',() => {
    	expect(shallow(<AddPatient/>).find('#name').length).toEqual(1);
    })
    it('renders a name email',() => {
    	expect(shallow(<AddPatient/>).find('#email').length).toEqual(1);
    })
    it('renders a name dob',() => {
    	expect(shallow(<AddPatient/>).find('#dob').length).toEqual(1);
    })
    it('renders a name location',() => {
    	expect(shallow(<AddPatient/>).find('#location').length).toEqual(1);
    })
    it('renders a name mobile',() => {
    	expect(shallow(<AddPatient/>).find('#mobile').length).toEqual(1);
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
    it('should change the mobileno state of adding patient',() => {
    	wrapper.find('#mobile').simulate('change',{target: {name: 'mobile',value:'9999999999'}});
    	expect(wrapper.state('mobile')).toEqual('9999999999');
    })
})
