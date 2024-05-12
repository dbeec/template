import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TuneIcon from '@mui/icons-material/Tune';
//preferences icons future
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import SettingsIcon from '@mui/icons-material/Settings';
// import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

interface Submodulo {
  name: string;
  url: string;
}

interface Modulo {
  icon?: React.ReactNode;
  name: string;
  // url?: string;
  submodulos: Submodulo[];
}

interface Modulos {
  modulo: Modulo[];
}

const data_sidebar: Modulos = {
  modulo: [
    {
      icon: <SpaceDashboardIcon />,
      name: "Panel principal",
      submodulos: [{ name: "Dashboard", url: "register" }],
    },
    {
      icon: <GroupAddIcon />,
      name: "Gestión de usuarios",
      submodulos: [
        { name: "Submodulo 2.1", url: "" },
        { name: "Submodulo 2.2", url: "" },
      ],
    },
    {
      icon: <ConfirmationNumberIcon />,
      name: "Gestión de boletos",
      submodulos: [
        { name: "Submodulo 2.1", url: "" },
        { name: "Submodulo 2.2", url: "" },
      ],
    },
    {
      icon: <TuneIcon />,
      name: "Preferencias",
      submodulos: [
        { name: "Config de cuenta", url: "" },
        { name: "Integraciones", url: "" },
        { name: "Admin de permisos", url: "" },
      ],
    },
  ],
};

export default data_sidebar;
