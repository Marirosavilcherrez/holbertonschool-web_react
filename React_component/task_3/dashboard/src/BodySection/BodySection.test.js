/*BodySection.test.js */
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  
    it('render correctly the children and one h2', () => {
      //define the test title and children
      const testTitle = 'test title';
      const testChildren = <p>test children node</p>;
      
      // Shallow render the BodySection component with the test title and children
      const wrapper = shallow(<BodySection title={testTitle}>{testChildren}</BodySection>);
      
      //Assert that there is one h2 element with the correct text
      expect(wrapper.find('h2')).toHaveText(testTitle);
      expect(wrapper.find('p')).toHavetext('test children node');
    });
});
