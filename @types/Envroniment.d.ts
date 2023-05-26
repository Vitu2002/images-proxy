export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            PORT: number;
            MIN_SIZE: number;
            MAX_SIZE: number;
            MIN_QUALITY: number;
            MAX_QUALITY: number;
            DEFAULT_QUALITY: number;
            ALLOW_HOSTS: string;
            ALLOW_FORMATS: string;
        }
    }
}
