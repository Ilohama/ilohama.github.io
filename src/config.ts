export const port = process.env.PORT || 3000;
export const host = process.env.HOST
  ? `https://${process.env.HOST}`
  : `http://localhost:${port}`;