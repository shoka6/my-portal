import React from "react";

export default function Home() {
  return (
    <span className="mx-5 flex flex-col gap-4">
      <h1 className="text-xl">すきる</h1>
      <h2 className="text-lg">フロントエンド</h2>
      <div className="flex flex-col gap-4">
        <div>
          <h3>HTML</h3>
          <p>
            適切なマークアップが必須なプロダクトに携わったことが無く、本当に最低限のルールを守ったマークアップになっている。
            <br />
            業務の開発では開発速度を優先し、余暇の時間では他の興味がある技術の調べ物を優先してしまっている...。せっかく自分のホームページを作ったのでここを実験台にしたい所存。
          </p>
        </div>
        <div>
          <h3>CSS</h3>
          <p>
            Sass、Tailwind CSS、CSS Modules、StyleX を使ったことがある。Tailwind
            CSS は最初はキャッチアップ時間かかったが慣れるととても便利。
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
            ライブラリの型定義ファイル読むのにまだ時間がかかるので型パズルとかを取り組んでいきたい。また、TSKaigi
            を楽しみにしている。
          </p>
        </div>
        <div>
          <h3>React</h3>
          <p>
            メインで触ることが多く、前職から合わせて4年ほどやっていが、データフェッチライブラリ使い始めてからより面白さに気づいた。
            <br />
            state 管理では Redux（Toolkit）と recoil、データフェッチは RTK Query
            と Recoil の selector の使用経験あり。
          </p>
        </div>
        <div>
          <h3>Next.js</h3>
          <p>
            会社の社内管理画面を開発している。このページも Next で作成している。
            <br />
            社内管理画面はログイン必要 + ビルドして S3 に配置という関係で、SSG
            など使用できない機能があるため、おいおいブログページも追加してそこをを実験台にしたい所存。
          </p>
        </div>
      </div>
    </span>
  );
}
