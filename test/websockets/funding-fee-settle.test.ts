import {
  WebsocketClient,
  WS_KEY_MAP,
  WsKey,
  WsOperation,
  WsTopicRequest,
  WsUTAFundingFeeSettlePush,
  WsUTAFundingFeeSettlePushData,
  WsUTAFundingFeeSettleTopic,
} from '../../src/index.js';

type Internals = {
  onWsMessage(event: unknown, wsKey: WsKey, ws: unknown): Promise<unknown>;
};

class TestWebsocketClient extends WebsocketClient {
  operationEvents(
    topics: WsTopicRequest<WsUTAFundingFeeSettleTopic>[],
    operation: WsOperation,
  ) {
    return this.getWsOperationEventsForTopics(
      topics,
      WS_KEY_MAP.privateProV2,
      operation,
    );
  }

  isPrivateTopic(topic: WsTopicRequest<WsUTAFundingFeeSettleTopic>) {
    return this.isPrivateTopicRequest(topic, WS_KEY_MAP.privateProV2);
  }

  processMessage(message: WsUTAFundingFeeSettlePush, wsKey: WsKey) {
    return (this as unknown as Internals).onWsMessage(
      { type: 'message', data: JSON.stringify(message) },
      wsKey,
      {},
    );
  }
}

describe('UTA funding fee settlement', () => {
  const topics: WsTopicRequest<WsUTAFundingFeeSettleTopic>[] = [
    { topic: 'fundingFeeSettle', payload: { symbol: 'XBTUSDTM' } },
    { topic: 'fundingFeeSettleAll' },
  ];
  const operations: WsOperation[] = ['subscribe', 'unsubscribe'];

  it.each(operations)('serializes private %s requests', async (operation) => {
    const client = new TestWebsocketClient();
    const events = await client.operationEvents(topics, operation);

    expect(events.map((event) => JSON.parse(event))).toEqual([
      {
        id: expect.any(String),
        action: operation,
        channel: 'fundingFeeSettle',
        symbol: 'XBTUSDTM',
      },
      {
        id: expect.any(String),
        action: operation,
        channel: 'fundingFeeSettleAll',
      },
    ]);
    expect(topics.every((topic) => client.isPrivateTopic(topic))).toBe(true);
  });

  it.each(topics)(
    'emits $topic settlement data unchanged',
    async ({ topic }) => {
      const client = new TestWebsocketClient();
      const update = jest.fn();
      client.on('update', update);
      const data: WsUTAFundingFeeSettlePushData = {
        s: 'XBTUSDTM',
        mp: '70834.169',
        q: '-17',
        mM: 'CROSS',
        sc: 'USDT',
        ft: 1792500504000,
        ff: '-24.08361746',
        fr: '-0.02',
        pV: '-1204.180873',
      };
      const message: WsUTAFundingFeeSettlePush = {
        P: 1792500505155,
        T: topic,
        d: data,
      };

      await client.processMessage(message, WS_KEY_MAP.privateProV2);

      expect(update).toHaveBeenCalledTimes(1);
      expect(update).toHaveBeenCalledWith(
        expect.objectContaining({
          ...message,
          wsKey: WS_KEY_MAP.privateProV2,
        }),
      );
    },
  );
});
