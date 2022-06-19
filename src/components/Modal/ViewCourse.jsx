import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../features/user/userSlice';

const ViewCourse = ({ setSentCourse, setValue }) => {
    const dispatch = useDispatch();
    const allCourses = useSelector(state => state?.user?.courses);
    const handleDeleteCourse = (id) => {
        dispatch(deleteCourse(id));
    }
    // console.log(allCourses);
    return (
        <Grid container>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead sx={{ backgroundColor: "#aaa" }}>
                            <TableRow>
                                <TableCell>Action</TableCell>
                                <TableCell align="right">Course Name</TableCell>
                                <TableCell align="right">Terminal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCourses?.map((course) => (
                                <TableRow
                                    key={allCourses?._id}
                                    hover
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {/* manage contact button */}
                                            <Tooltip title="Manage Contact">
                                                <Button
                                                    onClick={() => {
                                                        setValue(0);
                                                        setSentCourse(course);
                                                    }}
                                                    sx={{ marginRight: 0.5 }}
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    {/* <IoIosPaper /> */}
                                                    Edit
                                                </Button>
                                            </Tooltip>
                                            {/* show customer button */}
                                            <Tooltip title="Show Customers">
                                                <Button
                                                    // disabled={!contact?.iscompany}
                                                    variant="contained"
                                                    color="error"
                                                    size="small"
                                                    onClick={() => handleDeleteCourse(course?._id)}
                                                >
                                                    {/* <IoIosBusiness /> */}
                                                    Delete
                                                </Button>
                                            </Tooltip>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">{course?.course_name}</TableCell>
                                    <TableCell align="right">{course?.terminal_type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default ViewCourse