import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface LandingPage {
  id: number;
  name: string;
  image?: string;
  characteristics: string;
}

interface LandingPageGalleryProps {
  landingPages: LandingPage[];
}

const LandingPageGallery2: React.FC<LandingPageGalleryProps> = ({ landingPages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % landingPages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [landingPages.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        {landingPages[currentImageIndex]?.image && (
          <img
            src={landingPages[currentImageIndex]?.image}
            alt={landingPages[currentImageIndex]?.name}
            className="my-2 mx-auto w-full md:max-w-lg rounded-lg shadow-lg object-cover"
          />
        )}
      </div>
      <div>
        <table className="table-auto w-full bg-white border border-gray-200 rounded-lg shadow-lg text-center text-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b">Concepto</th>
              <th className="px-6 py-3 border-b">Detalle</th>
              <th className="px-6 py-3 border-b">Check</th>
            </tr>
          </thead>
          <tbody>
            {landingPages.map((landingPage) => (
              <tr key={landingPage.id}>
                <td className="px-6 py-4 border-b">{landingPage.name}</td>
                <td className="px-6 py-4 border-b">{landingPage.characteristics}</td>
                <td className="px-6 py-4 border-b flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          <Link href="/ContactBlog">
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              !Lo quiero¡
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageGallery2;
