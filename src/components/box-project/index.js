import React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { projectsDelete, projectsUpdate } from "../../services/project";
import { setProject } from "../../store/project";
import TaskItem from "../task-item";
import CreatTask from "../create-task";

export default function BoxProject({ project }) {
  const dispatch = useDispatch();

  const handleUpdateCard = (data) => {
    projectsUpdate(data)
      .then((response) => {
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
          <TaskItem project={project} />
          <CreatTask project={project} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleUpdateCard(project)}>
          Update
        </Button>
        <Button size="small" onClick={() => handleDeleteCard(project._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
