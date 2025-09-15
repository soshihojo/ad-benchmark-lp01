import React from 'react';

const CaseStudies = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="text-center mb-5">事例・導入効果</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
        <div className="col d-flex">
          <div className="card h-100 w-100 text-white bg-primary shadow-lg rounded-3">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <span className="material-icons fs-1 me-3">trending_up</span>
                <h5 className="card-title mb-0 fw-bold">新規営業の受注率が20% → 38%に改善</h5>
              </div>
              <p className="card-text">アドベンチマークの数値を根拠として、より具体的な提案を作成できるようになったことで、受注率が約2倍に改善しました。</p>
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card h-100 w-100 text-white bg-success shadow-lg rounded-3">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <span className="material-icons fs-1 me-3">monetization_on</span>
                <h5 className="card-title mb-0 fw-bold">月間広告費用330万円アップ</h5>
              </div>
              <p className="card-text">自社では配信していなかった媒体のうち、獲得効率が良い媒体を見つけて配信することで月間広告費が大きくアップ（粗利約67万円）。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;