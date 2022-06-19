import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCourse, getUsers } from '../features/user/userSlice';
import Popup from './Modal/Popup';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const Courses = ({ email }) => {
    const dispatch = useDispatch();
    const allCourses = useSelector(state => state?.user?.courses);
    // popup states starts
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // console.log(email);
    // pop up states ends
    useEffect(() => {
        dispatch(getCourse());
        // console.log(allCourses);
    }, [allCourses]);

    return (
        <Grid container spacing={2}>
            {/* Button for Managing All Courses */}
            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                <Button variant="contained" onClick={handleClickOpen}>Manage Courses</Button>
            </Grid>
            {/* All courses shown*/}
            <Grid item xs={12}>
                <Grid container spacing={2} padding={3}>
                    {
                        allCourses?.map((course) => (
                            <Grid item xs={4} md={4} lg={3}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {course?.course_name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {course?.course_description?.slice(0, 30)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"><Link to={`/course/${course?._id}`}> Learn More</Link></Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))
                    }

                </Grid>
                {/* All courses shown*/}
            </Grid>
            {/* popup component*/}
            <Grid item xs={12} md={12}>
                <div>
                    <Popup open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose} />
                </div>
            </Grid>
        </Grid>

    )
}

export default Courses