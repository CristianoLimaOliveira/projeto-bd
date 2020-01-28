import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TelaLogin from './pages/TelaLogin';
import TelaRegistro from './pages/TelaRegistro';
import TelaInicial from './pages/TelaInicial';
import TelaAlterar from './pages/TelaAlterar';
import TelaBuscar from './pages/TelaBuscar';
import TelaListagem from './pages/TelaListagem';

import './styles.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registrar">
          <TelaRegistro />
        </Route>
        <Route path="/inicio">
          <TelaInicial />
        </Route>
        <Route path="/listagem">
          <TelaListagem />
        </Route>
        <Route path="/alterar">
          <TelaAlterar />
        </Route>
        <Route path="/buscar">
          <TelaBuscar />
        </Route>
        <Route path="/">
          <TelaLogin />
        </Route>
      </Switch>
    </Router>
  );
}
