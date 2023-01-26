import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import App from '../App';
import ViewPatient from '../pages/ViewPatient';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {patientDetailsData} from '../pages/data.js'
 
configure({ adapter: new Adapter() });

    describe('testing ViewPatient',() =>{

	let wrapper;
    patientDetailsData.add('alex','alex@gmail.com','26/05/1996','Syria','9898989899')
    console.log(patientDetailsData.getData());
	beforeEach(()=>wrapper=shallow(<ViewPatient match={{params:{id:1}}}/>))
	{/*it('should render five <div/>',() => {
		expect(wrapper.find('div').length).toEqual(5);
	});*/}
    it('should render seven <div />', () => {
        console.log("wrapper",wrapper.find('div'))
    expect(wrapper.find('div').length).toEqual(9);
    });

	
    
    it('should render five labels <span/>',() => {
    	expect(wrapper.find('span').length).toEqual(5);
    })
    it('renders a name input',() => {   
    	expect(shallow(<ViewPatient match={{params:{id:1}}}/>).find('#name').length).toEqual(1);
    })
    it('renders a email',() => {
    	expect(shallow(<ViewPatient match={{params:{id:1}}}/>).find('#email').length).toEqual(1);
    })
    it('renders a dob',() => {
    	expect(shallow(<ViewPatient match={{params:{id:1}}}/>).find('#dob').length).toEqual(1);
    })
      it('renders a location',() => {
        expect(shallow(<ViewPatient match={{params:{id:1}}}/>).find('#location').length).toEqual(1);
    })
    it('renders a mobile',() => {
    	expect(shallow(<ViewPatient match={{params:{id:1}}}/>).find('#mobile').length).toEqual(1);
    })
    
});
