import React from 'react';

const Description = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">サービスの説明</h2>
          <p className="lead">アドベンチマークは商材ジャンルや広告媒体ごとの、広告配信データの各指標（ CTR / CVR / CPC / CPA / COST） をそれぞれ「平均・中央値・下位25％・上位25％」で確認できるサービスです。</p>
          <p>データは様々な商材や予算規模などで、偏りが出過ぎないように精査しています。</p>
        </div>
        <div className="col-lg-6">
          <div className="bg-white p-4 rounded shadow-lg" style={{ minHeight: '350px' }}>
            <h5 className="text-center text-muted mb-3">指標パフォーマンス（サンプル）</h5>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-bold">CTR</span>
                <span className="badge bg-success">上位25%</span>
              </div>
              <div className="progress" style={{height: '20px'}}>
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '82%' }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">82%</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-bold">CVR</span>
                <span className="badge bg-info text-dark">平均</span>
              </div>
              <div className="progress" style={{height: '20px'}}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-bold">CPA</span>
                <span className="badge bg-warning text-dark">下位25%</span>
              </div>
              <div className="progress" style={{height: '20px'}}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '28%' }} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">28%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;