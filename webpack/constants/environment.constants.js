module.exports = {
  // TODO: Check if we are going to use ENVIRONMENT or NODE_ENV
  IS_LOCAL: !process.env.ENVIRONMENT,
  IS_DEV: !process.env.ENVIRONMENT || process.env.ENVIRONMENT === 'dev',
  IS_QA: process.env.ENVIRONMENT === 'qa',
  IS_STAGING: process.env.ENVIRONMENT === 'staging',
  IS_PRODUCTION: process.env.ENVIRONMENT === 'production',
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
}
