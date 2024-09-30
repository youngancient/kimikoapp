import React, { ChangeEvent } from 'react';
import { BiX } from "react-icons/bi";
import { toast } from 'react-toastify';

interface Medication {
  name: string;
  dosage: string;
  duration: string;
  interval: string;
}

interface AddMedicationModalProps {
  isOpen: boolean;
  toggleModal: (index: number) => void;
  medication: Medication;
  setMedication: (medication: Medication) => void;
  addMedication: () => void;
}

const AddMedicationModal: React.FC<AddMedicationModalProps> = ({ isOpen, toggleModal, medication, setMedication, addMedication }) => {
  
  const handleMedicationChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Medication</h2>
              <button
                onClick={()=>toggleModal}
                className="text-gray-500 hover:text-gray-700 transition-all"
              >
                <BiX size={25} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-sm">Medication Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={medication.name}
                    onChange={handleMedicationChange}
                    className="w-full text-sm outline-none px-4 py-2 border bg-slate-200 rounded-lg"
                    placeholder="e.g., Cancer Medication"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">Dosage:</label>
                  <input
                    type="text"
                    name="dosage"
                    value={medication.dosage}
                    onChange={handleMedicationChange}
                    className="w-full text-sm outline-none px-4 py-2 border bg-slate-200 rounded-lg"
                    placeholder="e.g., 2mg"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Duration:</label>
                  <input
                    type="text"
                    name="duration"
                    value={medication.duration}
                    onChange={handleMedicationChange}
                    className="w-full text-sm outline-none px-4 py-2 border bg-slate-200 rounded-lg"
                    placeholder="e.g., 2 weeks"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Interval:</label>
                  <select name="interval"
                    onChange={handleMedicationChange}
                    value={medication.interval}
                    className="w-full text-sm px-4 py-2 outline-none bg-slate-200 rounded-lg"
                  >
                    <option value="" disabled hidden>Select interval</option>
                    <option className="text-sm" value="6 hours">6 hours</option>
                    <option className="text-sm" value="8 hours">8 hours</option>
                    <option className="text-sm" value="12 hours">12 hours</option>
                    <option className="text-sm" value="24 hours">24 hours</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={addMedication}
                className="bg-blue-500 text-sm hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition-all"
              >
                Add Medication
              </button>
              <button
                onClick={()=>toggleModal}
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

export default AddMedicationModal;
