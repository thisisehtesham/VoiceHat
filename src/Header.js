import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./css/header.css";
import Headeroptions from "./Headeroptions.js";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
    const user = useSelector(selectUser);

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src={require("./Images/Logo.png")} alt="logo" />
                </div>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <Headeroptions Icon={HomeIcon} title="Home" />
                <Headeroptions Icon={PeopleIcon} title="My Netwok" />
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs" />
                <Headeroptions Icon={MessageIcon} title="Messaging" />
                <Headeroptions Icon={NotificationsIcon} title="Notifications" />
                <Headeroptions avatar={Avatar} title={user.displayName} />
            </div>
        </div>
    );
}

export default Header;
