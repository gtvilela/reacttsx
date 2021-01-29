import React from 'react';
import Input from './components/Input/Input';
import DataInput from './components/DataInput/DataInput';

function App() {
  return (
    <div className="App">
     <h1>Localiza</h1>
     <Input
        label="Digite o local da reserva"
        type="text"
        required={true}
     />
     <DataInput
        startDate={new Date()}
     />
    </div>
  );
}

export default App;
