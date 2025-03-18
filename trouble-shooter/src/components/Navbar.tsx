import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../img/logo.svg";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a href="/">
                    <div className="logo">
                        <img src={logo} width="60" height="60" alt="" loading="lazy" />
                    </div>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="">
                        <div className="home">
                            <li><NavLink to="/home">HOME </NavLink></li></div>
                        <div className="zeta-menu">
                            <li><a href="#"> Shooting </a>
                                <div className="dropdown-content">
                                    <li><NavLink to="/rest-api"> Rest </NavLink></li>
                                    <li><NavLink to="/grpc-api"> gRPC </NavLink></li>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

