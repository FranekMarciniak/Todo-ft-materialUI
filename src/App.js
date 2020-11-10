import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import Input from "./Input";
const App = () => {
  return (
    <TodoState>
      <Grid container direction="column" justify="center">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={3} md={4} />
          <Grid item xs={12} sm={6} md={4}>
            <Content />
            <Input />
          </Grid>
          <Grid item xs={false} sm={3} md={4} />
        </Grid>
      </Grid>
    </TodoState>
  );
};

export default App;
