import { useMemo } from "react";

const useTruncatedAddress = (account) => {
  const truncated = useMemo(
    () => `${account?.substr(0, 6)}...${account?.substr(-2)}`,
    [account]
  );

  return truncated;
};

export default useTruncatedAddress;
