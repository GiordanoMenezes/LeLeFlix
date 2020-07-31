import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';


function Categoria() {
  return (
    <PageTemplate>
      <h2>Cadatro de Categorias</h2>
      <Link to="/cadastros/video">
         Cadastrar Vídeo
      </Link>
    </PageTemplate>

  )
}

export default Categoria;
