import React from "react";
import { HiDownload } from "react-icons/hi";

const MyCertificates = () => {
  const certificates = [
    {
      event: "Sports",
      certificateUrl: "/sports_certificate.pdf",
      certificateName: "Sports Achievement Certificate",
    },
    {
      event: "Laksh",
      certificateUrl: "/laksh_certificate.pdf",
      certificateName: "Laksh Event Certificate",
    },
    {
      event: "NSS",
      certificateUrl: "/nss_certificate.pdf",
      certificateName: "NSS Participation Certificate",
    },
    {
      event: "NCC",
      certificateUrl: "/ncc_certificate.pdf",
      certificateName: "NCC Training Certificate",
    },
  ];

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex flex-col gap-6">
        <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-6 rounded-lg h-fit self-center bg-white">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold text-blue-800 mb-4 text-center">
            My Certificates
          </h1>
          <h2 className="text-blue-800 text-md font-semibold text-center mb-6">
            Your Achieved Certificates
          </h2>

          <div className="flex flex-col gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-5 rounded-lg shadow-md bg-gradient-to-r border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {cert.event}
                  </h3>
                  <p className="text-blue-800 text-sm">
                    {cert.certificateName}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleView(cert.certificateUrl)}
                    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDownload(cert.certificateUrl)}
                    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    <HiDownload className="text-xl" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCertificates;
