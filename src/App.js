import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';

import Header from './components/Header';
import { WatchListContextProvider } from './context/WatchListContext';

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route exact path="/coins/:id" component={CoinDetailPage}></Route>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
