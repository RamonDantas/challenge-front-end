import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { setProject } from "../../store/project";
import { tasksCreate } from "../../services/task";

export default function CreatTask({ project }) {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = useState(new Date());

  const handleChange = (newValue) => {
    setValueDate(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      title: form.get("title"),
      finishedDate: valueDate,
      project: project._id,
    };
    tasksCreate(data)
      .then((response) => {
        dispatch(setProject(response.data));
      })
      .catch((e) => alert(e));
  };

  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Task name"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="End date"
              inputFormat="MM/DD/yyyy"
              value={valueDate}
              onChange={handleChange}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </Box>
      </Typography>
    </CardContent>
  );
}
