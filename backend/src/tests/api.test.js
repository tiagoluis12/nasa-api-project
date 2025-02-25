const request = require('supertest');
const express = require('express');
const nasaRoutes = require('../api/routes/nasaRoutes');
const errorHandler = require('../middleware/errorHandler');

let app;

beforeAll(() => {
  app = express();
  app.use(express.json());
  app.use("/api", nasaRoutes);
  app.use(errorHandler);
});

describe('NASA API Endpoints', () => {
  describe('GET /api/apod', () => {
    it('should return Astronomy Picture of the Day data with required properties', async () => {
      const response = await request(app).get('/api/apod');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toHaveProperty('date');
      expect(response.body).toHaveProperty('explanation');
      expect(response.body).toHaveProperty('url');
      // Additional checks to ensure values are non-empty strings
      expect(typeof response.body.date).toBe('string');
      expect(response.body.date).not.toHaveLength(0);
      expect(typeof response.body.explanation).toBe('string');
      expect(response.body.explanation).not.toHaveLength(0);
      expect(typeof response.body.url).toBe('string');
      expect(response.body.url).not.toHaveLength(0);
    });
  });

  describe('GET /api/mars-photos', () => {
    it('should return Mars photos data with a photos array', async () => {
      const response = await request(app).get(
        '/api/mars-photos?rover=curiosity&earth_date=2020-07-01'
      );
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toHaveProperty('photos');
      expect(Array.isArray(response.body.photos)).toBe(true);
      // Optionally, if you expect at least one photo:
      // expect(response.body.photos.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/epic', () => {
    it('should return EPIC data as an array', async () => {
      const response = await request(app).get('/api/epic');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(Array.isArray(response.body)).toBe(true);
      // If there is at least one item, verify it has expected properties
      if (response.body.length > 0) {
        expect(response.body[0]).toHaveProperty('identifier');
        expect(response.body[0]).toHaveProperty('caption');
      }
    });
  });
});
