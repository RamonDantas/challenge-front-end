import React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { projectsCreate } from "../../services/project";
import { setProject } from "../../store/project";

export default function CreatProject() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      title: form.get("title"),
      tasks: [],
    };
    projectsCreate(data)
      .then((response) => {
        dispatch(setProject(response.data));
      })
      .catch((e) => alert(e));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Create a new project
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Project name"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Project
            </Button>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
