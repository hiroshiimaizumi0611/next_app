## Getting Started

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