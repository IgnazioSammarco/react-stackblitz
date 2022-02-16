import React from 'react';
import './style.css';
import MioComponente from './MioComponente';

const nominativo = {nome: "Ignazio", cognome: "Sammarco"}

export default function App() {
  return (
    <div>
      <MioComponente nominativo={nominativo} />
    </div>
  );
}
