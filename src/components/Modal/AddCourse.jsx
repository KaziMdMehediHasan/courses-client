import { Button, Grid, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postCourse, updateCourse } from '../../features/user/userSlice'

const AddCourse = ({ sentCourse, setSentCourse }) => {
    // initial states start
    const initialState = {
        course_name: "",
        course_description: "",
        terminal_type: ""
    }
    const initialStepState = {
        step_number: 0,
        title: "",
        content: "",
    }
    // initial states start
    const [courseData, setCourseData] = useState(initialState);
    const [step1, setStep1] = useState(initialStepState);
    const [step2, setStep2] = useState(initialStepState);
    const [step3, setStep3] = useState(initialStepState);
    let stepArray = [step1, step2, step3];
    // console.log(sentCourse)
    const dispatch = useDispatch();

    const handleCaptureData = () => {
        let data = { ...courseData, steps: stepArray }
        console.log(data);
        dispatch(postCourse(data));
    }
    const handleModifyData = (id) => {
        let data = { ...courseData, steps: stepArray };
        delete data._id;
        console.log(id, data);
        dispatch(updateCourse({ id, data }));
    }

    useEffect(() => {
        if (sentCourse) {
            setCourseData(sentCourse);
            setStep1(sentCourse?.steps[0])
            setStep2(sentCourse?.steps[1])
            setStep3(sentCourse?.steps[2])
            console.log(sentCourse);
        }
    }, [])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper elevation={3}
                    sx={{ padding: 2, display: "flex", flexWrap: "wrap" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Course Name"
                                variant="outlined"
                                size="small"
                                value={courseData?.course_name}
                                onChange={(e) =>
                                    setCourseData({
                                        ...courseData,
                                        course_name: e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Terminal Type"
                                variant="outlined"
                                size="small"
                                value={courseData.terminal_type}
                                onChange={(e) =>
                                    setCourseData({
                                        ...courseData,
                                        terminal_type: e.target.value,
                                    })
                                    // setCurrentCourse({
                                    //     ...currentCourse,
                                    //     terminal_type: e.target.value,
                                    // })
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Course Description"
                                variant="outlined"
                                size="small"
                                multiline
                                rows={3}
                                value={courseData.course_description}
                                onChange={(e) =>
                                    setCourseData({
                                        ...courseData,
                                        course_description: e.target.value,
                                    })
                                    // setCurrentCourse({
                                    //     ...currentCourse,
                                    //     course_description: e.target.value,
                                    // })
                                }
                                fullWidth
                            />
                        </Grid>
                        {/* step 1 */}
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Grid item xs={1}>
                                <h3>Step 1</h3>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Step Number"
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    value={step1?.step_number}
                                    onChange={(e) =>
                                        setStep1({
                                            ...step1,
                                            step_number: e.target.value,
                                        })
                                        // setCurrentCourse({
                                        //     ...currentCourse,
                                        //     steps[0]["step_number"]: e.target.value
                                        // })
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    id="outlined-basic"
                                    label="Title"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    value={step1.title}
                                    onChange={(e) =>
                                        setStep1({
                                            ...step1,
                                            title: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={6} md={5}>
                                {" "}
                                <TextField
                                    id="outlined-basic"
                                    label="Content"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    value={step1.content}
                                    onChange={(e) =>
                                        setStep1({
                                            ...step1,
                                            content: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                        </Grid>
                        {/* step2 */}
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Grid item xs={1}>
                                <h3>Step 2</h3>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Step Number"
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    value={step2.step_number}
                                    onChange={(e) =>
                                        setStep2({
                                            ...step2,
                                            step_number: e.target.value,
                                        })
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    id="outlined-basic"
                                    label="Title"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    value={step2.title}
                                    onChange={(e) =>
                                        setStep2({
                                            ...step2,
                                            title: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={6} md={5}>
                                {" "}
                                <TextField
                                    id="outlined-basic"
                                    label="Content"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    value={step2.content}
                                    onChange={(e) =>
                                        setStep2({
                                            ...step2,
                                            content: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                        </Grid>
                        {/* step3 */}
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Grid item xs={1}>
                                <h3>Step 3</h3>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Step Number"
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    value={step3?.step_number}
                                    onChange={(e) =>
                                        setStep3({
                                            ...step3,
                                            step_number: e.target.value,
                                        })
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    id="outlined-basic"
                                    label="Title"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    value={step3.title}
                                    onChange={(e) =>
                                        setStep3({
                                            ...step3,
                                            title: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={6} md={5}>
                                {" "}
                                <TextField
                                    id="outlined-basic"
                                    label="Content"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    value={step3.content}
                                    onChange={(e) =>
                                        setStep3({
                                            ...step3,
                                            content: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={6} md={2}>
                {
                    sentCourse ?
                        <Button
                            onClick={() => {
                                handleModifyData(sentCourse?._id);
                                setCourseData(initialState);
                                setStep1(initialStepState);
                                setStep2(initialStepState);
                                setStep3(initialStepState);
                                setSentCourse(null);
                            }}
                            variant="contained"
                            sx={{ marginRight: 1 }}
                        >
                            Modify Course
                        </Button> :
                        <Button
                            onClick={() => {
                                handleCaptureData();
                                setCourseData(initialState);
                                setStep1(initialStepState);
                                setStep2(initialStepState);
                                setStep3(initialStepState);
                            }}
                            variant="contained"
                            sx={{ marginRight: 1 }}
                        >
                            Add Course
                        </Button>
                }

            </Grid>
        </Grid>
    )
}

export default AddCourse