import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const colors = ['green', 'red', 'yellow', 'blue'];

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function getNumSequence() {
  let nums = []
  for (let i=0; i<=3; i++) {
    nums.push(getRandom(4));
  }
  return nums
}


function getColorSequence(seq) {
  let colorSeq = []
  for (let i=0; i<seq.length; i++) {
    colorSeq.push(colors[numSequence[i]]);
  }
  return colorSeq;
}

const numSequence = getNumSequence();
const colorSequence = getColorSequence(numSequence)
console.log(numSequence)
console.log(colorSequence)

let turnSequence = [];
let status = 'no status yet';



class Square extends React.Component {

  render() {
    return (
      <div>
        <div
          className="square"
          style={{backgroundColor: this.props.squaresBoard}}
          onClick={() => this.props.onClickBoard()}>
          {this.props.squaresBoard}
        </div>
      </div>
    );
  }
}


class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        i={i}
        onClickBoard={() => this.props.onClickGame(i)}
        squaresBoard={this.props.squaresGame[i]}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ['lightgreen', 'pink', 'lightyellow', 'lightblue'],
      whichTurn: 1,
      counter: 1,
    };
  }

  turn(iTurn) {
    console.log(iTurn);

    const squaresSlice = this.state.squares.slice();
    squaresSlice[iTurn] = colors[iTurn];

    this.setState(state => ({
      squares: squaresSlice,
      counter: state.counter + 1
    }));
    setTimeout(function() {
      this.setState({
        squares: ['lightgreen', 'pink', 'lightyellow', 'lightblue']
      });
    }.bind(this), 1000);

    // if (colors[iTurn] !== sequence[0]) {
    //   console.log('GAME OVER BUD');
    // }
    turnSequence.push(colors[iTurn]);
    console.log('TURN SEQ: ' +  turnSequence);

    this.isCorrect();
  }

  compTurn(howMany) {
    console.log(this.state.whichTurn);

    const squaresSlice = this.state.squares.slice();


  }

  isCorrect() {
    const sequenceSlice = colorSequence.slice(0, this.state.counter);
    console.log("sequenceSlice herer:" + sequenceSlice);

    for (let b=0; b<sequenceSlice.length; b++) {
      console.log('thisisindex: ' + b)
      if (turnSequence[b] !== sequenceSlice[b]) {
        console.log('one didnt match buster');
        status = 'GAME OVER';
        return false;
      }
      status = 'Good so far';
    }
  }


  render() {

    return (
      <div>
        <h1>refactoring for clarity</h1>
        <Board
        onClickGame={(iGame) => this.turn(iGame)}
        squaresGame={this.state.squares}
        />
        <button onClick={() => this.compTurn()}>Start Game</button>
        {colorSequence.join(', ')}
        <p>COUNTER: {this.state.counter}</p>
        <p>Winner? : {status}</p>
      </div>
    )
  }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';


  const colors = ['green', 'red', 'yellow', 'blue'];

  function getRandom(max) {
    return Math.floor(Math.random() * max)
  }

  function getNumSequence() {
    let nums = []
    for (let i=0; i<=3; i++) {
      nums.push(getRandom(4));
    }
    return nums
  }


  function getColorSequence(seq) {
    let colorSeq = []
    for (let i=0; i<seq.length; i++) {
      colorSeq.push(colors[numSequence[i]]);
    }
    return colorSeq;
  }

  const numSequence = getNumSequence();
  const colorSequence = getColorSequence(numSequence)
  console.log(numSequence)
  console.log(colorSequence)

  let turnSequence = [];
  let status = 'no status yet';


  //
  // class Square extends React.Component {
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

  function Square(props){

    return (
      <div>
        <div
          className={`square ${props.isLit ? this.props.light : 'lit-'}`}
          onClick={() => props.toggleColor()}>
          {props.squaresBoard}
        </div>
      </div>
    )
  }

  class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square
          i={i}
          onClickBoard={() => this.props.onClickGame(i)}
          squaresBoard={this.props.squaresGame[i]}
          toggleColor={() => this.props.toggleColor(i)}
          isLit={this.props.isLit}
          light={this.props.lights[i]}
        />
      );
    }

    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
          </div>
          <div className="board-row">
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
        </div>
      );
    }
  }

  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: ['green', 'red', 'yellow', 'blue'],
        whichTurn: 0,
        counter: 1,
        isLit: false,
        lights: ['lit-', 'lit-', 'lit-', 'lit-'],
      };
      this.toggleColor = this.toggleColor.bind(this);
    }

    turn(iTurn) {
      console.log(iTurn);

      const squaresSlice = this.state.squares.slice();
      squaresSlice[iTurn] = colors[iTurn];

      this.setState(state => ({
        squares: squaresSlice,
        counter: state.counter + 1
      }));
      setTimeout(function() {
        this.setState({
          squares: ['lightgreen', 'pink', 'lightyellow', 'lightblue']
        });
      }.bind(this), 500);

      // if (colors[iTurn] !== sequence[0]) {
      //   console.log('GAME OVER BUD');
      // }
      turnSequence.push(colors[iTurn]);
      console.log('TURN SEQ: ' +  turnSequence);

      this.isCorrect();
    }

    toggleColor(iTurn) {
      console.log('toggle activate' + iTurn)

      // const squaresSlice = this.state.squares.slice();
      const lightsSlice = this.state.lights.slice();
      lightsSlice[iTurn] = lightsSlice[iTurn] + colors[iTurn]
      console.log(lightsSlice);

      let x = colors[iTurn];
      console.log('xxxxxxx' + x);

      this.setState( state => ({
        isLit: !this.state.isLit,
        lights: lightsSlice,
        counter: state.counter + 1

      }));

      setTimeout(function() {
        this.setState({
          lights: ['lit-', 'lit-', 'lit-', 'lit-'],
          isLit: !this.state.isLit,
        });
      }.bind(this), 500);


      turnSequence.push(colors[iTurn]);
      console.log('TURN SEQ: ' +  turnSequence);

      this.isCorrect();

    };

    compTurn(turn) {
      const lightsSlice = this.state.lights.slice();
      lightsSlice[numSequence[turn]] = lightsSlice[turn] + colors[numSequence[turn]];
      console.log(lightsSlice);

      this.setState( state => ({
        isLit: !this.state.isLit,
        lights: lightsSlice,
        counter: state.counter + 1,
        whichTurn: state.whichTurn + 1,
      }));

      setTimeout(function() {
        this.setState({
          lights: ['lit-', 'lit-', 'lit-', 'lit-'],
          isLit: !this.state.isLit,
        });
      }.bind(this), 500);
    }

    isCorrect() {
      const sequenceSlice = colorSequence.slice(0, this.state.counter);
      console.log("sequenceSlice herer:" + sequenceSlice);

      for (let b=0; b<sequenceSlice.length; b++) {
        console.log('thisisindex: ' + b)
        if (turnSequence[b] !== sequenceSlice[b]) {
          console.log('one didnt match buster');
          status = 'GAME OVER';
          return false;
        }
        status = 'Good so far';
      }
    }

    render() {

      return (
        <div>
          <h1>Simon Simon</h1>
          <Board
          onClickGame={(iGame) => this.turn(iGame)}
          squaresGame={this.state.squares}
          toggleColor={(som) => this.toggleColor(som)}
          isLit={this.state.isLit}
          color={this.state.color}
          lights={this.state.lights}
          />
          <button onClick={(so) => this.compTurn(this.state.whichTurn)}>Start Game</button>
          {colorSequence.join(', ')}
          <p>COUNTER: {this.state.counter}</p>
          <p>Winner? : {status}</p>


          {console.log(this.state.isLit)}


        </div>
      )
    }
  }

  ReactDOM.render(
      <Game />,
      document.getElementById('root')
    );
