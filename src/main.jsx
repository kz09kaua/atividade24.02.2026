import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormCadastro from './Componentes/FormCadastro'
import Quantidade from './Componentes/Quantidade'
import FormPreferencias from './Componentes/PreferenciaForm'
import FormConfiguracoes from './Componentes/ConfiguracoesForm'
import CadastrodeProdutos from './Componentes/Cadastros'
import ExemploUseState from './Componentes/ExemploUseState'
import ExemploEffect from './Componentes/ExemploEffect'
import ContadorEstoque from './Componentes/ContadorEstoque'
import CronometroSimples from './Componentes/CronometroSimples'
import MonitorEstoque from './Componentes/MonitorEstoque'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Quantidade />
    <FormCadastro />
    <FormPreferencias />
    <FormConfiguracoes />
    <CadastrodeProdutos />
    <ExemploUseState />
    <ExemploEffect />
    <ContadorEstoque />
    <CronometroSimples />
    <MonitorEstoque />
  </StrictMode>,
)