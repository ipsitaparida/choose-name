const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development'
export default {
    port: env.PORT || 8000,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
}

export const logStars = (message) => {
    console.info('*****');
    console.info(message);
    console.info('*****');
}