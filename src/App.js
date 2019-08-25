/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

const styles =css`border: none; border:1px solid red; position: relative;`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>James Josephson</h1>
        <p>Product Designer &ndash; currently working on enterprise products in Menlo Park while getting my masters in Design Impact at Stanford.</p>
      </header>

      <main>
        <button css={styles}>
          Password Required
        </button>
      </main>
    </div>
  );
}

export default App;
