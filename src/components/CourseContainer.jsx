import React from 'react'
import Courses from './Courses'
import Header from './Navbar/Header'

const CourseContainer = ({ email }) => {
    return (
        <Courses email={email} />
    )
}

export default CourseContainer