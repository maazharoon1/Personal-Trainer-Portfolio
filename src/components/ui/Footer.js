import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 py-3 flex flex-col md:flex-row justify-center items-center gap-1 text-sm text-muted-foreground">
      <span>
        © {new Date().getFullYear()} <strong>Hamza Haroon</strong>. All rights reserved.
      </span>
      <span>
        Built by{' '}
        <a
          href="https://maazportfolio-2025.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Maaz Haroon
        </a>
      </span>
    </footer>
  );
};

export default Footer;
