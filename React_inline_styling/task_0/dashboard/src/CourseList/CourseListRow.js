import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = (isHeader, textFirstCell, TextSecondCell) => {
    const RowStyle = {
      background: '#f5f5f5ab'
    }

    const isHeaderStyle = {
       background: isHeader.background || '#deb5b545'
    }

    if(isHeader === true){
        if(TextSecondCell == null) {
            return <th style = {isHeaderStyle} colSpan="2" >{textFirstCell}</th>
        } return (
        <>
        <th style = {isHeaderStyle}>{textFirstCell}</th>
        <th style = {isHeaderStyle} >{TextSecondCell}</th></>
        )
    } return (
        <>
        <td style = {RowStyle}>{textFirstCell}</td>
        <td style = {RowStyle}>{TextSecondCell}</td>
        </>
    )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  TextSecondCell: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

CourseListRow.defaultProps = {
  isHeader: false,
  TextSecondCell: null,
}

export default CourseListRow;