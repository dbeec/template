import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

interface Submodulo {
  name: string;
  url?: string;
}

interface Modulo {
  icon?: React.ReactNode;
  name: string;
  url?: string;
  submodulos: Submodulo[];
}

interface Modulos {
  modulo: Modulo[];
}

const data_sidebar: Modulos = {
  modulo: [
    {
      icon: <SpaceDashboardIcon />,
      name: "Modulo 1",
      submodulos: [
        { name: "Submodulo 1.1", url: "dashboard/register" },
        { name: "Submodulo 1.2", url: "" },
      ],
    },
    {
      icon: <SpaceDashboardIcon />,
      name: "Modulo 2",
      submodulos: [
        { name: "Submodulo 2.1", url: "" },
        { name: "Submodulo 2.2", url: "" },
      ],
    },
  ],
};

export default data_sidebar;
