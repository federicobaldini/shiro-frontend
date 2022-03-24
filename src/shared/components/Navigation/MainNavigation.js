import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../ui/Backdrop";
import SearchBar from "../searchbar/SearchBar";
import "./MainNavigation.css";

const products = [
  { id: 1, name: "Yellow chair", type: "chair" },
  { id: 2, name: "Green chair", type: "chair" },
  { id: 3, name: "White table", type: "table" },
];

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="main-navigation__header-info">
          <div className="main-navigation__logo">白</div>
          <h1 className="main-navigation__title">
            <Link to="/">SHIRO</Link>
          </h1>
        </div>
        <SearchBar
          className="main-navigation__searchbar"
          products={products}
          initialInputText={""}
        />
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
