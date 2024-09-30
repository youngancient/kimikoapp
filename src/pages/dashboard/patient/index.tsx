import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Psidebar from "@/components/Sidebar/Patient-Sidebar";
import { BiBandAid, BiShield } from "react-icons/bi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useAccount } from "wagmi";
import { config } from "@/components/config";
import Modal from "@/components/Modals/modal";
import { useRouter } from "next/router";
import Head from "next/head";

const PatientDashboard = () => {
  const account = useAccount({ config });

  const [medications, setMedications] = useState([
    {
      name: "Aspirin",
      dosage: "100mg",
      duration: "Daily",
      txHash: "0x1a2b...3c4d",
    },
    {
      name: "Lisinopril",
      dosage: "10mg",
      duration: "Twice daily",
      txHash: "0x4e5f...6g7h",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedMedication, setSelectedMedication] = useState(null); // Selected medication state

  const handleView = (medication: any) => {
    setSelectedMedication(medication);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedication(null);
  };

  const { address } = useAccount();

  const router = useRouter();
  useEffect(() => {
    console.log(address);
    if (!address) {
      router.push("/");
    }
  }, [address]);

  return (
    <>
      <Head>
        <title>Patient | Dashboard</title>
        <meta name="description" content="Manage account" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Psidebar />
        <div className="flex-1 ml-52 flex flex-col bg-gray-50">
          <Header />
          <div className="w-11/12 shadow-md bg-white rounded-2xl mb-10 mx-auto mt-10 p-5">
            <main className="flex-1 p-8 overflow-auto">
              <header className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold text-gray-800">
                  Patient Dashboard
                </h1>
              </header>
              {account.isConnected ? (
                <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-black">
                      Patient Name
                    </h2>
                    <div className="text-sm text-gray-600 flex items-center">
                      <BiShield className="mr-2" />
                      Patient ID: {account.address}
                    </div>
                  </div>

                  <Tabs defaultValue="medications" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-md bg-blue-500">
                      <TabsTrigger
                        value="medications"
                        className="data-[state=active]:bg-blue-400 p-2 m-2 text-white rounded-md"
                      >
                        Medications
                      </TabsTrigger>
                      <TabsTrigger
                        value="progress"
                        className="data-[state=active]:bg-blue-400 p-2 m-2 text-white rounded-md"
                      >
                        Progress
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="medications">
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2 text-black">
                          Current Medications
                        </h3>
                        <ul className="space-y-2">
                          {medications.map((med, index) => (
                            <li
                              key={index}
                              className="flex dark:text-black items-center justify-between bg-gray-300 p-3 rounded-lg"
                            >
                              <div className="flex space-x-2 items-center">
                                <BiBandAid />
                                <span className="font-medium">{med.name}</span>
                              </div>
                              <div>
                                <span className="ml-2 text-sm text-gray-400">
                                  {med.dosage} - {med.duration}
                                </span>
                              </div>
                              <div className="space-x-2">
                                <button
                                  onClick={() => handleView(med)} // Open modal with selected medication
                                  className="bg-blue-500 text-sm hover:bg-blue-400 text-white py-2 px-3 rounded-lg"
                                >
                                  View
                                </button>

                                <button className="bg-blue-500 text-sm hover:bg-blue-400 text-white py-2 px-3 rounded-lg">
                                  Take Medication
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="progress">
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2 text-black">
                          Medication Adherence
                        </h3>
                        <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                          <span className="ml-2 text-gray-400">
                            Adherence Chart Placeholder
                          </span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <div>No data</div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        medication={selectedMedication}
      />
    </>
  );
};

export default PatientDashboard;
