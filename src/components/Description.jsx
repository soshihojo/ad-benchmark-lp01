import React from 'react';

const Description = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">アドベンチマークとは？</h2>
          <p className="lead">アドベンチマークは商材ジャンルや広告媒体ごとの、配信データが確認できるツールです。</p>
          <h5 className="fw-bold mt-4">アドベンチマークで見れる指標</h5>
          <ul className="list-unstyled">
            <li><span className="material-icons me-2" style={{ verticalAlign: 'middle' }}>check_circle</span>CTR</li>
            <li><span className="material-icons me-2" style={{ verticalAlign: 'middle' }}>check_circle</span>CVR</li>
            <li><span className="material-icons me-2" style={{ verticalAlign: 'middle' }}>check_circle</span>CPC</li>
            <li><span className="material-icons me-2" style={{ verticalAlign: 'middle' }}>check_circle</span>CPA</li>
            <li><span className="material-icons me-2" style={{ verticalAlign: 'middle' }}>check_circle</span>COST</li>
          </ul>
          <p className="mt-4">上記指標のそれぞれ「平均値・中央値・下位25％・上位25％」をみることができます。</p>
          <p>データは様々な商材や予算規模などで、偏りが出過ぎないように精査しています。</p>
        </div>
        <div className="col-lg-6">
          <figure className="text-center">
            <img src="/アドベンチマーク_デモ画面.png" alt="アドベンチマーク操作画面" className="img-fluid rounded shadow-lg" />
            <figcaption className="mt-2 text-muted">アドベンチマーク操作画面</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Description;