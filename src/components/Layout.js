import React, { useState } from "react";
import Aside from "./Aside";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import DonationScreen from "../screens/DonationScreen";
import { FaBars } from "react-icons/fa";

function Layout({ setLocale }) {
  const collapsed = false;
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main className="container">
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomeScreen} />
          <Route path="/article" component={ArticleScreen} />
          <Route path="/donation" component={DonationScreen} />
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
