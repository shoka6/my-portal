import React from "react";

export default function Home() {
  return (
    <span className="mx-5 flex flex-col gap-4">
      <h1 className="text-xl">すきる</h1>
      <span className="flex flex-col gap-6">
        <span>
          <h2 className="text-lg">フロントエンド</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3>HTML</h3>
              <p>
                適切なマークアップが必須なプロダクトに携わったことが無く、本当に最低限のルールを守ったマークアップになっている。
                <br />
                業務の開発では開発速度を優先し、余暇の時間では他の興味がある技術の調べ物を優先してしまっている...。せっかく自分のホームページを作ったのでここを実験台にする予定。
              </p>
            </div>
            <div>
              <h3>CSS</h3>
              <p>
                Sass、Tailwind CSS、CSS Modules、StyleX
                を使ったことがある。Tailwind CSS
                は最初はキャッチアップ時間かかったが慣れるととても便利。
                <br />
                モバイル対応、ダークモード対応はやったことがあまりないがやってみたい（時にダークモード）。プリセットももう少し機能開発が落ち着いたら導入したい。
              </p>
            </div>
            <div>
              <h3>TypeScript</h3>
              <p>
                バックエンド開発に使用したことはないためこちらに記載。
                <br />
                コードは実装者が書く時間より読む時間のほうが遥かに長いと思っているため、詳細に型定義をおこなっている（string
                ではなくリテラルの union 型にしたりなど）。
                <br />
                残念ながら現職のプロダクトコードは strict true
                にできていなかったりするのでいかに移行していくかを模索中。
                <br />
                ライブラリの型定義ファイル読むのにまだ時間がかかるので型パズルとかを取り組んでいきたい。TSKaigi
                楽しみ。
              </p>
            </div>
            <div>
              <h3>React</h3>
              <p>
                メインで触ることが多く、前職から合わせて4年ほどやっていが、データフェッチライブラリ使い始めてからより面白さに気づいた。
                <br />
                state 管理では Redux（Toolkit）と recoil、データフェッチは RTK
                Query と Recoil の selector の使用経験あり。
              </p>
            </div>
            <div>
              <h3>Next.js</h3>
              <p>
                会社の社内管理画面を開発している。このページも Next
                で作成している。
                <br />
                社内管理画面はログイン必要 + ビルドして S3
                に配置という関係で、SSG
                など使用できない機能があるため、おいおいブログページも追加してそこをを実験台にしたい。
              </p>
            </div>
          </div>
        </span>
        <span>
          <h2 className="text-lg">バックエンド</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3>Rails</h3>
              <p>
                Rails4 を前職で 3 年ほど触って、現職では Rails7
                を使っている。前職で Fat Controller
                に苦しめられたのでできるだけビジネスロジックを Model
                に集約するよう心がけてる。
                <br />
                テストは Rspec
                を書いたことがある。「書いたことがある」というのは前職 Join
                時点でテストの実行に時間がかかりすぎて形骸化していた +
                開発速度優先のため、テストを有効活用できた経験はない。
              </p>
            </div>
            <div>
              <h3>Go</h3>
              <p>
                前職ではElasticsearch
                を使った検索機能のマイクロサービスを、現職では IoT デバイス内の
                MQTT クライアントとして使用。
                <br />
                Go
                でクエリ実行などはしたことない。主に渋川さんの書籍などは読んで学習はしているが、書く頻度がそこまで高くなく毎回書き方を思い出すのに時間がかかっている。
              </p>
            </div>
          </div>
        </span>
        <span>
          <h2 className="text-lg">インフラ</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3>Docker</h3>
              <p>
                コンテナ間のネットワークを追加したりの機能追加程度が多い。後は
                Circle CI でカスタムイメージを使うためにイメージを修正したり。
              </p>
            </div>
            <div>
              <h3>Linux</h3>
              <p>
                現職に Join してから触り始めた。IoT
                デバイスの機能追加や不具合調査などを行なっている。
              </p>
            </div>
            <div>
              <h3>Ansible</h3>
              <p>
                現職に Join してから触り始めた。IoT
                デバイスのセットアップで使用。
              </p>
            </div>
            <div>
              <h3>AWS</h3>
              <p>
                基本的に現職に Join してから触り始めた。S3 のみ前職で S3
                互換ストレージを使用していた。 IAM, Cognito, S3, Lambda,
                CloudWatch, CloudFront, IoT Core, API Gateway, Amplify
                あたりを使っている。
              </p>
            </div>
          </div>
        </span>
        <span>
          <h2 className="text-lg">その他</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3>Elasticsearch</h3>
              <p>
                7.8 くらいから 8.4 くらいまで使ってた。2
                年弱やらなかったアップデートを対応したり、mapping
                の更新をしたりしていた。
                <br />
                APM を使ってパフォーマンスの可視化をやってみたい（LT
                してみたけど採用には至らず）。
              </p>
            </div>
            <div>
              <h3>Python</h3>
              <p>Lambda を書くのにのみ使用。</p>
            </div>
          </div>
        </span>
      </span>
    </span>
  );
}
