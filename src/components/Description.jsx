import React from 'react';

const Description = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">アドベンチマークとは？</h2>
          <p className="lead">アドベンチマークは商材ジャンルや広告媒体ごとの、広告配信データの各指標（ CTR / CVR / CPC / CPA / COST） をそれぞれ「平均・中央値・下位25％・上位25％」で確認できるサービスです。</p>
          <p>データは様々な商材や予算規模などで、偏りが出過ぎないように精査しています。</p>
        </div>
        <div className="col-lg-6">
          <figure className="text-center">
            <img src="/アドベンチマーク_UI.jpg" alt="アドベンチマーク操作画面" className="img-fluid rounded shadow-lg" />
            <figcaption className="mt-2 text-muted">アドベンチマーク操作画面</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Description;