import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import DummyText from "./DummyText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MyButton from "./MyButton";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import withActiveRoute from "./hoc/withActiveRoute";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5em",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      width: "400px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
    height: "40px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dropDownMenu: {
    marginTop: "2.5em",
  },
  menuCard: {
    ...theme.typography.tab,
    backgroundColor: "#2196f3",
    color: "white",
  },
  menuList: {
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  selectedMenu: {
    opacity: 1,
  },
  menuIconButton: {
    color: "white",
    marginLeft: "auto",
  },
  drawerContainer: {
    color: "white",
    ...theme.typography.tab,
    backgroundColor: "#2196f3",
  },
  drawerListItem: {
    padding: ".5em",
    opacity: 0.6,
    textAlign: "center",
    "&:hover": {
      opacity: 1,
    },
  },
  selectedDrawerItem: {
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header({
  value,
  setValue,
  selectedMenuIndex,
  setSelectedMenuIndex,
  ...others
}) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false); // for drawer sake
  const menuOptions = [
    "Services:/services",
    "Web Development:/web-app-development",
    "Mobile Develoment:/mobile-app-development",
    "Native App Development:/native-app-development",
  ];
  const routesOption = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "The Revolution", path: "/revolution" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contactUs" },
  ];
  // const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(0);
  const theme = useTheme();
  const matchesForTab = useMediaQuery(theme.breakpoints.down("md"));

  const drawerComponent = () => (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawerContainer }}
      >
        <div className={classes.toolBarMargin} />
        <List disablePadding>
          {routesOption.map((routeOption, index) =>
            listItemRenderer({ ...routeOption, idx: index })
          )}
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              component={Link}
              to="/estimate"
              onClick={() => {
                console.log("clicked");
                setValue(0);
              }}
            >
              Estimate
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.menuIconButton}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
    </>
  );
  const tabsComponent = () => (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        className={classes.tabContainer}
        // indicatorColor="primary"
      >
        {/* <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services"
          onMouseOver={handleClick}
          aria-controls="simple-menu"
          aria-haspopup="true"
        />
        <Tab
          className={classes.tab}
          label="The Revolution"
          component={Link}
          to="/revolution"
        />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contactUs"
        /> */}
        {routesOption.map((routeOption, index) =>
          tabRenderer({ ...routeOption, idx: index })
        )}
      </Tabs>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/estimate"
        onClick={() => {
          console.log("clicked");
          setValue(2);
        }}
      >
        Estimate
      </Button>

      {/* menu for services */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        className={classes.dropDownMenu}
        classes={{ paper: classes.menuCard }}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((value, index) => {
          const [text, path] = value.split(":");
          return menuListRenderer(path, text, index);
        })}
      </Menu>
    </>
  );
  const tabRenderer = ({ label, path, idx }) =>
    idx === 1 ? (
      <Tab
        key={idx}
        className={classes.tab}
        component={Link}
        label={label}
        to={path}
        onMouseOver={handleClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      />
    ) : (
      <Tab
        key={idx}
        className={classes.tab}
        component={Link}
        label={label}
        to={path}
      />
    );

  const listItemRenderer = ({ label, path, idx }) => (
    <ListItem
      button
      key={idx}
      disableRipple
      component={Link}
      to={path}
      onClick={() => {
        setOpenDrawer(false);
        setValue(idx);
      }}
      selected={value === idx}
    >
      <ListItemText
        className={clsx(
          classes.drawerListItem,
          value === idx && classes.selectedDrawerItem
        )}
        primary={label}
      />
    </ListItem>
  );
  const menuListRenderer = (path, children, selectedItemIndex) => (
    <MenuItem
      onClick={() => {
        handleMenuItemClick(selectedItemIndex);
        setValue(1);
      }}
      component={Link}
      to={path}
      classes={{ root: classes.menuList, selected: classes.selectedMenu }}
      key={children}
      disabled={selectedItemIndex === 0}
      selected={selectedMenuIndex === selectedItemIndex}
    >
      {children}
    </MenuItem>
  );
  const handleTabChange = (event, value) => {
    setValue(value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    // setSelectedMenuIndex(index);
  };

  const handleMenuItemClick = (index) => {
    // console.log(index);
    setSelectedMenuIndex(index);
    setAnchorEl(null);
    setOpen(false);
  };

  let location = useLocation();
  React.useEffect(() => {
    switch (location.pathname) {
      case "/web-app-development":
        setValue(1);
        setSelectedMenuIndex(1);
        break;
      case "/mobile-app-development":
        setValue(1);
        setSelectedMenuIndex(1);
        break;
      case "/native-app-development":
        setValue(1);
        setSelectedMenuIndex(1);
        break;
      case "/services":
        setValue(1);
        break;
      case "/revolution":
        setValue(2);
        setSelectedMenuIndex(0);
        break;
      case "/about":
        setValue(3);
        setSelectedMenuIndex(0);
        break;
      case "/contactUs":
        setValue(4);
        setSelectedMenuIndex(0);
        break;
      case "/estimate":
        setValue(5);
        setSelectedMenuIndex(0);
      default:
        setValue(0);
        setSelectedMenuIndex(0);
    }
  }, [value]);

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <HideOnScroll {...others}>
        <AppBar color="secondary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button disableRipple className={classes.logoContainer}>
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {matchesForTab ? drawerComponent() : tabsComponent()}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* {renderMobileMenu}
      {renderMenu} */}
      <Toolbar className={classes.toolBarMargin} />
      {/* <MyButton /> */}
      {/* <DummyText /> */}
    </div>
  );
}

export default withActiveRoute(Header);
