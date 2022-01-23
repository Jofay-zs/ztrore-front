import React, { useCallback, useEffect } from "react";
import "../../index.css";
import { useState } from "react";
import useZtrore from "../../hooks/useZtrore";
import { useWeb3React } from "@web3-react/core";

const IndexHome = () => {
  const { active, account } = useWeb3React();
  const ztrore = useZtrore();
  const [imageSrc, setImageSrc] = useState("");
  const [isMinting, setIsMinting] = useState(false);

  const getZtroreData = useCallback(async () => {
    if (ztrore) {
      const totalSupply = await ztrore.methods.totalSupply().call(); //.call for view methods
      const dnaPreview = await ztrore.methods
        .calculatingDNA(totalSupply, account)
        .call();
      const imageSrc = await ztrore.methods.imageByDNA(dnaPreview).call();
      setImageSrc(imageSrc);
    }
  }, [ztrore, account]);

  const mint = () => {
    setIsMinting(true);

    ztrore.methods
      .mint()
      .send({
        from: account,
      })
      .on("transactionHash", () => {
        setIsMinting(false);
        console.log("Transaction sent")
      })
      .on("receipt", () => {
        setIsMinting(false);
        console.log("Successful transaction");
      })
      .on("error", () => {
        setIsMinting(false);
        console.log("Transaction failed");
      });
  };

  useEffect(() => {
    getZtroreData();
  }, [getZtroreData]);

  return (
    <main className="">
      <section className="flex justify-center items-center flex-col h-screen w-full">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div>
            <img src={active ? imageSrc : "https://avataaars.io/"} />
          </div>
          {active ? (
            <div className="flex text-center my-3 flex-col">
              <div className="px-4 py-2 bg-gray-700 mx-1 rounded-md my-2">
                NextID:{" "}
                <span className="font-bold bg-gray-900 rounded-lg px-2 py-1">
                  1
                </span>
              </div>
              <div className="px-4 py-2 bg-gray-700 mx-1 rounded-md my-2">
                Address:{" "}
                <span className="font-bold bg-gray-900 rounded-lg px-2 py-1">
                  0x000...000
                </span>
              </div>
              <button
                className="px-6 py-2 bg-color5 font-bold text-color1 rounded-lg mt-4"
                onClick={getZtroreData}
              >
                Update
              </button>
            </div>
          ) : (
            <div className="flex text-center justify-center text-xl font-bold my-3 flex-col">
              Connect your wallet
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row mt-5 font-bold text-lg">
          <button
            className="px-4 py-2 bg-color5 text-color1 rounded-full sm:mx-20 my-1"
            disabled={!ztrore}
            onClick={mint}
            // isLoading={isMinting}
          >
            Get a ztrore
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-full sm:mx-20 my-1">
            Gallery
          </button>
        </div>
      </section>
      <section>
        <h2 className="text-3xl mb-5">
          ztrore, <span className="font-bold">a NFT for everyone</span>
        </h2>
        <p className="text-gray-300">
          ztrore is a DApp (Decentralized Application), specifically a
          collection of random Avatars whose metadata is stored on-chain. These
          NFTs are generated from an <a href="https://getavataaars.com/">API</a>{" "}
          and there can only be 10000 in stock
        </p>
      </section>
    </main>
  );
};

export default IndexHome;
