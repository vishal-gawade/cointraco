import React from 'react';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList';
const CoinSummaryPage = () => {
    return (
        <div className="coinsummary border-0 p-3 rounded mt-2 ">
            <AddCoin/>
            <CoinList/>
        </div>  
    )
}

export default CoinSummaryPage;
