import React from 'react';
import PathAnimation from '../components/PathAnimation';

function Root() {
  return (
    <>
      <header>
        <h1>SVG animations catalog</h1>
      </header>
      <main>
        <div className="card">
          <div className="card__content--title">
            <h2>Path animation</h2>
          </div>
          <div className="card__content">
            <PathAnimation />
          </div>{' '}
        </div>
      </main>
    </>
  );
}

export default Root;
