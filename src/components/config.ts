import { http, createConfig } from "wagmi";
import { liskSepolia, scroll, scrollSepolia, sepolia,  } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [scroll, scrollSepolia],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [scroll.id]: http(),
    [scrollSepolia.id]: http(),
  },
});