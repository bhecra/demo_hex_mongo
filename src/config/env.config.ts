export const EnvConfiguration = () => ({
  environment: process.env.ENVIRONMENT || 'local',
  port: process.env.PORT || 3002,
});
