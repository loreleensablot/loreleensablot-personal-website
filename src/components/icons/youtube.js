import React from 'react';

const IconYoutube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-youtube">
    <title>YouTube</title>
    <defs>
      <pattern id="diagonal-stripe-youtube" patternUnits="userSpaceOnUse" width="8" height="8">
        <path
          d="M-1,1 l2,-2
                 M0,8 l8,-8
                 M7,9 l2,-2"
          stroke="gray"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect x="0" y="0" width="24" height="24" fill="url(#diagonal-stripe-youtube)" />
    <path d="M21.6 8.6a3.12 3.12 0 0 0-2.2-2.2C17.7 6 12 6 12 6s-5.7 0-7.4.4A3.12 3.12 0 0 0 2.4 8.6c-.4 1.7-.4 4.3-.4 4.3s0 2.7.4 4.4a3.12 3.12 0 0 0 2.2 2.2c1.7.4 7.4.4 7.4.4s5.7 0 7.4-.4a3.12 3.12 0 0 0 2.2-2.2c.4-1.7.4-4.4.4-4.4s0-2.6-.4-4.3zM9.6 15.6V8.4l6 3.6-6 3.6z"></path>
  </svg>
);

export default IconYoutube;
