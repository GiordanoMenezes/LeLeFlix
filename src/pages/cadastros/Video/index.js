import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';


function Video() {
  return (
    <PageTemplate>
      <h2>Cadatro de Vídeos</h2>
      <Link to="/cadastros/categoria">
         Cadastrar Categoria
      </Link>
    </PageTemplate>

  )
}

export default Video;
