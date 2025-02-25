jest.mock('../infra/external/nasaApi');

const nasaService = require('../domain/services/nasaService');
const nasaApi = require('../infra/external/nasaApi');

describe('nasaService Domain Tests', () => {
  describe('fetchApod', () => {
    it('should return APOD data', async () => {
      const mockData = {
        date: '2023-03-29',
        explanation: 'Test explanation',
        url: 'https://example.com/image.jpg',
      };
      nasaApi.getApod.mockResolvedValue(mockData);
      const result = await nasaService.fetchApod();
      expect(result).toEqual(mockData);
      expect(nasaApi.getApod).toHaveBeenCalled();
    });
  });

  describe('fetchMarsPhotos', () => {
    it('should return Mars photos data', async () => {
      const mockData = {
        photos: [
          {
            id: 1,
            img_src: 'http://example.com/image.jpg',
          },
        ],
      };
      nasaApi.getMarsPhotos.mockResolvedValue(mockData);
      const result = await nasaService.fetchMarsPhotos({
        rover: 'curiosity',
        earth_date: '2020-07-01',
      });
      expect(result).toEqual(mockData);
      expect(nasaApi.getMarsPhotos).toHaveBeenCalledWith(
        'curiosity',
        '2020-07-01'
      );
    });
  });

  describe('fetchEpic', () => {
    it('should return EPIC data', async () => {
      const mockData = [
        {
          identifier: 'EPIC1',
          caption: 'Test caption',
        },
      ];
      nasaApi.getEpic.mockResolvedValue(mockData);
      const result = await nasaService.fetchEpic();
      expect(result).toEqual(mockData);
      expect(nasaApi.getEpic).toHaveBeenCalled();
    });
  });
});
