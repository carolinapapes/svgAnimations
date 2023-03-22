import React from 'react';
import PathAnimation from '../components/PathAnimation';
import PathAnimationText from '../components/PathAnimationText';

function Root() {
  return (
    <>
      <header>
        <h1>🛠️ SVG animations </h1>
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
        <div className="card col-span-2">
          <div className="card__content--title">
            <h2>Path animation text</h2>
          </div>
          <div className="card__content">
            <PathAnimationText />
          </div>{' '}
        </div>
      </main>
    </>
  );
}

export default Root;
