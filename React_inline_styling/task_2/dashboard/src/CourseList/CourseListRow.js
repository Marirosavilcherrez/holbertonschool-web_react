import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'

const CourseListRow = (isHeader, textFirstCell, TextSecondCell) => {

  const backCol1 = { backgroundColor: '#f5f5f5ab' };
  const backCol2 = { backgroundColor: '#deb5b545' };
  let backColor = undefined;
  let content = undefined;

    if(isHeader === true){
      backColor = backCol2;

        if(TextSecondCell == null) {
            content = <th colSpan="2" >{textFirstCell}</th>
        } else {
          content = (
          <>
            <th className = {css(styles.thStyle)}>{textFirstCell}</th>
            <th className= {css(styles.thStyle)}>{TextSecondCell}</th>
          </>
        );
      };
    } 
    if(isHeader == false) {
      backColor = backCol1;

      content = (
        <>
        <td>{textFirstCell}</td>
        <td>{TextSecondCell}</td>
        </>
      );
    }
    return <tr style={backColor}>{content}</tr>
};

const styles = StyleSheet.create({
    thStyle: {
      textAlign: 'left',
      borderTop: '1px solid gray',
      borderBottom: '1px solid gray',
    },
  });

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