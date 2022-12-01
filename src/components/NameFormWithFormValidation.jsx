import React, { useState } from 'react';

const MIN = 2;
const MAX = 50;
const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const VALIDATION = new RegExp(`^${GROUP}( ${GROUP})*$`);

const NameFormWithFormValidation = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const changeHandler = (event) => setValue(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    setError('');

    const isValid = VALIDATION.test(value);
    console.log({ VALIDATION, isValid });
    if (!isValid) {
      setError('Nombre no válido');
      return;
    }

    alert('Nombre: ' + value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name"> Name: </label>
      <br />
      <input type="text" name="name" value={value} onChange={changeHandler} />
      {Boolean(error) && <p>{error}</p>}
      <br />
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default NameFormWithFormValidation;
