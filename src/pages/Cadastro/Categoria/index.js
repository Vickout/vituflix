import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const { values, HandleChange, ClearForm } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);

  function HandleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);

    ClearForm();
  }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://vituflix.herokuapp.com/categorias';

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
            <li key={categoria.id}>{categoria.title}</li>
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
