import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourse } from '../features/user/userSlice';
import { Link } from 'react-router-dom'

const CourseDetails = ({ email }) => {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const allCourses = useSelector(state => state?.user?.courses);
    const selectedCourse = allCourses.filter(course => course._id === courseId);
    console.log(selectedCourse);
    useEffect(() => {
        dispatch(getCourse());
    }, [])
    return (
        <div>
            <Paper elevation={24} sx={{ padding: '2rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom component="div">
                                {selectedCourse[0]?.course_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                {selectedCourse[0]?.course_description}
                            </Typography>
                        </Grid>
                        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                            {
                                selectedCourse[0]?.steps?.map((course) => (
                                    <Grid item xs={4} md={4} lg={3}>
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    {course?.title}
                                                </Typography>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    {course?.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                ))
                            }
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default CourseDetails