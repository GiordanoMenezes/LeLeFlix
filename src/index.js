import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/cadastros/Video';
import Categoria from './pages/cadastros/Categoria';

// Colocar um jogo ou brincadeira nessa página:
const Pagina404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Ops, quebrou tudo :O</h1>
    <p>
      <a href="/">Você pode jogar ou voltar pra home :)</a>
    </p>
    <p>
      Ou <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">aprender a fazer o jogo</a>
    </p>
    {/*
      Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui: 
      - https://codepen.io/omariosouto/pen/pogmdGE
      E quem quiser programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}
    <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600" />
  </div>);


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/cadastros/video" component={Video} />
          <Route path="/cadastros/categoria" component={Categoria} />
          <Route component={Pagina404}/>
        </Switch>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


