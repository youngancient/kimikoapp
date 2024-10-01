import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "@/components/Header";
import Psidebar from "@/components/Sidebar/Patient-Sidebar";
import { useAccount } from "wagmi";
import { config } from "@/components/config";
import { useRouter } from "next/router";
import Head from "next/head";
// import {ethers} from ethers;

const RewardPage = () => {
  const account = useAccount(config);

  const [rewardEarned, setRewardEarned] = useState(0);
  const [beneficiary, setBeneficiary] = useState("");
  const [rewardClaimed, setRewardClaimed] = useState(0);
  const [newBeneficiary, setNewBeneficiary] = useState("");

  // Handle beneficiary input change
  const handleBeneficiaryChange = (e) => {
    setNewBeneficiary(e.target.value);
  };

  // Function to update beneficiary
  const updateBeneficiary = () => {
    if (newBeneficiary.length !== 42 || !newBeneficiary.startsWith("0x")) {
      toast.error(
        "Invalid beneficiary address. Please enter a valid Ethereum address."
      );
      return;
    }

    setBeneficiary(newBeneficiary);
    toast.success("Beneficiary updated successfully!");
    setNewBeneficiary("");
  };

  // Function to claim rewards
  const claimReward = () => {
    if (rewardEarned <= rewardClaimed) {
      toast.error("No rewards left to claim.");
      return;
    }

    setRewardClaimed(rewardClaimed + (rewardEarned - rewardClaimed));
    toast.success("Rewards claimed successfully!");
  };

  const { address } = useAccount();

  const router = useRouter();
  useEffect(() => {
    if (!address) {
      router.push("/");
    }
  }, [address]);

  return (
    <>
      <Head>
        <title>Rewards</title>
        <meta name="description" content="view rewards" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Psidebar />
        <div className="flex-1 ml-52 flex flex-col bg-gray-50">
          <Header />
          <div className="flex justify-center dark:text-black items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 space-y-3 shadow-lg rounded-lg w-full max-w-md">
              <h1 className="text-xl font-semibold mb-4 text-center">
                Reward Dashboard
              </h1>

              {/* Reward Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4 bg-white shadow p-5">
                  <h2 className="text-sm font-semibold">Reward Earned</h2>
                  <p className="text-gray-700 text-center">
                    {rewardEarned} KMK
                  </p>
                </div>

                <div className="mb-4 bg-white shadow p-5">
                  <h2 className="text-sm font-semibold">Reward Claimed</h2>
                  <p className="text-gray-700 text-center">
                    {rewardClaimed} KMK
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-sm font-semibold">Beneficiary</h2>
                <p className="text-gray-700 text-sm">{account.address}</p>
              </div>

              {/* Change Beneficiary */}
              <div className="mb-7">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold">Change Beneficiary</h2>
                  <input
                    type="text"
                    value={newBeneficiary}
                    onChange={handleBeneficiaryChange}
                    placeholder="Enter new beneficiary address"
                    className="w-full p-2 border rounded-lg text-sm bg-gray-100 outline-none"
                  />
                </div>
                <button
                  onClick={updateBeneficiary}
                  className="mt-2 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md transition-all"
                >
                  Update Beneficiary
                </button>
              </div>

              {/* Claim Reward Button */}
              <div className="mt-6">
                <button
                  onClick={claimReward}
                  className="w-full bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-lg shadow-md transition-all"
                >
                  Claim Reward
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardPage;
