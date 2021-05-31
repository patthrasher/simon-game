import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// const colors = ['green', 'red', 'yellow', 'blue'];
//
// function getRandom(max) {
//   return Math.floor(Math.random() * max)
// }
//
// function getNumSequence() {
//   let nums = []
//   for (let i=0; i<=3; i++) {
//     nums.push(getRandom(4));
//   }
//   return nums
// }
//
//
// function getColorSequence(seq) {
//   let colorSeq = []
//   for (let i=0; i<seq.length; i++) {
//     colorSeq.push(colors[numSequence[i]]);
//   }
//   return colorSeq;
// }
//
// const numSequence = getNumSequence();
// const colorSequence = getColorSequence(numSequence);
// console.log(numSequence);
// console.log(colorSequence);
//
// let turnSequence = [];
// let status = 'no status yet';
//
//
//
// class Square extends React.Component {
//
//
//   render() {
//     return (
//       <div>
//         <div
//           className={`square ${this.props.isLit ? this.props.light : 'lit-'}`}
//           onClick={() => this.props.toggleColor()}>
//           {this.props.squaresBoard}
//         </div>
//       </div>
//     );
//   }
// }
//
// // function Square(props){
// //
// //   return (
// //     <div>
// //       <div
// //         className={`square ${props.isLit ? this.props.light : 'lit-'}`}
// //         onClick={() => props.toggleColor()}>
// //         {props.squaresBoard}
// //       </div>
// //     </div>
// //   )
// // }
//
// class Board extends React.Component {
//
//   renderSquare(i) {
//     return (
//       <Square
//         i={i}
//         onClickBoard={() => this.props.onClickGame(i)}
//         squaresBoard={this.props.squaresGame[i]}
//         toggleColor={() => this.props.toggleColor(i)}
//         isLit={this.props.isLit}
//         light={this.props.lights[i]}
//       />
//     );
//   }
//
//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//         </div>
//       </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: ['green', 'red', 'yellow', 'blue'],
//       whichTurn: 0,
//       counter: 1,
//       isLit: false,
//       lights: ['lit-', 'lit-', 'lit-', 'lit-'],
//     };
//     this.toggleColor = this.toggleColor.bind(this);
//   }
//
//   turn(iTurn) {
//     console.log(iTurn);
//
//     const squaresSlice = this.state.squares.slice();
//     squaresSlice[iTurn] = colors[iTurn];
//
//     this.setState(state => ({
//       squares: squaresSlice,
//       counter: state.counter + 1
//     }));
//     setTimeout(function() {
//       this.setState({
//         squares: ['lightgreen', 'pink', 'lightyellow', 'lightblue']
//       });
//     }.bind(this), 500);
//
//     // if (colors[iTurn] !== sequence[0]) {
//     //   console.log('GAME OVER BUD');
//     // }
//     turnSequence.push(colors[iTurn]);
//     console.log('TURN SEQ: ' +  turnSequence);
//
//     this.isCorrect();
//   }
//
//   toggleColor(iTurn) {
//     console.log('toggle activate' + iTurn)
//
//     // const squaresSlice = this.state.squares.slice();
//     const lightsSlice = this.state.lights.slice();
//     lightsSlice[iTurn] = lightsSlice[iTurn] + colors[iTurn]
//     console.log(lightsSlice);
//
//     let x = colors[iTurn];
//     console.log('xxxxxxx' + x);
//
//     this.setState( state => ({
//       isLit: !this.state.isLit,
//       lights: lightsSlice,
//       counter: state.counter + 1
//
//     }));
//
//     setTimeout(function() {
//       this.setState({
//         lights: ['lit-', 'lit-', 'lit-', 'lit-'],
//         isLit: !this.state.isLit,
//       });
//     }.bind(this), 500);
//
//
//     turnSequence.push(colors[iTurn]);
//     console.log('TURN SEQ: ' +  turnSequence);
//
//     this.isCorrect();
//
//   };
//
//   compTurn(turn) {
//     const lightsSlice = this.state.lights.slice();
//     lightsSlice[numSequence[turn]] = lightsSlice[turn] + colors[numSequence[turn]];
//
//     this.setState( state => ({
//       isLit: !this.state.isLit,
//       lights: lightsSlice,
//       counter: state.counter + 1,
//       whichTurn: state.whichTurn + 1,
//     }));
//
//     setTimeout(function() {
//       this.setState({
//         lights: ['lit-', 'lit-', 'lit-', 'lit-'],
//         isLit: !this.state.isLit,
//       });
//     }.bind(this), 500);
//     console.log(lightsSlice);
//   }
//
//   isCorrect() {
//     const sequenceSlice = colorSequence.slice(0, this.state.counter);
//     console.log("sequenceSlice herer:" + sequenceSlice);
//
//     for (let b=0; b<sequenceSlice.length; b++) {
//       console.log('thisisindex: ' + b)
//       if (turnSequence[b] !== sequenceSlice[b]) {
//         console.log('one didnt match buster');
//         status = 'GAME OVER';
//         return false;
//       }
//       status = 'Good so far';
//     }
//   }
//
//   render() {
//
//     return (
//       <div>
//         <h1>Simon Simon</h1>
//         <Board
//         onClickGame={(iGame) => this.turn(iGame)}
//         squaresGame={this.state.squares}
//         toggleColor={(som) => this.toggleColor(som)}
//         isLit={this.state.isLit}
//         color={this.state.color}
//         lights={this.state.lights}
//         />
//         <button onClick={(so) => this.compTurn(this.state.whichTurn)}>Start Game</button>
//         {colorSequence.join(', ')}
//         <p>COUNTER: {this.state.counter}</p>
//         <p>Winner? : {status}</p>
//
//
//         {console.log(this.state.isLit)}
//       </div>
//     )
//   }
// }

