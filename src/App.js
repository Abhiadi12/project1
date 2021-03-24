import React from "react";
import Header from "./components/UI/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/myTheme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/UI/routeComponents/LandingPage";
// import UserList from "./components/learn/CustomTable/UserList";
import Footer from "./components/UI/Footer";
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
            <Route
              exact
              path="/revolution"
              component={() => <div>Revolution page</div>}
            />
            <Route
              exact
              path="/about"
              component={() => <div>why with us</div>}
            />
            <Route
              exact
              path="/contactUs"
              component={() => <div>contact us</div>}
            />
            <Route
              exact
              path="/web-app-development"
              component={() => <div>web development</div>}
            />
            <Route
              exact
              path="/mobile-app-development"
              component={() => <div>app development</div>}
            />
            <Route
              exact
              path="/native-app-development"
              component={() => <div>native app development</div>}
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
