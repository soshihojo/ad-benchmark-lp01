import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 my-4 border-top">
      <p className="text-center text-muted">© {new Date().getFullYear()} アドベンチマーク</p>
    </footer>
  );
};

export default Footer;
