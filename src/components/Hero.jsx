import React from 'react';

const Hero = () => {
  const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPKGKK2xjsWhdV91ivuEXcXjpSUvEliSnm40lPFf7LLSoSbA/viewform?usp=header';

  const heroStyle = {
    backgroundImage: `url('/lp01-背景.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={heroStyle}>
      <div className="text-center text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '100px 0' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">広告の相場感を可視化する<br />アドベンチマーク</h1>
          <p className="fs-4 mb-5">商材・媒体ごとの相場感と改善余地が分かる</p>
          <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mb-5">
            サービス詳細を聞いてみる
          </a>
          <div className="row justify-content-center gx-4">
            <div className="col-md-5 col-lg-4">
              <div className="p-3 bg-white text-dark rounded shadow-sm">
                <p className="mb-1">新規営業における受注率が</p>
                <p className="display-5 fw-bold text-primary mb-0">約2倍に改善</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 mt-3 mt-md-0">
              <div className="p-3 bg-white text-dark rounded shadow-sm">
                <p className="mb-1">月間広告費</p>
                <p className="display-5 fw-bold text-primary mb-0">約330万円アップ</p>
                <p className="mb-0">の実績</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;