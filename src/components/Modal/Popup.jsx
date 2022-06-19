import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, DialogContentText, Grid, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@mui/material/styles";
import AddCourse from './AddCourse';
import ViewCourse from './ViewCourse';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

// for creating a tab layout functions start here
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const Popup = ({ open, setOpen, handleClickOpen, handleClose }) => {
    const theme = useTheme();
    // initial state for the tab value
    const [value, setValue] = useState(0);
    const [sentCourse, setSentCourse] = useState(null);

    // this function changes the tab by setting new value to the state
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div>
            <Dialog
                fullWidth
                maxWidth="xl"
                open={open}
                onClose={handleClose}
            >
                {/* <DialogTitle>{selected.name}</DialogTitle> */}
                <DialogContent>
                    <Grid container>
                        <Box sx={{ width: "100%" }}>
                            {/* box that contains the tab headers*/}
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                    backgroundColor: "#aaa",
                                    color: "#000",
                                }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                >
                                    <Tab label="Add a Course" {...a11yProps(0)} />
                                    <Tab label="View All Course" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <Grid item></Grid>

                            {/* swipeable view adds transition effect while changing the tabs */}
                            <SwipeableViews
                                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0}>
                                    <AddCourse sentCourse={sentCourse} setSentCourse={setSentCourse} />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <ViewCourse setSentCourse={setSentCourse} setValue={setValue} />
                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Popup;