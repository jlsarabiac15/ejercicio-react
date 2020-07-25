import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/TarjetaFruta'

const App = () => (
    <div>
      <TarjetaFruta name='Sandía' price={2000}/>
      <TarjetaFruta name='Piña' price={2000} />
      <TarjetaFruta name='Mango' price={2000} />
      <TarjetaFruta name='Limón'price={2000}  />
    </div> 
  )

  export default App