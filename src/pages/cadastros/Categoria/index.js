import React, { useState, useEffect } from 'react';
import PageTemplate from '../../../components/PageTemplate';

import styled from 'styled-components';
import FormField from '../components/FormField';
import { Button } from '../../../components/Button';

const URL = "http://localhost:3300/categorias";

const Badgecolor = styled.div`
   background-color: ${props => props.cor};
   height:15px;
   width:40px;
   border: solid 1px #fff;
   display: inline-block;
   margin-left: 10px;
   vertical-align: bottom;
`;

function Categoria() {

  const catInicial = {
    nome: 'Forró',
    descricao: 'Ritmo do Nordeste',
    cor: '#345678'
  }


  const [categoria, setCategoria] = useState(catInicial);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(async (data) => {
        const resposta = await data.json();
        setCategorias([
          ...resposta
        ]);
      });
  },[]);


  const setFieldCategoria = (field, value) => {
    setCategoria({
      ...categoria,
      [field]: value
    })
  }

  const handleChangeCategoria = (evt) => {
    setFieldCategoria(evt.target.getAttribute('name'), evt.target.value);
  }

  const clearForm = () => {
    setCategoria({
      nome: '',
      descricao: '',
      cor: '#000000'
    });
    document.querySelector("#focus input").focus();
  }


  return (
    <PageTemplate>
      <h2>Cadatro de Categorias:</h2>

      <form onSubmit={evt => {
        evt.preventDefault();
        setCategorias(cats => [...cats, categoria]);
        clearForm();
      }}>
        <FormField id="focus" label="Nome" type="text" name="nome" value={categoria.nome} onChange={(evt) => handleChangeCategoria(evt)} />
        <FormField type="textarea" label="Descrição" name="descricao" value={categoria.descricao} onChange={(evt) => handleChangeCategoria(evt)} />
        <FormField type="color" label="Cor" name="cor" value={categoria.cor} onChange={(evt) => handleChangeCategoria(evt)} />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((cat, idx) => {
          return (
            <li key={`${cat} ${idx}`}>
              {`${cat.nome} - ${cat.descricao}`}
              <Badgecolor cor={cat.cor} />
            </li>
          )
        })}
      </ul>

    </PageTemplate>

  )
}

export default Categoria;
