import "./header.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";

export default function Header() {
  return (
    <>
      <div className="header-content">
        <div className="title-page">
          <ArrowBackIosIcon />
          <span>Panel principal</span>
        </div>

        <div className="add-items">
          <AddIcon />
        </div>
      </div>
    </>
  );
}
