import React from 'react';
import Link from 'next/link';
import './NotFound.css';
import AnimatedButton from '@/components/AnimatedButton';

export default function NotFound() {
  return (
    <div className="page z-10 relative">
      <div className="error-container">
        <div className="screen-504">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 600"
            className="svg-anim"
          >
            {/* TV SVG Content - simplified representation */}
            <rect width="800" height="500" x="100" y="50" rx="30" fill="#333" />
            <rect width="700" height="400" x="150" y="100" rx="20" fill="#111" />
            <text x="500" y="300" fill="white" fontSize="80" textAnchor="middle" fontFamily="monospace">
              404
            </text>
            <text x="500" y="380" fill="#888" fontSize="30" textAnchor="middle" fontFamily="monospace">
              SIGNAL LOST
            </text>
          </svg>
          <div className="sub text-white flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">You seem to be lost!</h2>
            <AnimatedButton href="/" nowText="Go!" playText="Return Home" />
          </div>
        </div>
      </div>
    </div>
  );
}
