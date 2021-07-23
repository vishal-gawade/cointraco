import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import HashLoader from "react-spinners/HashLoader";
import { WatchListContextProvider } from './context/WatchListContext';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 8000)
  }, [])

  return (
    <> 
      {
        isLoading ?
        <div className="App">
            <div className="App">
              <HashLoader size={50}
                color={"#ff9f00"}
                loading={isLoading}
              />
            </div>
        </div>
      
      :
          <div className="container ">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route exact path="/coins/:id" component={CoinDetailPage}></Route>
        </BrowserRouter>
      </WatchListContextProvider>
          </div>
      }
    
    </>
  );
}


export default App;
