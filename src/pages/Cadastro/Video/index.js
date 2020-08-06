import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos ';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { values, HandleChange } = useForm({});

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  function HandleSubmit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.title === values.categoria);

    videosRepository.create({
      title: values.title,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <PageDefault label="Cadastrar Categoria" categoryURL="/cadastro/categoria">
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={HandleSubmit}>
        <FormField
          label="Título do vídeo: "
          name="title"
          value={values.title}
          onChange={HandleChange}
        />

        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={HandleChange}
        />

        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onChange={HandleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
    </PageDefault>
  );
}
