
module.exports = function (env) {
    return {
            // Railway inputs
            ADMIN_EMAIL: env.ADMIN_EMAIL,
            ADMIN_PASSWORD: env.ADMIN_PASSWORD,
            KEY: env.KEY,
            SECRET: env.SECRET,

            // Reference: https://docs.railway.app/deploy/exposing-your-app
            PORT: env.PORT,

            // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
            PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

            // Database variables from Railway PostgreSQL Plugin
            // Reference: https://docs.railway.app/plugins/postgresql
            DB_CLIENT: 'pg',
            DB_HOST: env.PGHOST,
            DB_PORT: env.PGPORT,
            DB_DATABASE: env.PGDATABASE,
            DB_USER: env.PGUSER,
            DB_PASSWORD: env.PGPASSWORD,
            STORAGE_LOCATIONS: env.STORAGE_LOCATIONS,
            STORAGE_S3_DRIVER: env.USE_S3_STORAGE,
            STORAGE_S3_KEY: env.STORAGE_S3_KEY,
            STORAGE_S3_SECRET: env.STORAGE_S3_SECRET,
            STORAGE_S3_REGION: env.STORAGE_S3_REGION,
            STORAGE_S3_BUCKET:  env.STORAGE_S3_BUCKET,
            STORAGE_S3_ENDPOINT: env.STORAGE_S3_ENDPOINT
    };
};