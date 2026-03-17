// src/theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    status: {
      ontime: string;
      delayed: string;
      cancelled: string;
      online: string;
      offline: string;
    };
  }
  interface PaletteOptions {
    status?: {
      ontime: string;
      delayed: string;
      cancelled: string;
      online: string;
      offline: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563A6",
      dark: "#1E4E8C",
      light: "#3B82C4",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F4F6F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
      disabled: "#9CA3AF",
    },
    divider: "#E2E8F0",
    success: {
      main: "#22C55E",
      light: "#E6F4EA",
      dark: "#166534",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F59E0B",
      light: "#FEF3C7",
      dark: "#92400E",
      contrastText: "#111827",
    },
    error: {
      main: "#EF4444",
      light: "#FEE2E2",
      dark: "#7F1D1D",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#3B82C4",
      light: "#DBEAFE",
      dark: "#1E4E8C",
      contrastText: "#FFFFFF",
    },
    status: {
      ontime: "#22C55E",
      delayed: "#F59E0B",
      cancelled: "#EF4444",
      online: "#22C55E",
      offline: "#EF4444",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(','),
    h4: { fontWeight: 700, fontSize: "1.5rem" },
    h5: { fontWeight: 700, fontSize: "1.25rem" },
    h6: { fontWeight: 700, fontSize: "1.1rem" },
    subtitle1: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F4F6F9",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #1E4E8C 0%, #2563A6 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: { minHeight: 64 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #E2E8F0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E2E8F0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 16,
          paddingBlock: 10,
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #1E4E8C 0%, #2563A6 100%)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 999,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8FAFC",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          color: "#1F2937",
          borderBottom: "1px solid #E2E8F0",
        },
        body: {
          borderBottom: "1px solid #EEF2F7",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
        notchedOutline: {
          borderColor: "#CBD5E1",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});