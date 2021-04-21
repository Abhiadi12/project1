import React from "react";
import Header from "./components/UI/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/myTheme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/UI/routeComponents/LandingPage";
// import UserList from "./components/learn/CustomTable/UserList";
import Footer from "./components/UI/Footer";
import CustomSoftware from "./components/UI/routeComponents/CustomSoftware";
import AppDevelopment from "./components/UI/routeComponents/AppDevelopment";
import WebsiteDevelopment from "./components/UI/routeComponents/WebsiteDevelopment";
import Revolution from "./components/UI/routeComponents/Revolution";
import AboutPage from "./components/UI/routeComponents/AboutPage";
import ContactUs from "./components/UI/routeComponents/ContactUs";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route
              exact
              path="/services"
              component={() => <div>service page</div>}
            />
            <Route exact path="/revolution" component={() => <Revolution />} />
            <Route exact path="/about" component={() => <AboutPage />} />
            <Route exact path="/contactUs" component={() => <ContactUs />} />
            <Route
              exact
              path="/web-app-development"
              component={() => <WebsiteDevelopment />}
            />
            <Route
              exact
              path="/mobile-app-development"
              component={() => <AppDevelopment />}
            />
            <Route
              exact
              path="/native-app-development"
              component={() => <CustomSoftware />}
            />
            <Route
              exact
              path="/estimate"
              component={() => <div>Free estimate</div>}
            />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
      {/* <UserList />  for pagination purpose*/}
    </div>
  );
}

export default App;
