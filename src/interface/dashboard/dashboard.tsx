import "./dashboard.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data_cards from "./data-cards";

export default function Dashboard() {
  return (
    <>
      <div className="content">
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            {data_cards.card.map((item, index) => (
              <Grid key={index} item xs={item.xs}>
                <div className="content-cards">
                  <div className="title-card">{item.title}</div>
                  <div className="text-card">{item.text}</div>
                </div>
              </Grid>
            ))}
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
