import React, { useState, useEffect } from 'react';
import Form from './Form';

const App = () => {
  //creo una función que lee local para pasarsela como estado inicial a mi hook userInfo
  //recuerda que en useState guardo los estados iniciales de las cosas
  //se guadará como estado inicial o un objeto con las propiedades vacías o lo que parsee localstorage (operador ||)
  const getLocal = () => {
    const result = JSON.parse(localStorage.getItem('userInfo')) || {
      palette: '',
      name: '',
      phone:''
    };
    return result;//retorno el resultado
  };

  //creo el hook que controlará el estado de userInfo, su estado inicial será lo que retorne getLocal
  const [userInfo, setUserInfo] = useState(getLocal());

  //función que controla mi formulario (igual que ya sabemos) pero usando setUserInfo en lugar de this.setState
  const handleInputValue = (inputName, inputValue) => {
    setUserInfo(prevState => {
      return  {
          ...prevState,
          [inputName]: inputValue
      }
    })
  }

  console.log(userInfo)

  //en useEffect dentro tal cual seteo localstorage con el objeto userInfo
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  });

  //el resto es igual que en componentes de clase pero cambiando this.state.userInfo por su respectivo valor del hook
  return <div className="App">
            <Form phone={userInfo.phone}
                  name={userInfo.name}
                  handleInputValue={handleInputValue}
                  checked={userInfo.palette}
            />
         </div>
  };

export default App;