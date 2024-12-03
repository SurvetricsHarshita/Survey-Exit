import React from 'react';

function  Q9Consent() {
  const qrCodeUrl = "https://via.placeholder.com/150"; // Replace with actual QR code URL

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Broadcast Audience Research Council India (BARC India)
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          BARC India, a Joint Industry Body registered with the Ministry of Information & Broadcasting (MIB), manages the world's largest TV panel as a TV Viewership Measurement agency and generates authentic TV audience estimates - What India Watches™. 
          <br /><br />
          As a token of appreciation for their participation, the panel household also receives an incentive. 
          <br /><br />
          Please request the respondent to scan the QR code below in case they need more information.
        </p>
        <div className="flex justify-center">
          <img src={qrCodeUrl} alt="QR Code" className="w-40 h-40" />
        </div>
      </div>
    </div>
  );
}



export default Q9Consent


