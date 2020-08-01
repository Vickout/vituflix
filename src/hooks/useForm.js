import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function HandleValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: valor
    });
  }

  function HandleChange(event) {
    // const { getAttribute, value } = event.target;
    HandleValue(event.target.getAttribute('name'), event.target.value);
  }

  function ClearForm() {
    setValues(initialValues);
  }

  return {
    values,
    HandleChange,
    ClearForm,
  };
}
