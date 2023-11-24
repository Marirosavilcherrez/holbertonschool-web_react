/*BodySectionWithMarginBottom.test.js */
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  
    it('render correctly BodySection component and that the props', () => {
      //define the props
      const props = {
        title: 'Test title',
        children: <p>Test Children</p>
      }
      
      // Shallow render the BodySectionWithMarginBottom component with the test props
      const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);
      
      //Assert that there is one BodySection component rendered
      expect(wrapper.find(BodySection)).toHaveLength(1);

      //Assert that props are correctly passed to the BodySection component
      expect(wrapper.find(BodySection).props().title).toEqual(props.title);
      expect(wrapper.find(BodySection).props().children).toEqual(props.children);
    });
});
