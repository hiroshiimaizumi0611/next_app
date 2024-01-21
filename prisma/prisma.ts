import { PrismaClient } from "@prisma/client";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export let prisma: PrismaClient | undefined;

export async function getPrismaClient() {
  if (!prisma) {
    const url =
      process.env.NODE_ENV === "production"
        ? await getDatabaseUrl()
        : process.env.DATABASE_URL;

    return new PrismaClient({
      log: ["query"],
      datasources: {
        db: {
          url,
        },
      },
    });
  }

  return prisma;
}

async function getDatabaseUrl() {
  const secretId = process.env["NEXTAPP_SECRET_ARN"];
  console.log(secretId);
  const region = "ap-northeast-1";
  const client = new SecretsManagerClient({ region });

  try {
    const res = await client.send(
      new GetSecretValueCommand({
        SecretId: secretId,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    );

    if (res.SecretString) {
      const secret = JSON.parse(res.SecretString);
      const { username, password, host, port, dbname } = secret;
      return `postgresql://${username}:${password}@${host}:${port}/${dbname}`;
    }
  } catch (error) {
    console.error("Unable to retrieve secret from Secrets Manager", error);
  }

  throw new Error("Could not get DB URL");
}
