import React from 'react';

const UseCases = () => {
  const useCases = [
    { icon: 'analytics', title: '現状把握と目標設定', description: '媒体×商材×CV定義×価格帯などごとで中央値を基準に、自社のパフォーマンスがどの程度かを判断し目標設定を行う' },
    { icon: 'error_outline', title: '異常検知', description: '下位25％を下回った指標（CTR/CVR/CPA など）を洗い出し、早期に原因の分析と対策を行う' },
    { icon: 'priority_high', title: '施策の優先度付け', description: '改善余地が大きい指標を特定し改善の優先度付けを行う' },
    { icon: 'pie_chart', title: '媒体配分の最適化', description: '自社で扱っている商材で獲得効率が良い穴場媒体を見つける' },
    { icon: 'price_check', title: '入札・単価調整', description: 'CPCの下位25％、上位25％などを元に、適正入札のレンジを把握し無駄なクリック単価の高騰を抑制' },
    { icon: 'rule', title: '案件選定', description: '市場の数値感からアフィリエイト案件の選定材料とする' },
  ];

  return (
    <div className="bg-light py-5">
      <div className="container px-4 py-5">
        <h2 className="text-center mb-5">活用方法の一例</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="col d-flex">
              <div className="card h-100 w-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <span className="material-icons fs-1 text-primary me-3">{useCase.icon}</span>
                    <h5 className="card-title mb-0 fw-bold">{useCase.title}</h5>
                  </div>
                  <p className="card-text flex-grow-1">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;