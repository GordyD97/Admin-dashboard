import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

import React from "react";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // columns will represent keys and properties on what we are using.
  const columns = [
    { field: "id", headerName: "ID" },
   
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1 , renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
        </Typography>
    ) },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  // stopped at 1:35:20
  // find a fix for the size of the data grid.
  // hard coded a width for the data grid since it didint work.
  return (
    <Box m="20px">
      <Header
        title="Invoices"
        subtitle="List of invoice ballances "
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            width: "850px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
        checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          
          
          //   components is depreicated cannot include tool settings.
          // stopped at 1:52:30
        />
      </Box>
    </Box>
  );
};

export default Invoices;
