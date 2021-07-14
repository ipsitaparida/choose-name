const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development'
export default {
    port: env.PORT || 8000
}

export const logStars = (message) => {
    console.info('*****');
    console.info(message);
    console.info('*****');
}