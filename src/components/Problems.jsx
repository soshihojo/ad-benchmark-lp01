import React from 'react';

const Problems = () => {
  const agencyProblems = [
    { icon: 'trending_down', text: '新規提案時の受注率が低い' },
    { icon: 'create_new_folder', text: '社内に事例がない案件の提案が作りづらい' },
    { icon: 'warning', text: '特定の媒体しか開拓出来ておらずリスクがある' },
  ];

  const inhouseProblems = [
    { icon: 'help_outline', text: '今の自分たちの運用が合っているのか分からない' },
    { icon: 'groups', text: '同業他社がどのくらいで獲れているのか知りたいと思っている' },
    { icon: 'sync_problem', text: 'どこが課題になっているのか分からず改善が進まない' },
  ];

  return (
    <div className="bg-light py-5">
      <div className="container px-4 py-5">
        <h2 className="text-center mb-5">アドベンチマークは、<br className="d-block d-md-none"/>以下のような悩みを解決するサービスです。</h2>
        <div className="row gx-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="text-center mb-4">広告代理店向け</h3>
            <div className="px-lg-5">
              {agencyProblems.map((problem, index) => (
                <div key={index} className="d-flex align-items-center mb-3 p-3 bg-white rounded shadow-sm">
                  <span className="material-icons fs-2 text-primary me-3">{problem.icon}</span>
                  <p className="mb-0">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center mb-4">インハウス運用向け</h3>
            <div className="px-lg-5">
              {inhouseProblems.map((problem, index) => (
                <div key={index} className="d-flex align-items-center mb-3 p-3 bg-white rounded shadow-sm">
                  <span className="material-icons fs-2 text-primary me-3">{problem.icon}</span>
                  <p className="mb-0">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;