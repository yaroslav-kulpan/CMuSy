// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'development' | 'production' | 'test';
      APP_NAME: string;
      // HTTP
      HTTP_PREFIX: string;
      HTTP_HOST: string;
      HTTP_PORT: string;
      // REDIS
      REDIS_URL: string;
      REDIS_PORT: string;
      // AUTH
      JWT_PRIVATE_KEY: string;
      JWT_PUBLIC_KEY: string;
      // EMAIL
      EMAIL_ID: string;
      EMAIL_PASS: string;
      EMAIL_HOST: string;
      EMAIL_PORT: string;
      EMAIL_FROM: string;
      // TYPEORM
      TYPEORM_TYPE: string;
      TYPEORM_URL: string;
    }
  }
}

export {}
