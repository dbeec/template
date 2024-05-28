import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TuneIcon from '@mui/icons-material/Tune';
//preferences icons future
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import SettingsIcon from '@mui/icons-material/Settings';
// import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

interface Modulos {
  modulo: Modulo[];
}

interface Modulo {
  icon?: React.ReactNode;
  name: string;
  // url?: string;
  submodulos: Submodulo[];
}

interface Submodulo {
  name: string;
  url: string;
}



const data_sidebar: Modulos = {
  modulo: [
    {
      icon: <SpaceDashboardIcon />,
      name: "Panel principal",
      submodulos: [{ name: "Dashboard", url: "home" }],
    },
    {
      icon: <GroupAddIcon />,
      name: "Gestión de usuarios",
      submodulos: [
        { name: "Lista de usuarios", url: "userlist" },
        { name: "Submodulo 2.2", url: "userlist/update" },
      ],
    },
    {
      icon: <ConfirmationNumberIcon />,
      name: "Gestión de rifas",
      submodulos: [
        { name: "Registro de premios", url: "" },
        { name: "Creación de boletos", url: "" },
        { name: "Lista de premios", url: "" },
        { name: "Lista de boletos", url: "" },
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
