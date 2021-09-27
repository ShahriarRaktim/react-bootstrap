import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Carts from './conponents/Carts/Carts';

function App() {
  const [news, setNews] =useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=2836958c707f4228a435295a6be285c2')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  console.log(news)
  return (
    <div className="App">
        <h1>TESLA NEWS</h1>
        {
        news.length === 0 ? 
          <Spinner animation="border" />
        :
          <Row xs={2} md={3} className="g-4">
            {
              news.map(nw => <Carts news={nw}></Carts>)
            }
        </Row> 
        }       
    </div>
  );
}

export default App;
