import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import AddPatient from '../pages/AddPatient';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {patientDetailsData} from '../pages/data.js'
import AllPatients from '../pages/AllPatients'

configure({adapter : new Adapter()});

    describe('testing AllPatients',() =>{
	let wrapper;
	beforeEach(()=>wrapper=shallow(<AllPatients/>))
    it('should set the state values',() => {
        wrapper.setProps({ history: {
            push: function(){}
        }})
        wrapper.setState({name:'alex',email:'alex@gmail.com',dob:'26/05/1996',location:'syria',mobile:'989898989'});
        const form = wrapper.find('form');
        form.simulate('submit');
        console.log(patientDetailsData.getData());

});
	

});