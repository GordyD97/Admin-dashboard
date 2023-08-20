import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import  LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import  SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import React from 'react'
import { L } from "@fullcalendar/list/internal-common";

const Team = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);

const columns = [
    { field : "id", headerName: "ID" }, 
{ field : "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"}
{ field : "age", headerName: "Age", type: "Number", headerAlign: "left", cellClassName: "name-column--cell"}
];

return (
    <Box>
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Box>
            <DataGrid
            rows={mockDataTeam}
            columns={columns}
            />
        </Box>
    </Box>
)



  return (
    <div>index</div>
  )
}

export default Team;