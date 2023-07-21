import './App.css';
import React from 'react';
import react_logo from './assets/react_logo.png';
function App() {
  const [data, setData] = React.useState({
    content:'<Random Quote displays here>',
    author:'<Author of Quote displays here>',
    tags:['<Tag of Quote displays here>']
  });
  
  function getQuote() {
    try{
    fetch('https://api.quotable.io/random').then(
      response => response.json()).then(
        (quote)=>{
          setData(quote);
        }
      )
    }
    catch(error){
      console.log(error);
    }
  }

  
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='Title'>Random Quote Generator</h1>
      </header>
      <h3 className='Quote'>Quote: {data.content}</h3>       
      <h5 className='Author'>Author: {data.author}</h5>
      <h5 className='Author'>Tag: {data.tags}</h5>
      <button className='Generator' onClick={getQuote}>Get Quote</button>
      <br/>
      <footer className='Footer'>
      <p>Made with ❤️ by <a href='https://6rmoq-4iaaa-aaaak-aezja-cai.icp0.io/' target='_blank' rel='noreferrer'>Dipesh Goel</a><i>  under mentorship of </i> <a href='https://www.linkedin.com/in/kanishkkhurana/' target='_blank' rel='noreferrer'>Kanishk Sir</a> ( <a href='https://academy.lumoslabs.co/' target='_blank' rel='noreferrer'>Lumos Academy</a> )  using <img src={react_logo} alt='React Logo' className='React-logo'/> </p>
      </footer>
      
    </div>
  );
}

export default App;
