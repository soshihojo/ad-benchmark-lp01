import React from 'react';

const Hero = () => {
  const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPKGKK2xjsWhdV91ivuEXcXjpSUvEliSnm40lPFf7LLSoSbA/viewform?usp=header';

  return (
    <div className="px-4 py-5 my-5 text-center">
        <div className="py-5">
            <div className="container py-5">
                <h1 className="display-4 fw-bold lh-sm mb-3">広告の相場感を可視化する<br/>アドベンチマーク</h1>
                <p className="fs-4 mb-5">商材・媒体ごとの相場感と改善余地が分かる</p>
                <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mb-4">
                    サービスの詳細を聞いてみる
                </a>
                <div className="mb-5">
                    <p className="fs-5 mb-1"><span className="material-icons text-success me-2" style={{ verticalAlign: 'middle' }}>task_alt</span>新規営業における受注率が<span style={{ fontSize: '1.2em' }} className="text-primary">約2倍</span>に改善</p>
                    <p className="fs-5 mb-0"><span className="material-icons text-success me-2" style={{ verticalAlign: 'middle' }}>task_alt</span>月間<span style={{ fontSize: '1.2em' }} className="text-primary">広告費約330万円アップ</span>の実績</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;