## AWS copilot & Next.js starter

### アプリケーションの初期化
application name nextApp is invalid: value must have a length of at least 2, start with a letter, contain only lower-case letters, numbers, and hyphens, and have no consecutive or trailing hyphen
```
copilot app init [アプリケーション名]
```

### 環境のセットアップ
開発、ステージング、本番など、必要に応じて環境をセットアップします。これは、アプリケーションがデプロイされるAWSリソース（VPC、サブネットなど）を定義します。
```
copilot env init
```

### サービスのデプロイ
アプリケーションのサービス（例えば、Webサービス）を定義します。これには、サービスの名前、タイプ（「Load Balanced Web Service」など）、Dockerfileの場所などの情報が必要です。
```
copilot svc init
```

### パイプライン設定
AWS Copilotを使用してCI/CDパイプラインを作成します。次のコマンドを実行します。
```
copilot pipeline init
```

### パイプラインデプロイ
AWS Copilotを使用してCI/CDパイプラインをデプロイします。
```
copilot pipeline deploy
```

GitHubへの接続
https://docs.aws.amazon.com/ja_jp/dtconsole/latest/userguide/connections-create-github.html


### パイプラインデプロイ
データベースを作成します。データベースエンジンとしてAmazon Aurora（オーロラ）を選択します。
```
copilot storage init -t Aurora
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
