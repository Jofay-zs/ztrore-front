import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import ztroreArtifacts from "../ztroreArtifact";

const { address, abi } = ztroreArtifacts;

const useZtrore = () => {
  const { active, library, chainId } = useWeb3React();

  const ztrore = useMemo(() => {
    if (active) {
      return new library.eth.Contract(abi, address[chainId]);
    }
  }, [active, chainId, library?.eth?.Contract]);

  return ztrore;
};

export default useZtrore;
