import { Link as RouterLink } from "react-router-dom";
import { Link, Stack } from "@mui/material";

// COMPONENTS
import { ListStyle } from "src/coreUi/layouts/items";

export const Header = () => (
  <Stack
    sx={{
      p: 2,
      borderBottom: 1,
      borderColor: "primary.dark",
      gridArea: "header",
    }}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    spacing={2}
  >
    <Link component={RouterLink} to="/" underline="none" variant="h5">
      Global Giggles
    </Link>
    <ListStyle />
  </Stack>
);
