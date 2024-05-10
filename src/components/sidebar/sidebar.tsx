import "./sidebar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar() {
  return (
    <div className="sidebar-content">
      <Accordion
        square
        disableGutters
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Panel principal
        </AccordionSummary>
        <AccordionDetails>
          Dashboard
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        disableGutters
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Admin de usuarios
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "1rem" }}>
          Registro de usuarios
        </AccordionDetails>
        <AccordionDetails sx={{ marginLeft: "1rem" }}>
          Lista de usuarios
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        disableGutters
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Comercios
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        disableGutters
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Membresía
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        disableGutters
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Beneficios
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        disableGutters
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Beneficiarios
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        square
        sx={{ bgcolor: "transparent", color: "#fff", boxShadow: "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Vendedores
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
