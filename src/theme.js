// setting all color and typogorphy for light and dark mode 

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
// if mode is dark the object below will be passed
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#d0d1d5",
                200: "#a0a4aa",
                300: "#717680",
                400: "#414955",
                500: "#121b2b",
                600: "#0e1622",
                700: "#0b101a",
                800: "#070b11",
                900: "#040509"
            },
            greenAccent: {
                100: "#dbf4fb",
                200: "#b7eaf7",
                300: "#94dff4",
                400: "#70d5f0",
                500: "#4ccaec",
                600: "#3da2bd",
                700: "#2e798e",
                800: "#1e515e",
                900: "#0f282f"
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f"
            },
            blueAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
            },
        }

        : {
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#070b11",
                300: "#0b101a",
                400: "#f2f0f0",
                500: "#121b2b",
                600: "#414955",
                700: "#717680",
                800: "#a0a4aa",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#0f282f",
                200: "#1e515e",
                300: "#2e798e",
                400: "#3da2bd",
                500: "#4ccaec",
                600: "#70d5f0",
                700: "#94dff4",
                800: "#b7eaf7",
                900: "#dbf4fb",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
         
        }),
});

// mui themes

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                netural: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.primary[500],
                }
                // stopped at @26:48 in video. 

            } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    netural: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    }
            })
        },
        typography: {
            fontFamily: ["Source sans pro", "sans-serif"].join(","),
            fontSize: 12,
             h1: {
                 fontFamily: ["Source sans pro", "sans-serif"].join(","),
                 fontSize: 40,
            },
             h2: {
                 fontFamily: ["Source sans pro", "sans-serif"].join(","),
                 fontSize: 32,
            },
             h3: {
                 fontFamily: ["Source sans pro", "sans-serif"].join(","),
                 fontSize: 24,
            },
             h4: {
                 fontFamily: ["Source sans pro", "sans-serif"].join(","),
                 fontSize: 20,
            },
             h5: {
                 fontFamily: ["Source sans pro", "sans-serif"].join(","),
                 fontSize: 16,
            },
             h6: {
                 fontFamily: ["Source sans pro", "sans-serif"].join(","),
                 fontSize: 14,
            },
             
        }
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode];
}

// the function above easy access of the controller for giving condition on whether the theme will be either dark or light, 