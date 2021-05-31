import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const colors = ['green', 'red', 'yellow', 'blue'];
let status = '';
let clickCount = 0;
let score = 0;

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function getNumSequence() {
  let nums = []
  for (let i=0; i<=20; i++) {
    nums.push(getRandom(4));
  }
  return nums
}

function getColorSequence(seq) {
  let colorSeq = []
  for (let i=0; i<seq.length; i++) {
    colorSeq.push(colors[seq[i]]);
  }
  return colorSeq;
}

let numSequence = getNumSequence();
let colorSequence = getColorSequence(numSequence);
console.log(numSequence);
console.log(colorSequence);


class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            colors: colorSequence,
            turn: 1,
        }
    }

  animate(element, className, callbackFunction){
    setTimeout(() => {
      element.classList.toggle(className);
      setTimeout(() => {
        element.classList.toggle(className);
        if (callbackFunction) {
          callbackFunction();
        }
      }, 300)
    }, 500);
  }


  start(seq) {
      const pieces = Array.from(document.querySelectorAll('.game-piece'));
      const scheduleAnimation = (i) => {
        const element = pieces[seq[i]];
        const color = this.state.colors[i];
        if ( element && color ) {
          this.animate(element, color, scheduleAnimation.bind(this, ++i));
        }
      }
     scheduleAnimation(0);
   }

  turn(i) {
    const piece = document.getElementById(i);

    if (!this.check(i, clickCount)) {
      clickCount = 0
      this.setState({
        turn: 0,
      });

      status = <button className='game-over-button' onClick={() => this.reloadPage()}>GAME OVER - Try Again?</button>
      return;
    }

    const scheduleAnimation = () => {
      const color = colors[i];
      if (color) {
        this.animate(piece, color);
      }
    }
    scheduleAnimation(i);

    clickCount += 1;

    if (clickCount === this.state.turn) {
      this.setState(state => ({
        turn: state.turn + 1,
      }));
      setTimeout(() => {
        this.start(numSequence.slice(0, this.state.turn))
      }, 1500);
      clickCount = 0;
      score += 1;
    }
  }


  check(piece, clickCount) {
    const correctClickSeq = numSequence.slice(0, this.state.turn);

    if (correctClickSeq[clickCount] !== piece) {
        return false;
    }
    return true;
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
      return (
      <div className="game-container">
        <h1 className='header'>Simon Memory Game</h1>
        <p className='header'>Follow the pattern of lights by clicking the sequence in order!</p>
        {[0,1,2,3].map((i) => {
          return <div key={i} id={i} className='game-piece' onClick={() => this.turn(i)}></div>
        })}
        <p>{status}</p>
        <h2 className='header'>Score: {score}</h2>
        <div className='button-pad'><button onClick={() => this.start(numSequence.slice(0,this.state.turn))} className="start-button">Start Game (you got this!)</button></div>
      </div>
    )
  }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
