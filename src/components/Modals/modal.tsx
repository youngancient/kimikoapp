import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  medication: { name: string; dosage: string; duration: string; txHash: string } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, medication }) => {
  if (!isOpen || !medication) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 space-y-6 rounded-3xl shadow-2xl w-full max-w-lg">
        {/* Modal Header */}
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">{medication.name}</h2>
        
        {/* Medication Details */}
        <div className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-700"><strong>Dosage:</strong> {medication.dosage}</p>
            <p className="text-gray-700"><strong>Duration:</strong> {medication.duration}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-700">
              <strong>Status:</strong> <span className="p-1 px-3 rounded-lg text-white bg-gradient-to-r from-green-400 to-green-500 text-sm">Ended</span>
            </p>
          </div>

          <p className="text-gray-700 break-words">
            <strong>Transaction Hash:</strong> {medication.txHash}
          </p>

          <p className="text-gray-700">
            <strong>Interval:</strong> Every 12 hours {/* You can dynamically set this based on your data */}
          </p>

          <p className="text-gray-700">
            <strong>Completion Status:</strong> 
            <span className="p-1 px-4 rounded-lg text-white bg-gradient-to-r from-blue-400 to-blue-500 text-sm ml-2">Completed</span>
          </p>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white py-2 px-6 rounded-lg font-semibold shadow-md transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
