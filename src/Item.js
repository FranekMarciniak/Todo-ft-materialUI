import React, { useContext, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
//eslint-disable-next-line
import { Typography, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TodoContext } from "./context/todoContext/todoState";
const useStyles = makeStyles((theme) => ({
  crossed: {
    textDecoration: "line-through",
    color: theme.palette.text.secondary,
  },
}));
function Item(props) {
  const classes = useStyles();
  const { deleteNote, editNote, setCrossed } = useContext(TodoContext);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.todo.text);
  if (editing === false) {
    return (
      <ListItem key={1} role={undefined} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={1}
            disableRipple
            onChange={() => setCrossed(props.todo.id)}
            checked={props.todo.crossed === true ? true : false}
          />
        </ListItemIcon>
        <Typography className={props.todo.crossed ? classes.crossed : ""}>
          {props.todo.text}
        </Typography>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => setEditing(true)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteNote(props.todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  } else {
    const submit = (e) => {
      e.preventDefault();
      editNote(editValue, props.todo.id);
      setEditing(false);
    };
    return (
      <ListItem
        component="form"
        key={1}
        role={undefined}
        dense
        button
        onSubmit={submit}
      >
        <TextField
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          style={{ width: "100%" }}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={submit}>
            <DoneIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default Item;
