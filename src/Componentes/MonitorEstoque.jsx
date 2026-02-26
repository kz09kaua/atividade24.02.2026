import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";

function MonitorEstoque() {
  const [quantidade, setQuantidade] = React.useState(10);
 
  React.useEffect(() => {
    if (quantidade === 0) {
      //alert("Atenção: O estoque acabou!");//
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "O estoque acabou!",
  footer: '<a href="https://support.google.com/webmasters/answer/2445990?hl=pt-BR"></a>'
});
    }
  }, [quantidade]);

  function vender() {
    if (quantidade > 0) {
      setQuantidade((prevQuantidade) => prevQuantidade - 1);
    }
  }

  return (
    <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <Box sx={{ textAlign: "center" }}>
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
          disabled={quantidade === 0} 
          sx={{ mt: 2 }}
        >
          Vender 1 Unidade
        </Button>
      </Box>
    </Container>
  );
}

export default MonitorEstoque;