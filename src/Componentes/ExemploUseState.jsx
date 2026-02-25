import React, { useState } from "react";
import { Container, Typography, Button, Paper, Stack } from "@mui/material";

function ExemploUseState() {
  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero(numero + 1);
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5" gutterBottom>
            <b><h3>Contador</h3></b>
          </Typography>
          <Typography variant="h4">{numero}</Typography>
          <Button variant="contained" onClick={aumentar}>
            Aumentar Número
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default ExemploUseState;