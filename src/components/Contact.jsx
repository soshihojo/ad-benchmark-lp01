import React from 'react';

const Contact = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPKGKK2xjsWhdV91ivuEXcXjpSUvEliSnm40lPFf7LLSoSbA/viewform?usp=header';

  return (
    <div className="container px-4 py-5 my-5 text-center">
      <h2 className="display-5 fw-bold mb-3">お問い合わせはこちら</h2>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">サービスに関するご質問、無料デモのお申し込みは<br/>こちらのフォームからお気軽にご連絡ください。</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 gap-3 btn-3d">
            サービスの詳細を聞いてみる
            <span className="material-icons ms-2" style={{ verticalAlign: 'middle' }}>open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;