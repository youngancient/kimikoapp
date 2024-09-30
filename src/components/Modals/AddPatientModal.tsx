import React, { ChangeEvent } from 'react';
import { BiX } from "react-icons/bi";
import { isAddress } from 'viem';
import { toast } from 'react-toastify';

interface Patient {
  name: string;
  address: string;
}

interface AddPatientModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  currentPatient: Patient;
  setCurrentPatient: (patient: Patient) => void;
  savePatient: () => void;
}

const AddPatientModal: React.FC<AddPatientModalProps> = ({ isOpen, toggleModal, currentPatient, setCurrentPatient, savePatient }) => {
  
  const handlePatientChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === 'address' && !isAddress(value)) {
      toast.error('Please enter a valid Ethereum address.');
      return;
    }
    setCurrentPatient({ ...currentPatient, [name]: value });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Patient</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 transition-all"
              >
                <BiX size={25} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">Patient Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={currentPatient.name}
                    onChange={handlePatientChange}
                    className="w-full text-sm px-4 outline-none py-2 border bg-slate-200 rounded-lg"
                    placeholder="Enter patient's name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Patient Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={currentPatient.address}
                    onChange={handlePatientChange}
                    className="w-full text-sm px-4 outline-none py-2 border bg-slate-200 rounded-lg"
                    placeholder="e.g., 0x455584fa3ecd9s"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={savePatient}
                className="bg-blue-500 text-sm hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition-all"
              >
                Save Patient
              </button>
              <button
                onClick={toggleModal}
                className="ml-4 bg-gray-300 text-sm hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPatientModal;
