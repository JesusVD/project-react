export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Usuario requerido';
    }
  

    if (!values.password) {
      errors.password = 'Contraseña requerido';
    } else if (values.password.length < 6) {
      errors.password = 'La contraseña debe tener mas de 6 caracteres';
    }
  
    return errors;
  }