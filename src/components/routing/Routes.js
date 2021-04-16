import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../layout/login/login.component";
import Alert from "../layout/Alert";
// import Dashboard from "../dashboard/Dashboard";
import Dashboard from "../dash/dashboard.component";
import ProfileForm from "../profile-forms/ProfileForm";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/404/404.component";
import PrivateRoute from "../routing/PrivateRoute";
import Projects from "../layout/cards/projects.component";
import ProjectDescription from "../project-description/project-description.component";
import Content from "../hero/content.component";
import ProfileInformation from "../dash/profile/profile-information.component";
import ProjectsInformation from "../dash/projects/projects-information.component";

const Routes = (props) => {
  return (
    <section>
      <Alert />
      <Switch className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Content} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard/profile" component={ProfileInformation} />
        <PrivateRoute exact path="/dashboard/projects" component={ProjectsInformation} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute
          exact
          path="/create-project"
          component={ProjectDescription}
        />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
