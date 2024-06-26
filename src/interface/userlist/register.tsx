import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RegisterUserForm from "../../components/forms/registerUser/register-user";
export default function RegisterUser() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <Accordion
        square
        disableGutters
        sx={{
          bgcolor: "#9B8074",
          color: "#222",
          boxShadow: "none",
          borderRadius: "4px 4px 0px 0px",
        }}
      >
        <AccordionSummary
          sx={{
            fontWeight: "500",
            padding: "0 4px",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        >
          <span
            className="span"
            style={{ color: "white", fontSize: "1.02rem" }}
          >
            Registrar usuario
          </span>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#222",
            fontWeight: "500",
            // borderRadius: "3px",
            padding: "2rem 1rem",
          }}
        >
          <RegisterUserForm/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
