import React from "react";
import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import { DownloadOutlinedIcon } from "@mui/icons-material/DownloadOutlined";
import { Emailicon } from "@mui/icons-material/Email";
import { PointOfSaleIcon } from "@mui/icons-material/PointOfSale";
import { PersonAddIcon } from "@mui/icons-material/PersonAdd";
import { TrafficIcon } from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="welcome to your dashboard" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
          {/* grid and charts below  */}
          

    </Box>
  );
};

export default Dashboard;
