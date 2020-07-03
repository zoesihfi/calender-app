import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    it('finds 1 h3 in Footer', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3');
        expect(text).toHaveLength(1);
    });
});

describe('Footer component', () => {
    it('checks text 1 in Footer', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3').text();
        expect(text).toEqual('Did You Reach Your Limit?');
    });
});

