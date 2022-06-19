import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
                    {isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                                Shoppee
                            </Typography>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            {/* <Tabs
                                sx={{ marginLeft: "auto" }}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label="Products" />
                                
                                <Tab label="Services" />
                                <Tab label="About Us" />
                                <Tab label="Contact" />
                            </Tabs> */}
                            {/* navigation items */}
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="page1">Page 1</Link></li>
                                <li><Link to="page2">Page 2</Link></li>
                                <li><Link to="page3">Page 3</Link></li>
                            </ul>
                            <Button sx={{ marginLeft: "auto" }} variant="contained">
                                Login
                            </Button>
                            <Button sx={{ marginLeft: "10px" }} variant="contained">
                                SignUp
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;