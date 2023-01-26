import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import ViewAppointment from '../pages/ViewAppointment';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {appDetailsData} from '../pages/data.js'

configure({ adapter: new Adapter() });

    describe('testing ViewAppointment',() =>{
	let wrapper;
    appDetailsData.add('alex','fever','26/05/1996','1-2 PM','Cold and Fever')
    //appDetailsData.add(name:'alex',disease:'fever',appdate:'26/05/2099',slot:'1-2 PM',description:'cold and fever')
    console.log(appDetailsData.getData())
	beforeEach(()=>wrapper=shallow(<ViewAppointment match={{params:{appId:1}}}/>))

	it('should render eight <div/>',() => {
		expect(wrapper.find('div').length).toEqual(10);
	});

	
    
    it('should render five labels <label/>',() => {
    	expect(wrapper.find('span').length).toEqual(5);
    })
    it('renders a name input',() => {
    	expect(shallow(<ViewAppointment match={{params:{appId:1}}}/>).find('#name').length).toEqual(1);
    })
    it('renders a disease',() => {
    	expect(shallow(<ViewAppointment match={{params:{appId:1}}}/>).find('#disease').length).toEqual(1);
    })
    it('renders a appdate',() => {
    	expect(shallow(<ViewAppointment match={{params:{appId:1}}}/>).find('#appdate').length).toEqual(1);
    })
      it('renders a slot',() => {
        expect(shallow(<ViewAppointment match={{params:{appId:1}}}/>).find('#slot').length).toEqual(1);
    })
    it('renders a description',() => {                   
    	expect(shallow(<ViewAppointment match={{params:{appId:1}}}/>).find('#description').length).toEqual(1);
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
