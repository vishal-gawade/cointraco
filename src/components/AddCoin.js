import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);
    const { addCoin } = useContext(WatchListContext);
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "litecoin",
        "cardano",
        "polkadot",
        "bitcoin-cash",
        "stellar",
        "chainlink",
        "binancecoin",
        "tether",
        "monero",
        "dogecoin"
    ];

    const handleClick = (coin) => {
        addCoin(coin);
        setIsActive(false);
    };

    return (
        <div className="dropdown">
            <button
                onClick={() => setIsActive(!isActive)}
                className="btn btn-light dropdown-toggle"
                type="button"
            >
                Add Coin
            </button>
            <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {availableCoins.map((el) => {
                    return (
                        <a
                            onClick={() => handleClick(el)}
                            href="/"
                            className="dropdown-item"
                        >
                            {el}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default AddCoin;
