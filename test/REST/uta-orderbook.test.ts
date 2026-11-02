import { InternalAxiosRequestConfig } from 'axios';

import { GetOrderBookRequestUTA, UnifiedAPIClient } from '../../src/index.js';

describe('UTA order book', () => {
  const limits: GetOrderBookRequestUTA['limit'][] = [
    '1',
    '20',
    '21',
    '50',
    '100',
    '101',
    '500',
    '501',
    '1000',
    'FULL',
  ];

  it.each(limits)(
    'passes depth %s through without credentials',
    async (limit) => {
      const data = { code: '200000', data: { bids: [], asks: [] } };
      const adapter = jest.fn(async (config: InternalAxiosRequestConfig) => ({
        data,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      }));
      const client = new UnifiedAPIClient({}, { adapter });
      const params: GetOrderBookRequestUTA = {
        tradeType: 'SPOT',
        symbol: 'BTC-USDT',
        limit,
      };

      await expect(client.getOrderBook(params)).resolves.toEqual(data);
      expect(adapter).toHaveBeenCalledTimes(1);
      expect(adapter.mock.calls[0][0]).toMatchObject({
        method: 'get',
        url: expect.stringContaining('/api/ua/v2/market/orderbook'),
        params,
      });
    },
  );
});
