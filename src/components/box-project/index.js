import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { projectsDelete } from "../../services/project";
import { setProject } from "../../store/project";
import TaskItem from "../task-item";
import CreatTask from "../create-task";
import { tasksUpdate } from "../../services/task";

export default function BoxProject({ project }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);

  const handleUpdateCard = (value) => {
    const data = {
      taskList: value,
    };
    tasksUpdate(data)
      .then((response) => {
        setChecked([]);
        dispatch(setProject(response.data));
      })
      .catch((e) => alert(e));
  };

  const handleDeleteCard = (data) => {
    projectsDelete(data)
      .then((response) => {
        dispatch(setProject(response.data));
      })
      .catch((e) => alert(e));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>To Do</h2>
          <TaskItem
            project={project}
            type={false}
            checked={checked}
            setChecked={setChecked}
          />
          <h2>Done</h2>
          <TaskItem
            project={project}
            type={true}
            checked={checked}
            setChecked={setChecked}
          />
          <CreatTask project={project} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleUpdateCard(checked)}>
          Update
        </Button>
        <Button size="small" onClick={() => handleDeleteCard(project._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
