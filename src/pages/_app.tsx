import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "@/components/Header/NavBar";
import ScrollUp from "@/components/Layout/ScrollUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/components/config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="wide">
    <ThemeProvider attribute="class">
      <Layout>
        
        <Component {...pageProps} />
        {router.pathname.includes("auth") ||
          (!router.pathname.includes("dashboard") && <Footer />)}
           <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

        <ScrollUp />
      </Layout>
    </ThemeProvider>
    </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
  );
}
