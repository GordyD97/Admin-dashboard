import { Box } from "@mui/material";
import Header from "../../components/Header";
import React from "react";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    // hard coded width again to 850
    <Box m="20px" width="850px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
