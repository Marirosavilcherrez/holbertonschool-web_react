import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({listCourses}) => {
    if(listCourses.lenght === 0) {
        return(
            <table id = "CourseList">
                <thead>
                    <CourseListRow textFirstCell="No course available yet" isHeader="{true}"></CourseListRow>
                </thead>
            </table>
        )
    }
    return (
        <table className = {css(styles.courseListStyle)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader="{true}"></CourseListRow>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader="true"></CourseListRow>
            </thead>
            <tbody>
                {listCourses.map(course => (
                <CourseListRow 
                    key={course.id}
                    textFirstCell={course.name}
                    textSecondCell={course.credit.toString()}
                    isHeader={false}
                ></CourseListRow>
                ))}
            </tbody>
        </table>
    )
}

const styles = StyleSheet.create({
    courseListStyle: {
      width: '95%',
      margin: 'auto',
      border: '1px solid gray',
      borderCollapse: 'collapse',
    },
  });

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)),
}

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;