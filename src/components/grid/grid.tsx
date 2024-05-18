import "./grid.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Gridd() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="content-cards">
                <div className="title-card">Boletos disponibles</div>
                <div className="text-card">999</div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className="content-cards">
                <div className="title-card">Boletos disponibles</div>
                <div className="text-card">999</div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className="content-cards">
                <div className="title-card">Boletos disponibles</div>
                <div className="text-card">999</div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className="content-cards">
                <div className="title-card">Boletos disponibles</div>
                <div className="text-card">999</div>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="content-charts"></div>
            </Grid>

            <Grid item xs={6}>
              <div className="content-charts"></div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
