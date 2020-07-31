import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function HandleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);

    setValues(initialValues);
  }

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

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://vituflix.herokuapp.com/';

    fetch(URL_TOP).then(async (res) => {
      const resposta = await res.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

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

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>{categoria.name}</li>
          ))}
        </ul>

        <Button>Cadastrar</Button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
