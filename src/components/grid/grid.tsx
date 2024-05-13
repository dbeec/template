import "./grid.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Gridd() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="content">
              <div className="title-card">Boletos disponibles</div>
              <div className="text-card">999</div>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="content">
              <div className="title-card">Boletos disponibles</div>
              <div className="text-card">999</div>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="content">
              <div className="title-card">Boletos disponibles</div>
              <div className="text-card">999</div>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="content">
              <div className="title-card">Boletos disponibles</div>
              <div className="text-card">999</div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
