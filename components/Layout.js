import React from "react";
import Head from "next/head";
import { AppBar, Typography, Toolbar, Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Xocommerce</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography>xocommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All right reserved xocommerce</Typography>
      </footer>
    </div>
  );
}
