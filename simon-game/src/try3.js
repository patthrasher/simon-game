import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square1 extends React.Component {
  render() {
    return (
      <div className='square'></div>
    )
  }
}

class Square2 extends React.Component {
  render() {
    return (
      <div className='square'></div>
    )
  }
}

class Square3 extends React.Component {
  render() {
    return (
      <div className='square'></div>
    )
  }
}

class Square4 extends React.Component {
  render() {
    return (
      <div className='square'></div>
    )
  }
}


class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>yo third try split up</h1>
        <div className='board-row'>
          <Square1 />
          <Square2 />
        </div>
        <div className='board-row'>
          <Square3 />
          <Square4 />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
