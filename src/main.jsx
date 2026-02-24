import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormCadastro from './Componentes/FormCadastro'
import Quantidade from './Componentes/Quantidade'
import FormPreferencias from './Componentes/PreferenciaForm'
import FormConfiguracoes from './Componentes/ConfiguracoesForm'
import CadastrodeProdutos from './Componentes/Cadastros'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Quantidade />
    <FormCadastro />
    <FormPreferencias />
    <FormConfiguracoes />
    <CadastrodeProdutos />
  </StrictMode>,
)
