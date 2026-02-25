import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";

function MonitorEstoque() {
  const [quantidade, setQuantidade] = React.useState(0);

  // O VIGIA (useEffect)
  React.useEffect(function() {
    if (quantidade === 0) {
      alert("Atenção: O estoque acabou!");
    }
  }, [quantidade]);

  function vender() {
    setQuantidade(quantidade - 1);
  }

  return (
    <Container sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Monitor de Estoque
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Total: {quantidade}
        </Typography>

        <Button 
          variant="contained" 
          color="secondary" 
          onClick={vender} 
          sx={{ mt: 2 }}
        >
          Vender 1 Unidade
        </Button>
      </Box>
    </Container>
  );
}

export default MonitorEstoque;