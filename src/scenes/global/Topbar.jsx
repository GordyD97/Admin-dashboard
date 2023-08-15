import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlined from "@mui/icons-material/DarkModeOutlined";
import DarkModeOutlined from "@mui/icons-material/LightModeOutlined";
import NotificationAddOutlined from "@mui/icons-material/NotificationAddOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Box
        displayt="flex"
        backgroundColor={colors.primary[400]}
        borderRadius={"3px"}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ P: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined></DarkModeOutlined>
          ) : (
            <LightModeOutlined></LightModeOutlined>
          )}
        </IconButton>
        <IconButton>
          <NotificationAddOutlined></NotificationAddOutlined>
        </IconButton>
        <IconButton>
          <SettingsOutlined></SettingsOutlined>
        </IconButton>
        <IconButton>
          <PersonOutlined></PersonOutlined>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
