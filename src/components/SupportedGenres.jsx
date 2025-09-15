import React from 'react';

const SupportedGenres = () => {
  const genres = [
    { name: '美容・コスメ', icon: 'spa' },
    { name: '食品・飲料', icon: 'restaurant' },
    { name: '日用品・消耗品', icon: 'shopping_cart' },
    { name: '健康サプリ・ダイエット', icon: 'fitness_center' },
    { name: '医療・ヘルスケア・クリニック', icon: 'local_hospital' },
    { name: '教育・スクール', icon: 'school' },
    { name: '金融（クレカ・口座開設など）', icon: 'account_balance' },
    { name: '債務整理・法務', icon: 'gavel' },
    { name: '不動産リード', icon: 'home_work' },
    { name: '通信・インフラ（光回線・電気ガスなど）', icon: 'wifi' },
    { name: '人材紹介・求人（転職エージェントなど）', icon: 'person_add' },
    { name: 'ジム', icon: 'fitness_center' },
    { name: 'BtoBリード', icon: 'business_center' },
    { name: 'アプリ', icon: 'phone_android' }
  ];

  return (
    <div className="container px-4 py-5">
      <h2 className="text-center mb-5">対応商材ジャンル一例</h2>
      <div className="text-center">
        {genres.map((genre, index) => (
          <span key={index} className="badge rounded-pill bg-secondary m-1 p-2 fs-6 fw-normal d-inline-flex align-items-center">
            <span className="material-icons me-1" style={{ verticalAlign: 'middle', fontSize: '1em' }}>{genre.icon}</span>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SupportedGenres;