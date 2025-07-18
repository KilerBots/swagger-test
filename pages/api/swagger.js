import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rest API',
      version: '1.0.0',
    },
    servers: [{ url: '/api' }],
  },
  apis: ['pages/api/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(swaggerSpec);
}
