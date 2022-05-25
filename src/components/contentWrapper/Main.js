import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Main';
// import EditMission from '../missions/EditMission';
// import AddMission from '../missions/AddMission';
// import MissionsList from '../missions/MissionsList';
// import Profile from '../profile/Main';
const ContentWrapper = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default ContentWrapper;
