import BreadcrumpSeparator from "../breadcrumps/breadcrumps";
import "./header.css";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";

export default function Header() {
  return (
    <>
      <div className="header-content">
        <div className="title-page">
          {/* <ArrowBackIosIcon />
          <span>Panel principal</span> */}
          <BreadcrumpSeparator />
        </div>

        <div className="welcome-profile">
          <span>Bienvenido/a Daniela!</span>
          <div className="add-items">
            <AddIcon />
          </div>
        </div>
      </div>
    </>
  );
}
