import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export default function CadastroCategoria() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000000"
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);
  

  function HandleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);

    setValues(initialValues);
  };

  function HandleValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: valor
    })
  };

  function HandleChange(event) {
    //const { getAttribute, value } = event.target;
    HandleValue(event.target.getAttribute('name'), event.target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={HandleSubmit}>

        <FormField 
          label="Nome da Categoria: "
          type="text"
          name="name"
          value={values.name}
          onChange={HandleChange}
        />

        <FormField 
          label="Descrição: "
          type="textarea"
          name="description"
          value={values.description}
          onChange={HandleChange}
        />

        <FormField 
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={HandleChange}
        />
        
        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={index}>{categoria.name}</li>
            );
          })}
        </ul>

        <button>Cadastrar</button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}