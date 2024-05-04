import React from "react";

const About: React.FC = () => {
  return (
    <div className="mx-6 flex flex-col gap-2">
      <h1 className="mb-4 text-2xl font-bold">About</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">名前</h2>
          <p>kei</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">年齢</h2>
          <p>27歳</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">経歴</h2>
          <ul>
            <li>
              2020年4月 ~ 2023年11月：クラウドストレージサービスのWebエンジニア
            </li>
            <li>
              2023年12月 ~
              現在：建設現場向け映像配信サービスのソフトウェアエンジニア
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
