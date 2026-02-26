import React from 'react';
import { Button, Typography, Container } from '@mui/material';

function ContadorEstoque() {
 
  const [quantidade, setQuantidade] = React.useState(0);

 
  function adicionarItem() {
   const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  text: 'Item adicionado ao carrinho!',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "Item adicionado!"
});
    setQuantidade(quantidade + 1);
  }


  function removerItem() {
    if (quantidade > 0) {
      
      setQuantidade(quantidade - 1);
    } else {
 Swal.fire({
  title: 'Error!',
  text: 'Não é possível remover itens. O carrinho já está vazio.',
  icon: 'error',
  confirmButtonText: 'Cool'
})
    }
  }

  return (
   
      <Container  sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4">Itens no Carrinho: {quantidade}</Typography>
      <Button variant="contained" onClick={adicionarItem} sx={{ mr: 2 }}> + </Button>
      <Button variant="outlined" color="error" onClick={removerItem}> - </Button>
      </Container>
    </Container>
 
  );
}

export default ContadorEstoque;