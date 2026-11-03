export interface WsDataEvent<TData = any, TWSKey = string> {
  data: TData;
  table: string;
  wsKey: TWSKey;
}

export interface MessageEventLike<TDataType = string> {
  target: WebSocket;
  type: 'message';
  data: TDataType;
}

export function isMessageEvent(msg: unknown): msg is MessageEventLike {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike;
  return message['type'] === 'message' && typeof message['data'] === 'string';
}

/**
 * UTA WebSocket private balance push (`channel: balance`).
 * Field `cS` added 2026.07.01 (platform-level margin collateral status).
 * @see https://www.kucoin.com/docs-new/3470231w0
 */
export interface WsUTABalancePushData {
  U: number | string;
  a: string;
  b: string;
  c: string;
  e?: string;
  h: string;
  l?: string;
  /** Platform-level margin collateral status (UNIFIED balance pushes) */
  cS?: string;
}

export interface WsUTABalancePush {
  P: number;
  T: string;
  d: WsUTABalancePushData;
}

/**
 * UTA WebSocket private position push (`channel: position` / `positionAll`).
 * Fields `pM` and `r` added 2026.06.03; `adl` added 2026.05.15.
 * @see https://www.kucoin.com/docs-new/3470233w0
 */
export interface WsUTAPositionPushData {
  O?: number;
  U: number;
  l?: string;
  q: string;
  s: string;
  bP?: string;
  eP?: string;
  iM?: string;
  lP?: string;
  mM: string;
  /** Mark price */
  mP?: string;
  pV?: string;
  pi?: string;
  mmr?: string;
  mtM?: string;
  rPL?: string;
  uPL?: string;
  /** Margin occupied by the futures position (as of 2026.06.03) */
  pM?: string;
  /** Isolated futures risk ratio, e.g. 0.65 = 65% (as of 2026.06.03) */
  r?: string;
  /** ADL ranking percentile, e.g. 0.46 = 46% (as of 2026.05.15) */
  adl?: string;
}

export interface WsUTAPositionPush {
  P: number;
  T: string;
  d: WsUTAPositionPushData;
}

/**
 * UTA WebSocket private funding fee settlement channels. Added 2026.11.06.
 * @see https://www.kucoin.com/docs-new/3470415w0
 */
export type WsUTAFundingFeeSettleTopic =
  | 'fundingFeeSettle'
  | 'fundingFeeSettleAll';

export interface WsUTAFundingFeeSettlePushData {
  s: string;
  mp: string;
  q: string;
  mM: string;
  sc: string;
  ft: number;
  ff: string;
  fr: string;
  pV: string;
}

export interface WsUTAFundingFeeSettlePush {
  P: number;
  T: WsUTAFundingFeeSettleTopic;
  d: WsUTAFundingFeeSettlePushData;
}

/**
 * UTA WebSocket public Funding Fee channel (`channel: fundingFee`, FUTURES).
 * Added 2026.07.01.
 */
export interface WsUTAFundingFeePublicPush {
  T: string;
  P: number;
  d: {
    s: string;
    fR?: string;
    fT?: number;
    /** Current funding rate (UTA V2 `funding-fee` channel) */
    fr?: string;
    /** Funding time (UTA V2) */
    ft?: number;
    /** Last settled funding fee rate (UTA V2 2026.08.27) */
    lfr?: string;
    nt?: number;
    gl?: number;
    fc?: string;
    ff?: string;
    M?: number;
    [key: string]: string | number | boolean | undefined;
  };
}

/**
 * UTA WebSocket public All Funding Fee Rates channel (`channel: funding-fee-all-symbols`).
 * Added 2026.08.27.
 * @see https://www.kucoin.com/docs-new/3470412w0
 */
export interface WsUTAAllFundingFeeRatesPublicPush {
  T: string;
  P: number;
  d: WsUTAFundingFeePublicPush['d'][];
}

/**
 * UTA WebSocket private execution push (`channel: execution`).
 * Field `fP` added 2026.09.21. Empty before 2026.09.05 (UTC-8).
 * When fT is ADL/LIQUID/SETTLEMENT, q is a positive value (2026.08.20).
 * @see https://www.kucoin.com/docs-new/3470407w0
 */
export interface WsUTAExecutionPushData {
  oi?: string;
  s?: string;
  S?: string;
  oT?: string;
  p?: string;
  q?: string;
  ti?: string;
  E?: number;
  lR?: string;
  f?: string;
  fC?: string;
  fT?: string;
  ci?: string;
  /** Fill PnL. Empty string when data is before 2026.09.05 (UTC-8) */
  fP?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface WsUTAExecutionPush {
  T: string;
  P: number;
  d: WsUTAExecutionPushData;
}

/**
 * UTA WebSocket private order push (`channel: order` / `orderAll`).
 * Field `brokerTag` added 2026.09.21.
 * @see https://www.kucoin.com/docs-new/3470228w0
 */
export interface WsUTAOrderPushData {
  brokerTag?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface WsUTAOrderPush {
  T: string;
  P: number;
  d: WsUTAOrderPushData;
}

/**
 * UTA WebSocket public Mark Price channel (`channel: markPrice`, FUTURES).
 * Added 2026.07.01.
 */
export interface WsUTAMarkPricePublicPush {
  T: string;
  P: number;
  d: {
    s: string;
    mP?: string;
    M?: number;
    [key: string]: string | number | boolean | undefined;
  };
}

/**
 * UTA WebSocket public Call Auction Info channel (`channel: callAuctionInfo`).
 * Added 2026.07.17.
 * @see https://www.kucoin.com/docs-new/3470268w0
 */
export interface WsUTACallAuctionInfoPublicPush {
  T: string;
  t?: string;
  P: number;
  d: {
    s: string;
    /** Estimated price */
    eq?: number | string;
    /** Estimated size */
    es?: number | string;
    /** Sell order range low price */
    slp?: number | string;
    /** Sell order range high price */
    shp?: number | string;
    /** Buy order range low price */
    blp?: number | string;
    /** Buy order range high price */
    bhp?: number | string;
    ts?: number;
    [key: string]: string | number | boolean | undefined;
  };
}

/**
 * Classic futures WebSocket `/contract/positionAll` funding fee settlement push.
 * `symbol` added to `data` field 2026.07.01.
 * @see https://www.kucoin.com/docs-new/3470088w0
 */
export interface WsClassicFuturesFundingFeeSettlement {
  topic: string;
  subject: 'funding.begin' | 'funding.end';
  data: {
    symbol: string;
    fundingTime: number;
    fundingRate: number;
    timestamp: number;
  };
}
