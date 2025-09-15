import React from 'react';

const SupportedGenres = () => {
  const genres = [
    '美容・コスメ', '食品・飲料', '日用品・消耗品', '健康サプリ・ダイエット', '医療・ヘルスケア・クリニック',
    '教育・スクール', '金融（クレカ・口座開設など）', '債務整理・法務', '不動産リード', '通信・インフラ（光回線・電気ガスなど）',
    '人材紹介・求人（転職エージェントなど）', 'ジム', 'BtoBリード', 'アプリ'
  ];

  return (
    <div className="container px-4 py-5">
      <h2 className="text-center mb-5">対応商材ジャンル一例</h2>
      <div className="text-center">
        {genres.map((genre, index) => (
          <span key={index} className="badge rounded-pill bg-secondary m-1 p-2 fs-6 fw-normal">{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default SupportedGenres;