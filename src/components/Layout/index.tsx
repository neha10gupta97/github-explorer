import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<IProps> = props => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default Layout;
