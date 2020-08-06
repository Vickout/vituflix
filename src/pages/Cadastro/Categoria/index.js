import React, { useState, useEffect } from 'react';
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
        {values.title}
      </h1>

      <form onSubmit={HandleSubmit}>

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="title"
          value={values.title}
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

        <h2>Categorias</h2>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul style={{ paddingBottom: '25px' }}>
          {categorias.map((categoria) => (
            <li key={categoria.id} style={{ color: categoria.color, padding: '10px' }}>{categoria.title}</li>
          ))}
        </ul>

        <Button>Cadastrar</Button>
      </form>

    </PageDefault>
  );
}
