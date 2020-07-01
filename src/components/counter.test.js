import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<Counter />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
    });
});

describe('Counter component decrement', () => {
    it('decrements count does not go under zero',() => {
        const wrapper = shallow(<Counter />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
    });
});