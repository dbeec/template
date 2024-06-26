import "./sidebar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data_sidebar from "./menu";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-content">
      {data_sidebar.modulo.map((item, index) => (
        <Accordion
          key={index}
          square
          disableGutters
          sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
        >
          <AccordionSummary
            sx={{
              fontWeight: "500",
              padding: "0 4px",
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          >
            {item.icon}
            <span className="span">{item.name}</span>
          </AccordionSummary>
          {item.submodulos.map((submodulo, subIndex) => (
            <NavLink to={submodulo.url}>
              <AccordionDetails
                key={subIndex}
                sx={{
                  bgcolor: "#cca595",
                  color: "#6e513d",
                  fontWeight: "500",
                  borderRadius: "3px",
                  padding: ".7rem 1rem",
                  "&:hover": {
                    bgcolor: '#c59d8e'
                  }
                }}
              >
                {submodulo.name}
              </AccordionDetails>
            </NavLink>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
