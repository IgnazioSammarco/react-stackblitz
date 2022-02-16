import React from 'react';

export default function MioComponente(props) {
  return (
    <div>
      <p>
        Il mio primo componente fatto da: {props.nominativo.cognome} 
      </p>
    </div>
  );
}
