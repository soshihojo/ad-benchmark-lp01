import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Q. 自分たちが見たいジャンル/媒体はある？',
      answer: 'A. 無い場合もあります。全てのジャンルや媒体のデータが十分な数あるとは限りませんので、ぜひ一度データの有無確認などについてもお問合せください。'
    },
    {
      question: 'Q. 契約期間はどのくらいですか？',
      answer: 'A. プランによって異なりますので詳細はお問合せください。縛りの無いプランなどもご用意しております。'
    }
  ];

  return (
    <div className="bg-light py-5">
      <div className="container px-4 py-5">
        <h2 className="text-center mb-5">よくあるご質問</h2>
        <div className="w-75 mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 shadow-sm">
              <div className="p-3 bg-primary text-white rounded-top">
                <p className="fw-bold mb-0 fs-5">{faq.question}</p>
              </div>
              <div className="p-3 bg-white border rounded-bottom">
                <p className="mb-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
