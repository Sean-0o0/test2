import ReactDOM from 'react-dom';
import React, { useEffect, useState, useRef } from 'react';

export default function App(props) {
  const {} = props;
  useEffect(() => {
    return () => {};
  }, []);
  return <div>Index</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));