//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import FeatherIcon from "feather-icons-react";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

const Header = (props) => {
  const location = useLocation().pathname;
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FeatherIcon icon="arrow-right-circle" size={30} />
              ) : (
                <FeatherIcon icon="arrow-left-circle" size={30} />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={location.match("/home") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="home"
                    size={20}
                    style={{
                      color:
                        location.match("/home") === null ? "black" : "white",
                    }}
                  />
                }
              >
                <Link to="/" />
                Home
              </MenuItem>
              <MenuItem
                active={location.match("/article") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="heart"
                    size={20}
                    style={{
                      color:
                        location.match("/article") === null ? "black" : "white",
                    }}
                  />
                }
              >
                Article
                <Link to="/article" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
              <MenuItem
                active={location.match("/donation") === null ? false : true}
                icon={
                  <FeatherIcon
                    icon="droplet"
                    size={20}
                    style={{
                      color:
                        location.match("/donation") === null
                          ? "black"
                          : "white",
                    }}
                  />
                }
              >
                Donation
                <Link to="/donation" />
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FeatherIcon icon="log-out" size={20} />}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
