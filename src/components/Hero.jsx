import React from 'react';

const Hero = () => {
  const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPKGKK2xjsWhdV91ivuEXcXjpSUvEliSnm40lPFf7LLSoSbA/viewform?usp=header';

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">広告の相場感を可視化する<br/>アドベンチマーク</h1>
          <p className="lead">商材・媒体ごとの相場感と改善余地が分かる</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
            <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 me-md-2">
              サービスの詳細を聞いてみる
            </a>
          </div>
          <div>
            <small className="text-muted">✓ 新規営業における受注率が約2倍に改善</small><br/>
            <small className="text-muted">✓ 月間広告費約330万円アップの実績</small>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          {/* This is where the original placeholder was, we can leave it empty or add a simple one */}
          <div className="bg-light w-100 h-100 rounded" style={{ minHeight: '400px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
