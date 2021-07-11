// import React, { useEffect } from "react";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// import ArticleScreen from "./screens/ArticleScreen";
// import DonationScreen from "./screens/DonationScreen";
// import "./App.scss";
// //import Navigation from "./routes/Navigation";
// import Header from "./components/Header";

// function App() {
//   useEffect(() => {
//     console.log("[App] onRegister: ");

//     return () => {
//       console.log("[App] unRegister");
//     };
//   }, []);
//   return (
//     <div>
//       <BrowserRouter>
//         {/* <Navigation /> */}
//         <Header />
//         <main>
//           <Switch>
//             <Route exact path="/">
//               <Redirect to="/home" />
//             </Route>
//             <Route path="/home" component={HomeScreen} />
//             <Route path="/article" component={ArticleScreen} />
//             <Route path="/donation" component={DonationScreen} />
//           </Switch>
//         </main>
//       </BrowserRouter>
//     </div>
//   );
// }

import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import "./App.scss";
import lang from "./lang";

function App() {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider locale={locale} messages={lang[locale]}>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Layout setLocale={setLocale} />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
