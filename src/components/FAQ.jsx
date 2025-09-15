import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      id: 'One',
      question: 'Q. 自分たちが見たいジャンル/媒体はある？',
      answer: 'A. 無い場合もあります。全てのジャンルや媒体のデータが十分な数あるとは限りませんので、ぜひ一度データの有無確認などについてもお問合せください。'
    },
    {
      id: 'Two',
      question: 'Q. 契約期間はどのくらいですか？',
      answer: 'A. プランによって異なりますので詳細はお問合せください。縛りの無いプランなどもご用意しております。'
    }
  ];

  return (
    <div className="bg-light py-5">
      <div className="container px-4 py-5">
        <h2 className="text-center mb-5">よくあるご質問</h2>
        <div className="accordion w-75 mx-auto" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${faq.id}`}>
                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded="false" aria-controls={`collapse${faq.id}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${faq.id}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;