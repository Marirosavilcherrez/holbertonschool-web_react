import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = (isHeader, textFirstCell, TextSecondCell) => {
    if(isHeader === true){
        if(TextSecondCell == null) {
            return <th colSpan="2" >{textFirstCell}</th>
        } return (
        <>
        <th>{textFirstCell}</th>
        <th>{TextSecondCell}</th></>
        )
    } return (
        <>
        <td>{textFirstCell}</td>
        <td>{TextSecondCell}</td>
        </>
    )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  TextSecondCell: PropTypes.string
}

CourseListRow.defaultProps = {
  isHeader: false,
  TextSecondCell: null,
}

export default CourseListRow;