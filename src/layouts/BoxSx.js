import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function BoxSx() {
  return (
    <div>
        <Grid>
            <Grid>
      <Typography
        variant="h1"
        sx={{ color: "white", bgcolor: "grey", pt: 3, pb: 3 }}
      >
        Let's Learn Material UI
      </Typography>
            </Grid>
            <Grid>
                <Typography variant="h3">
                    First "sx prop"
                </Typography>
            </Grid>
            <Grid sx={{ px: 5, py: 2, border: 2, borderColor: 'blue', borderRadius: 2, mx: 3, my: 4, boxShadow: 8, }}>
      <Typography variant="body" sx={{ fontWeight: 'light' }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Typography>
            </Grid>
            <Grid sx={{ px: 3, py: 1, border: 1, borderColor: 'green', mx: 2, backgroundColor: 'yellow', color: 'blue'}}>
                <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: 18, }}>
                    Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy.
                </Typography>
            </Grid>
        </Grid>
      <Box
        sx={{
          mt: 40,
          ml: "auto",
          mr: "auto",
          width: "500px",
          color: "white",
          bgcolor: "lightblue",
          pt: 6,
          pb: "40px",
          br: 0,
          transition: "border-radius 2s ease-in-out, transform 2s ease-in-out",
          "&:hover": {
            color: "gold",
            bgcolor: "#FF5733",
            cursor: "pointer",
            borderRadius: 100,
            transform: "rotate(90deg)",
          },
        }}
      >
        <Typography variant="h2" sx={{}}>
          Hi There
        </Typography>
      </Box>
    </div>
  );
}
