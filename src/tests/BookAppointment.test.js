import React from 'react';
import { shallow,mount } from 'enzyme';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from '../App';
import BookAppointment from '../pages/BookAppointment';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {patientDetailsData} from '../pages/data.js'
import {appDetailsData} from '../pages/data.js'

configure({ adapter: new Adapter() });


describe('testing BookAppointment',() =>{
	let wrapper;
	beforeEach(()=>wrapper=shallow(<BookAppointment/>))
                                                                                                                         
	it('should render eight <div/>',() => {
        "wrapper",wrapper
		expect(wrapper.find('div').length).toEqual(10);
	});

        it('should set the state values',() => {
        wrapper.setProps({ history: {
            push: function(){}
        }})
        wrapper.setState({name:'alex',disease:'Fever',appdate:'20/20/2099',slot:'10-11 AM',description:'Cold and Fever'});
        const form = wrapper.find('form');
        form.simulate('submit');
        console.log(appDetailsData.getData());
        {/*expect(wrapper.state('email')).toEqual('alex@gmail.com');*/}

    });

	
    
    it('should render five labels <label/>',() => {
    	expect(wrapper.find('label').length).toEqual(5);
    })
    it('should render three inputs <input/>',() => {
    	expect(wrapper.find('input').length).toEqual(3);
    })
    it('should render two selects <select/>',() => {
    expect(wrapper.find('select').length).toEqual(2);
    })
    it('renders a name input',() => {
    	expect(shallow(<BookAppointment/>).find('#name').length).toEqual(0);
    })
    it('renders a name disease',() => {
    	expect(shallow(<BookAppointment/>).find('#disease').length).toEqual(1);
    })
    it('renders a name appdate',() => {
    	expect(shallow(<BookAppointment/>).find('#appdate').length).toEqual(1);
    })
      it('renders a name slot',() => {
        expect(shallow(<BookAppointment/>).find('#slot').length).toEqual(0);
    })
    it('renders a description',() => {
    	expect(shallow(<BookAppointment/>).find('#description').length).toEqual(1);
    })
    // it('should change the name state of adding patient',() => {
    // 	wrapper.find('#name').simulate('change',{target: {name: 'name',value:'Alex'}});
    // 	expect(wrapper.state('name')).toEqual('Alex');
    // })
  
    it('should change the disease state of adding patient',() => {
    	wrapper.find('#disease').simulate('change',{target: {name: 'disease',value:'Fever'}});
    	expect(wrapper.state('disease')).toEqual('Fever');
    })
    it('should change the appdate state of adding patient',() => {
    	wrapper.find('#appdate').simulate('change',{target: {name: 'appdate',value:'26/05/2019'}});
    	expect(wrapper.state('appdate')).toEqual('26/05/2019');
    })
    // it('should change the slot state of adding patient',() => {
    // 	// wrapper.find('#slot').simulate('change',{target: {name: 'slot',value:'10-11 AM'}});
    // 	expect(wrapper.state('slot')).toEqual('10-11 AM');
    //     expect(wrapper.find('slot').text()).toEqual('10-11 AM');
    // })

    it('should change the description state of adding patient',() => {
    	wrapper.find('#description').simulate('change',{target: {name: 'description',value:'Having Fever'}});
    	expect(wrapper.state('description')).toEqual('Having Fever');
    })

})
