import React from "react";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // Prevents clicks inside the modal from bubbling up and closing it.
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // The overlay is positioned 'fixed' to the viewport.
    // The z-index places it on top of other content.
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking the overlay
    >
      {/* Modal Panel */}
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg text-gray-800 p-6 md:p-8 flex flex-col"
        onClick={handleModalContentClick}
      >
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto max-h-[60vh] pr-2 space-y-4 text-sm text-gray-600">
          <p>
            These are the Terms and Conditions governing the use of this
            Service and the agreement that operates between You and the
            Company. These Terms and Conditions set out the rights and
            obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions.
            These Terms and Conditions apply to all visitors, users and
            others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
          <p>
            You represent that you are over the age of 18. The Company does
            not permit those under 18 to use the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the
            Company. Our Privacy Policy describes Our policies and procedures
            on the collection, use and disclosure of Your personal information
            when You use the Application or the Website and tells You about
            Your privacy rights and how the law protects You. Please read Our
            Privacy Policy carefully before using Our Service.
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;