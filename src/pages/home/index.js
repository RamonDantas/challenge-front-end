import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/nav-bar";
import CreatProject from "../../components/creat-project";
import BoxProject from "../../components/box-project";
import { projectsList } from "../../services/project";
import { setProject } from "../../store/project";

const Home = () => {
  const dispatch = useDispatch();

  const stateProject = useSelector((state) => state.project);

  useEffect(() => {
    projectsList()
      .then((response) => {
        dispatch(setProject(response.data));
      })
      .catch((e) => alert(e));
  }, []);

  return (
    <div>
      <NavBar />
      <Box sx={{ flexGrow: 1 }} m={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CreatProject />
          </Grid>
          {stateProject.project.map((project) => {
            return (
              <Grid item xs={4}>
                <BoxProject project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
