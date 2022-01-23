import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { injected } from "../web3-config";
import { useCallback } from "react";
import useTruncatedAddress from "../hooks/truncatedAddress";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } =
    useWeb3React();

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(injected);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    <div className="">
      {active ? (
        <div className="flex font-bold text-lg bg-color2 rounded-lg px-4 py-2">
          <div className="flex">
            <div>
              💰{balance}
              {" ~ "}
            </div>
            <Link to="/search">📜{truncatedAddress}</Link>
            <button onClick={disconnect}>
              <i className="fas fa-times text-red-500 ml-2"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={connect}
          className="animate-bounce font-bold text-lg bg-color2 rounded-lg px-4 py-2"
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? "Network not supported" : "Conect Wallet"}
        </button>
      )}
    </div>
  );
};

export default Wallet;
