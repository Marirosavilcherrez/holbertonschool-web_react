import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define the BodySectionWithMarginBottom component
const BodySectionWithMarginBottom = (props) => {
    // Destructure the 'children' prop from props
    const { children } = props;
    
    return (
        // Render a div with the specified class
        <div className={css(styles.BodySectionStyle)} >
            {/* Use the spread operator on the BodySection component */}
            <BodySection {...props}>
                {/* Render the children within the BodySection */}
                {children}
            </BodySection>
        </div>
    );
}

const styles = StyleSheet.create({
  BodySectionStyle: {
    marginbottom: '40px',
  }
})

// Define propTypes for BodySectionWithMarginBottom
BodySectionWithMarginBottom.propTypes = {
    // Ensure 'children' is provided and is of type node
    children: PropTypes.node.isRequired,
    // Add any other prop that BodySectionWithMarginBottom may receive
};

export default BodySectionWithMarginBottom;
