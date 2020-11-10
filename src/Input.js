import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { TodoContext } from "./context/todoContext/todoState";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Input(props) {
  const classes = useStyles();
  const [note, setNote] = useState({
    text: "",
    crossed: false,
  });
  const todoContext = useContext(TodoContext);
  const { addNote, todos } = todoContext;
  const onChange = (e) =>
    setNote({
      text: e.target.value,
    });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={async (e) => {
        e.preventDefault();
        if (note.text !== "") {
          await addNote(note.text);
          setNote({
            text: "",
          });
        }
      }}
    >
      <InputBase
        className={classes.input}
        placeholder="Input your TODO"
        inputProps={{ "aria-label": "search google maps" }}
        value={note.text}
        onChange={onChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        disabled={note.text === "" ? true : false}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
}
