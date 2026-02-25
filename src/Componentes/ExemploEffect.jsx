import React from "react";
import { Container, Paper, Typography, Stack } from "@mui/material";

function ExemploEffect() {
  const [status, setStatus] = React.useState("Carregando...");
  const [carregado, setCarregado] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("Sistema Pronto!!");
      setCarregado(true);
    }, 3000);
}, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5"><b>Status do Sistema:</b></Typography>
          <Typography variant="h4">{status}</Typography>
          
          {carregado && (
            <Typography variant="body1" align="center">
              O Vigia mudou o texto sozinho após 5 segundos.
            </Typography>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}

export default ExemploEffect;