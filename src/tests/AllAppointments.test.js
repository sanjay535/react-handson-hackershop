import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import BookAppointment from '../pages/BookAppointment';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {appDetailsData} from '../pages/data.js'
import AllAppointments from '../pages/AllAppointments'

configure({adapter : new Adapter()});

    describe('testing AllAppointments',() =>{
	let wrapper;
	beforeEach(()=>wrapper=shallow(<AllAppointments/>))
    it('should set the state values',() => {
        wrapper.setProps({ history: {
            push: function(){}
        }})
        wrapper.setState({name:'alex',disease:'fever',appdate:'26/05/9999',slot:'10-11 AM',description:'Fever and Cold'});
        const form = wrapper.find('form');
        form.simulate('submit');
        console.log(appDetailsData.getData());

});
	

});