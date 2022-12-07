import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares:squares});
  }
  renderSquare(i){
    return (
    <Square 
    value ={this.state.square[i]} 
    onClick={() => this.handleClick(i)}/>
    );
  }
}



class Square extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
  render(){
    return(
      <button className="sqare" 
      onClick={()=> this.props.onclick()}
      >
        {this.props.vale}
      </button>
    );
  }
}

