import React from "react";
import {shallow,mount} from "enzyme";
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import renderer from "react-test-renderer";


import App from "./components/App";
import Navbar from "./components/NavBar";
import Register from "./components/Register";
import ProductView from "./components/ProductView";
import LoginComponent from "./components/Login";



// Material UI 
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';






describe("Navbar Component Validation",()=>{
    it("Check if it renders",()=>{
        const wrapper = shallow(<Navbar/>)
        expect(wrapper).toBeTruthy()
    })

    it("Check if it has searchIcon component",()=>{
        const wrapper = mount(<App/>)
        expect(wrapper.find(SearchIcon).length).toEqual(1)
    })
})


describe("Register Component Validation",()=>{
    it("Check if it renders",()=>{
        const wrapper = shallow(<Register/>)
        expect(wrapper).toBeTruthy()
    })

    it("Check if it has form tag with `formTag` id",()=>{
        const wrapper = mount(<Register/>)
        expect(wrapper.find('#fromTag').length).toBe(1)
    })

    it("Check if it has 5 Input components",()=>{
        const wrapper = mount(<Register/>)
        expect(wrapper.find(Input).length).toBe(5)
    })

    it("Check if it has 5 FormControl components",()=>{
        const wrapper = mount(<Register/>)
        expect(wrapper.find(FormControl).length).toBe(5)
    })

    it("Check if it has a register button",()=>{
        const wrapper = mount(<Register/>)
        expect(wrapper.find(Button).length).toBe(1)
    })

})


describe("ProductView Component Validation",()=>{
    it("Check if it renders",()=>{
        const wrapper = shallow(<ProductView match={{params:{id:"1001"}}}/>)
        expect(wrapper).toBeTruthy()
    })

    it("Check if it has div tag with `notFoundDiv` id",()=>{
        const wrapper = shallow(<ProductView match={{params:{id:"1001"}}}/>)
        wrapper.setState({isLoggedin:true});
        expect(wrapper.find('#notFoundDiv').length).toBe(1)
    })
})


describe("CardView Component Validation",()=>{
    it("Check if it renders",()=>{
        const wrapper = shallow(<LoginComponent/>)
        expect(wrapper).toBeTruthy()
    })

    it("Check if it has 2 Input components",()=>{
        const wrapper = mount(<LoginComponent/>)
        expect(wrapper.find(Input).length).toBe(2)
    })

    it("Check if it has 2 FormControl components",()=>{
        const wrapper = mount(<LoginComponent/>)
        expect(wrapper.find(FormControl).length).toBe(2)
    })

})
