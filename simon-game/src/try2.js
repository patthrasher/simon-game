import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const colors = ['blue', 'green', 'yellow', 'red'];
function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function getSequence() {
  let nums = []
  for (let i=0; i<=10; i++) {
    nums.push(colors[getRandom(4)]);
  }
  return nums
}

const sequence = getSequence();
console.log(sequence)

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
        colorProp={this.props.propColor}
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
      color: 'white',
      squares: ['white', 'white', 'white', 'white'],
    };
  }

  turn(iTurn) {
    console.log(iTurn);

    const squaresSlice = this.state.squares.slice();
    squaresSlice[iTurn] = colors[iTurn];

    this.setState({
      squares: squaresSlice,
    });
    setTimeout(function() {
      this.setState({squares: ['white', 'white', 'white', 'white']});
    }.bind(this), 1000);
  }

  compTurn() {
    alert('compTurnactivated :)')
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
        {sequence.join(', ')}
      </div>
    )
  }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
