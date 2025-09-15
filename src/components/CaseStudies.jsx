import React from 'react';

const CaseStudies = () => {
  return (
    <div className="bg-light py-5">
      <div className="container px-4 py-5">
        <h2 className="text-center mb-5">事例・導入効果</h2>
        <div className="row g-5 align-items-stretch">
          {/* Case Study 1 */}
          <div className="col-lg-6 d-flex">
            <div className="card h-100 w-100 shadow-sm">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold">新規営業の受注率が <span className="text-primary">約2倍</span> に改善</h5>
                <div className="flex-grow-1 d-flex justify-content-around align-items-end my-4" style={{ height: '200px' }}>
                  <div className="text-center">
                    <div className="bg-secondary rounded-top" style={{ width: '60px', height: '50px' }}></div>
                    <p className="mb-0 mt-2 fw-bold">導入前 20%</p>
                  </div>
                  <span className="material-icons fs-1 text-primary mx-3">arrow_right_alt</span>
                  <div className="text-center">
                    <div className="bg-primary rounded-top" style={{ width: '60px', height: '95px' }}></div>
                    <p className="mb-0 mt-2 fw-bold">導入後 38%</p>
                  </div>
                </div>
                <p className="mt-auto">アドベンチマークの数値を根拠として、より具体的な提案を作成できるようになったことで、受注率が改善しました。</p>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="col-lg-6 d-flex">
            <div className="card h-100 w-100 shadow-sm">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold">月間広告費用 <span className="text-primary">330万円</span> アップ</h5>
                <div className="flex-grow-1 d-flex justify-content-center align-items-center my-4 text-success" style={{ height: '200px' }}>
                  <span className="material-icons" style={{ fontSize: '6rem' }}>trending_up</span>
                  <div className="ms-3">
                    <p className="display-4 fw-bold mb-0">+330万円</p>
                    <p className="fs-5 mb-0 text-end">(粗利 約67万円)</p>
                  </div>
                </div>
                <p className="mt-auto">自社では配信していなかった媒体のうち、獲得効率が良い媒体を見つけて配信することで月間広告費が大きくアップしました。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
