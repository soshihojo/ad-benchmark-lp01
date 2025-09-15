import React from 'react';

const Hero = () => {
  const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPKGKK2xjsWhdV91ivuEXcXjpSUvEliSnm40lPFf7LLSoSbA/viewform?usp=header';

  const heroStyle = {
    backgroundImage: `url('/iStock-2148659111.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textShadow: '0 2px 4px rgba(0,0,0,0.7)'
  };

  return (
    <div style={heroStyle} className="py-5 text-center">
        <div className="py-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}> {/* Dark overlay for better text visibility */}
            <div className="container py-5">
                <h1 className="display-4 fw-bold lh-sm mb-3">広告の相場感を可視化する<br/>アドベンチマーク</h1> {/* lh-sm for line height */}
                <p className="fs-4 mb-5">商材・媒体ごとの相場感と改善余地が分かる</p>
                <a href={contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mb-4">
                    サービスの詳細を聞いてみる
                </a>
                <div className="mb-5">
                    <p className="fs-5 mb-1"><span className="material-icons text-success me-2" style={{ verticalAlign: 'middle' }}>task_alt</span>新規営業における受注率が約2倍に改善</p>
                    <p className="fs-5 mb-0"><span className="material-icons text-success me-2" style={{ verticalAlign: 'middle' }}>task_alt</span>月間<span style={{ fontSize: '1.2em' }} className="text-primary">広告費約330万円アップ</span>の実績</p>
                </div>
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-md-5 col-lg-4">
                        <div className="p-3 bg-white text-dark rounded shadow">
                            <p className="mb-1">新規営業における受注率が</p>
                            <p className="display-5 fw-bold text-primary mb-0">約2倍に改善</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 mt-3 mt-md-0">
                        <div className="p-3 bg-white text-dark rounded shadow">
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
