import React from 'react';

const Hero = () => {
  const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPKGKK2xjsWhdV91ivuEXcXjpSUvEliSnm40lPFf7LLSoSbA/viewform?usp=header';

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">広告の相場感を可視化する<br/>アドベンチマーク</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">商材・媒体ごとの相場感と改善余地が分かる</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
          <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 gap-3">
            サービスの詳細を聞いてみる
          </a>
        </div>
        <div className="mt-5">
          <p className="text-muted">✓ 新規営業における受注率が約2倍に改善</p>
          <p className="text-muted">✓ 月間広告費約330万円アップの実績</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;