import { Box, useTheme } from "@mui/material";
import Geography from "../../components/Geography";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const GeographyChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Geography />
      </Box>
    </Box>
  );
};

export default GeographyChart;