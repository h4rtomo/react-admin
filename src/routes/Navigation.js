import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const tabs = [
  {
    route: "/home",
    icon: "home",
    label: "Home",
  },
  {
    route: "/article",
    icon: "search",
    label: "Article",
  },
  {
    route: "/donation",
    icon: "droplet",
    label: "Donation",
  },
];

const Navigation = (props) => {
  console.log(props);
  return (
    <div>
      {/* Top Navigator*/}
      {/* <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Brand
          </a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/article" className="nav-link">
                Article
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/donation" className="nav-link">
                Donation
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav> */}

      {/* Bottom Tab Navigator*/}
      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FeatherIcon size="24" icon={tab.icon} />
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
