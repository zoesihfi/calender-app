import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<Counter />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('h2');
        expect(text).toHaveLength(1);   
    });
});

describe('Counter component decrement', () => {
    it('decrements count does not go under zero',() => {
        const wrapper = shallow(<Counter />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
    });
});

describe('Counter component', () => {
    it('makes sure result message (decrement) shows', () => {
        const wrapper = shallow(<Counter />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        decrementBtn.simulate('click');
        decrementBtn.simulate('click');
        
        const text = wrapper.find('h3').text();
        expect(text).toEqual("Limit Reached");   
    });
});

describe('Counter component', () => {
    it('makes sure result message (increment) shows', () => {
        const wrapper = shallow(<Counter />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        incrementBtn.simulate('click');
        incrementBtn.simulate('click');
        
        const text = wrapper.find('h3').text();
        expect(text).toEqual("Limit Reached"); 
    });
});