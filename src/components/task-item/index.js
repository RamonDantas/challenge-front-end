import * as React from "react";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Moment from "react-moment";
import { tasksDelete } from "../../services/task";
import { setProject } from "../../store/project";

export default function TaskItem({ project }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState([0]);
  Moment.globalFormat = "D MMM YYYY";

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDeleteTask = (data) => {
    tasksDelete(data)
      .then((response) => {
        dispatch(setProject(response.data));
      })
      .catch((e) => alert(e));
  };

  const handleDateFormat = (valueDate) => {
    return <Moment local>{valueDate}</Moment>;
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {project.tasks.map((task) => {
        const labelId = `checkbox-list-label-${task._id}`;

        return (
          <ListItem
            key={task._id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteForeverIcon
                  onClick={() => {
                    handleDeleteTask(task._id);
                  }}
                />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(task._id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(task._id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={task.title}
                secondary={
                  <React.Fragment>
                    <Moment local>{task.finishedDate}</Moment>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
