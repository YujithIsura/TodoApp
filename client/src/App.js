import UserProfile from "./components/UserProfile";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Stack bgcolor="skyblue" direction="row" spacing={2} justifyContent="center" p={2}>
        <UserProfile />
      </Stack>
    </Box>
  );
}

export default App;
