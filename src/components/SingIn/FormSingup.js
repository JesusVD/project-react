import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Ingresa y se parte de mas de 1000 cursos online que puedas en tus tiempos libres. Tienes acceso de por vida.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Usuario</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Ingresa tu usuario'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ingresa tu contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default FormSignup;