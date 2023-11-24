import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

// Define the BodySectionWithMarginBottom component
const BodySectionWithMarginBottom = (props) => {
    // Destructure the 'children' prop from props
    const { children } = props;

    return (
        // Render a div with the specified class
        <div className="bodySectionWithMargin">
            {/* Use the spread operator on the BodySection component */}
            <BodySection {...props}>
                {/* Render the children within the BodySection */}
                {children}
            </BodySection>
        </div>
    );
}

// Define propTypes for BodySectionWithMarginBottom
BodySectionWithMarginBottom.propTypes = {
    // Ensure 'children' is provided and is of type node
    children: PropTypes.node.isRequired,
    // Add any other prop that BodySectionWithMarginBottom may receive
};

export default BodySectionWithMarginBottom;
