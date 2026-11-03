import { InternalAxiosRequestConfig } from 'axios';

import {
  AddSubAccountRequestUTA,
  CreateSubAccountRequest,
  SpotAccountSummary,
  SpotClient,
  UnifiedAPIClient,
} from '../../src/index.js';

describe('6 Nov account updates', () => {
  it('requests the V3 account summary with exactly the shared quota fields', async () => {
    const summary: SpotAccountSummary = {
      level: 0,
      maxSharedSubCount: 5,
      usedSharedSubCount: 2,
    };
    const fields: Record<keyof SpotAccountSummary, true> = {
      level: true,
      maxSharedSubCount: true,
      usedSharedSubCount: true,
    };
    const adapter = jest.fn(async (config: InternalAxiosRequestConfig) => ({
      data: { code: '200000', data: summary },
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    }));
    const client = new SpotClient({}, { adapter });

    const response = await client.getAccountSummary();
    const requiredSummary: Required<SpotAccountSummary> = response.data;

    expect(requiredSummary).toEqual(summary);
    expect(Object.keys(response.data)).toEqual(Object.keys(fields));
    expect(adapter).toHaveBeenCalledTimes(1);
    expect(adapter.mock.calls[0][0]).toMatchObject({
      method: 'get',
      url: expect.stringMatching(/\/api\/v3\/user-info$/),
    });
  });

  const modes: (
    | CreateSubAccountRequest['mode']
    | AddSubAccountRequestUTA['mode']
  )[] = [undefined, 'CLASSIC', 'UNIFIED'];

  it.each(modes)(
    'preserves sub-account mode %s for both APIs',
    async (mode) => {
      const adapter = jest.fn(async (config: InternalAxiosRequestConfig) => ({
        data: { code: '200000', data: {} },
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      }));
      const params: CreateSubAccountRequest = {
        password: '<SUB_ACCOUNT_PASSWORD>',
        subName: 'test-sub-account',
        access: 'Spot',
        ...(mode ? { mode } : {}),
      };
      const utaParams: AddSubAccountRequestUTA = { ...params };
      const classic = new SpotClient({}, { adapter });
      const uta = new UnifiedAPIClient({}, { adapter });

      await classic.createSubAccount(params);
      await uta.addSubAccount(utaParams);

      expect(adapter).toHaveBeenCalledTimes(2);
      expect(adapter.mock.calls.map(([config]) => config.url)).toEqual([
        expect.stringMatching(/\/api\/v2\/sub\/user\/created$/),
        expect.stringMatching(/\/api\/ua\/v2\/user\/sub\/create-sub-account$/),
      ]);
      for (const [config] of adapter.mock.calls) {
        expect(config.method).toBe('post');
        expect(config.params).toEqual(params);
      }
    },
  );
});
