import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import Axios from 'axios';

const sampleQuote = {
  quote:
    "Le vol à l'étalage est un crime sans victime, comme frapper quelqu'un dans le noir.",
  character: 'Nelson Muntz',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
  characterDirection: 'Left',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citation: sampleQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    Axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          citation: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard citation={this.state.citation} />
        <button type="button" onClick={this.getQuote}>
          Get Quote
        </button>
      </div>
    );
  }
}

export default App;
