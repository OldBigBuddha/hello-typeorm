# Hello TypeORM

TypeORM を触って見るためのコード。

## 事前準備

VSCode から Docker コンテナに入れるようにしておく。

参考: [Get started with development Containers in Visual Studio Code](https://code.visualstudio.com/docs/remote/containers-tutorial)

ローカルにコードをクローンしたら依存ライブラリをインストールしておく（コンテナへリモート接続する前にしておくこと）。

## 実行

VSCode からコンテナに接続する。はじめてコンテナを起動させるときは勝手にマイグレーションが走る。

`npm run dev` でプログラムを実行できる。

TypeORM のログが鬱陶しい場合は `.env.local` の `DB_ENABLE_LOGGING` を `false` にしておく。