const colors = ['green', 'red', 'yellow', 'blue'];
let status = '';
let index = 0;

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


// deal with double clicking? Sound? Change look of buttons/background?
// Change variable names etc?

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

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            colors: colorSequence,
            turn: 1,
        }
    }



  animate(element, className, callback){
    console.log('calling animate')
    setTimeout(() => {
      element.classList.toggle(className);
      setTimeout(() => {
        element.classList.toggle(className);
        if (callback) {
          callback();
        }
      }, 300)
    }, 500);
  }


  start(seq) {
      console.log('ITISANIMATE');
      console.log(this.state.turn);
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

  //  startNew() {
  //    numSequence = getNumSequence();
  //    colorSequence = getColorSequence(numSequence);
  //
  //    console.log(numSequence);
  //    console.log(colorSequence);
  //
  //    console.log('ITISANIMATE');
  //    console.log(this.state.turn);
  //    const pieces = Array.from(document.querySelectorAll('.game-piece'));
  //    const scheduleAnimation = (i) => {
  //      const element = pieces[seq[i]];
  //      const color = this.state.colors[i];
  //      if ( element && color ) {
  //        this.animate(element, color, scheduleAnimation.bind(this, ++i));
  //      }
  //    }
  //   scheduleAnimation(0);
  // }
  //  }

  reloadPage() {
    window.location.reload();
  }

  turn(i) {

    const piece = document.getElementById(i);
    console.log(piece)

    if (!this.check(i, index)) {
      console.log('DONE');
      index = 0
      this.setState({
        turn: 0,
      });
      status = <button className='restart' onClick={() => this.reloadPage()}>GAME OVER - Try Again?</button>
      return;
    } else {
      console.log('still goooooooooooood');
    }

    const scheduleAnimation = () => {
      const color = colors[i];
      if ( color ) {
        this.animate(piece, color);
      }
    }
    scheduleAnimation(i);



    index += 1;

    if (index === this.state.turn) {
      this.setState(state => ({
        turn: state.turn + 1,
      }));
      setTimeout(() => {
        this.start(numSequence.slice(0, this.state.turn))
      }, 1500);
      index = 0;
    }
  }


  check(piece, index) {
    const correctClickSeq = numSequence.slice(0, this.state.turn);

    console.log('correct + piec ' + correctClickSeq[index], piece)

    if (correctClickSeq[index] !== piece) {
        return false;
    }
    return true;
  }

  render() {


      return (
      <div className="memory-game">
        <h1 className='header'>Simon Memory Game</h1>
        <h2 style="color: white">Hey Grandma!!!</h2>
        {[0,1,2,3].map((i) => {
          return <div key={i} id={i} className='game-piece' onClick={() => this.turn(i)}></div>
        })}
        <p>{status}</p>
        <button onClick={() => this.start(numSequence.slice(0,this.state.turn))} className="start-game">Start Game (you got this!)</button>
      </div>
    )
  }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
