import React from 'react';

const DataSource = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center p-4 border rounded-3">
            <span className="material-icons fs-1 text-muted mb-3">verified_user</span>
            <h3 className="fw-bold mb-3">アドベンチマーク内のデータソース</h3>
            <p className="lead mb-0">
              提携代理店/ご利用企業の許諾データのみ。個社数値や特定可能な情報の開示はありません。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSource;