/**
 * Unified Trading Account Request Types
 */

export interface GetAnnouncementsRequestUTA {
  language?:
    | 'zh_HK'
    | 'ja_JP'
    | 'ko_KR'
    | 'en_US'
    | 'pl_PL'
    | 'es_ES'
    | 'fr_FR'
    | 'ar_AE'
    | 'it_IT'
    | 'id_ID'
    | 'nl_NL'
    | 'pt_PT'
    | 'vi_VN'
    | 'de_DE'
    | 'tr_TR'
    | 'ms_MY'
    | 'ru_RU'
    | 'th_TH'
    | 'hi_IN'
    | 'bn_BD'
    | 'fil_PH'
    | 'ur_PK';
  type?:
    | 'latest-announcements'
    | 'activities'
    | 'product-updates'
    | 'vip'
    | 'maintenance-updates'
    | 'delistings'
    | 'others'
    | 'api-campaigns'
    | 'new-listings'
    | 'futures-announcements';
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
}

export interface GetCurrencyRequestUTA {
  /** Required as of UTA V2 (2026.08.27) */
  currency: string;
  chain?: string;
}

export interface GetCurrenciesRequestUTA {
  /** Lowercase chain identifier, e.g. trx */
  chain?: string;
  /** Uppercase currency codes. Docs send repeated currencyList query params. */
  currencyList?: string[] | string;
}

export interface GetSymbolRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS';
  symbol?: string;
}

export interface GetTickerRequestUTA {
  tradeType: 'SPOT' | 'FUTURES';
  symbol?: string;
}

export interface GetTradesRequestUTA {
  tradeType: 'SPOT' | 'FUTURES';
  symbol: string;
}

export interface GetOrderBookRequestUTA {
  tradeType: 'SPOT' | 'FUTURES';
  symbol: string;
  /**
   * Order book depth as a numeric string, or FULL for all levels.
   * Rate limit weights: 1–20: 5; 21–100: 20; 101–500: 50; 501+ or FULL: 250.
   * @see https://www.kucoin.com/docs-new/change-log (2026.11.02)
   */
  limit: '20' | '50' | '100' | 'FULL' | `${number}`;
  /**
   * Whether it is an RPI Order. Applicable to FUTURES only.
   * 0: noneRPI Orders (default)
   * 1: noneRPI + RPI Orders
   */
  rpiFilter?: 0 | 1;
}

export interface GetFiatPriceRequestUTA {
  /** Fiat base currency, e.g. USD, EUR. Required as of UTA V2 (2026.08.27) */
  base: string;
  /**
   * Crypto symbols. UTA V2 expects a string array (2026.08.27).
   * Comma-separated string still accepted for older callers.
   */
  currencies?: string[] | string;
}

export interface GetRateLimitRequestUTA {
  /** Comma-separated UIDs to query */
  uids: string;
}

export interface SetSubAccountsRateLimitItemUTA {
  uid: string;
  rate: number;
}

export interface SetSubAccountsRateLimitRequestUTA {
  list: SetSubAccountsRateLimitItemUTA[];
}

export interface GetKlinesRequestUTA {
  tradeType: 'SPOT' | 'FUTURES';
  symbol: string;
  /**
   * Replaces `{symbol}-index-price` / `-mark-price` / `-premium-index` suffixes (UTA V2 2026.08.27).
   * Suffix encoding remains backward compatible.
   */
  klineType?: 'TRADE' | 'INDEX' | 'MARK' | 'PREMIUM' | string;
  interval:
    | '1min'
    | '3min'
    | '5min'
    | '15min'
    | '30min'
    | '1hour'
    | '2hour'
    | '4hour'
    | '6hour'
    | '8hour'
    | '12hour'
    | '1day'
    | '1week'
    | '1month';
  startAt?: number;
  endAt?: number;
}

export interface GetCurrentFundingRateRequestUTA {
  /** Contract symbol. Optional when productType is set (UTA V2 2026.08.27). */
  symbol?: string;
  /** Product type when querying by category instead of a single symbol. */
  productType?: 'COIN-FUTURES' | string;
}

export interface GetHistoryFundingRateRequestUTA {
  symbol: string;
  startAt: number;
  endAt: number;
}

export interface GetServiceStatusRequestUTA {
  tradeType: 'SPOT' | 'FUTURES';
}

/**
 * Account Endpoints
 */

export interface GetClassicAccountRequestUTA {
  accountType: 'FUNDING' | 'SPOT' | 'FUTURES' | 'CROSS' | 'ISOLATED';
  accountSubtype?: string; // For ISOLATED (trading pair) or FUTURES (settlement currency)
  currency?: string; // Up to 20 currencies, comma-separated
}

export interface GetSubAccountRequestUTA {
  /** UTA V2 request field (2026.08.27). Up to 50 UIDs, comma-separated */
  uid?: string;
  /** @deprecated UTA V2 renamed to uid (2026.08.27) */
  UID?: string; // Up to 50 UIDs, comma-separated
  pageSize?: number; // Default 10, max 50
  lastId?: number;
}

export interface GetTransferQuotasRequestUTA {
  currency: string;
  accountType:
    | 'FUNDING'
    | 'SPOT'
    | 'FUTURES'
    | 'CROSS'
    | 'ISOLATED'
    | 'UNIFIED';
  symbol?: string; // Required when accountType is ISOLATED
}

export interface FlexTransferRequestUTA {
  clientOid: string;
  currency: string;
  amount: string;
  /** UTA V2 transfer type (2026.08.27). Replaces numeric `type`. */
  transferType?: 'INTERNAL' | 'PARENT_TO_SUB' | 'SUB_TO_PARENT' | 'SUB_TO_SUB';
  /** @deprecated UTA V2 uses transferType: 0=INTERNAL, 1=PARENT_TO_SUB, 2=SUB_TO_PARENT, 3=SUB_TO_SUB */
  type?: '0' | '1' | '2' | '3'; // 0=INTERNAL, 1=PARENT_TO_SUB, 2=SUB_TO_PARENT, 3=SUB_TO_SUB
  fromAccountType:
    | 'FUNDING'
    | 'SPOT'
    | 'FUTURES'
    | 'CROSS'
    | 'ISOLATED'
    | 'UNIFIED';
  toAccountType:
    | 'FUNDING'
    | 'SPOT'
    | 'FUTURES'
    | 'CROSS'
    | 'ISOLATED'
    | 'UNIFIED';
  /** UTA V2 required isolated-account tag (2026.08.27). Replaces fromAccountSymbol. */
  fromAccountTag?: string;
  /** UTA V2 required isolated-account tag (2026.08.27). Replaces toAccountSymbol. */
  toAccountTag?: string;
  /** @deprecated UTA V2 uses fromAccountTag */
  fromAccountSymbol?: string; // Required when fromAccountType is ISOLATED
  /** @deprecated UTA V2 uses toAccountTag */
  toAccountSymbol?: string; // Required when toAccountType is ISOLATED
  fromUid?: string; // Required for SUB transfers
  toUid?: string; // Required for SUB transfers
}

export interface SetSubAccountTransferPermissionRequestUTA {
  subUids: string; // Comma-separated sub account UIDs
  subToSub: boolean;
}

export interface SetAccountModeRequestUTA {
  accountType: 'CLASSIC' | 'UNIFIED';
}

export interface GetFeeRateRequestUTA {
  tradeType: 'SPOT' | 'FUTURES';
  symbol: string; // Spot: up to 10 symbols comma-separated, Futures: 1 symbol only
}

export interface GetAccountLedgerRequestUTA {
  accountType:
    | 'FUNDING'
    | 'SPOT'
    | 'FUTURES'
    | 'CROSS'
    | 'ISOLATED'
    | 'UNIFIED';
  currency?: string; // Up to 10 currencies, comma-separated
  direction?: 'IN' | 'OUT';
  businessType?:
    | 'TRADE_EXCHANGE'
    | 'TRANSFER'
    | 'SUB_TRANSFER'
    | 'RETURNED_FEES'
    | 'DEDUCTION_FEES'
    | 'OTHER'
    | 'SUB_TO_SUB_TRANSFER'
    | 'SPOT_EXCHANGE'
    | 'SPOT_EXCHANGE_REBATE'
    | 'FUTURES_EXCHANGE_OPEN'
    | 'FUTURES_EXCHANGE_CLOSE'
    | 'FUTURES_EXCHANGE_REBATE'
    | 'FUNDING_FEE'
    | 'LIABILITY_INTEREST'
    | 'KCS_DEDUCTION_FEES'
    | 'KCS_RETURNED_FEES'
    | 'AUTO_EXCHANGE_USER';
  lastId?: number;
  startAt?: number; // milliseconds
  endAt?: number; // milliseconds
  pageSize?: number; // Default 100; max depends on accountType: UNIFIED/SPOT 200, FUNDING/CROSS/ISOLATED 500, FUTURES 100
}

export interface GetInterestHistoryRequestUTA {
  accountType: 'UNIFIED';
  currency?: string;
  startTime?: number; // milliseconds
  endTime?: number; // milliseconds
  page?: number;
  size?: number; // Default 50, max 1000
}

export interface GetBorrowingRatesAndLimitsRequestUTA {
  currency: string;
}

export interface ModifyLeverageRequestUTA {
  symbol: string;
  leverage: string;
}

/** UTA cross margin only — path includes accountMode (typically unified) */
export interface ModifyMarginCrossLeverageRequestUTA {
  leverage: string;
  /** Cross margin currency (e.g. BTC) */
  currency?: string;
}

export interface GetLeverageRequestUTA {
  tradeType: 'MARGIN' | 'FUTURES';
  marginMode: 'CROSS' | 'ISOLATED';
  /** Required for MARGIN when not returning all; optional => all for MARGIN */
  currency?: string;
  /** Required for FUTURES when not returning all; optional => all for FUTURES */
  symbol?: string;
}

export interface GetDepositAddressRequestUTA {
  currency: string;
  chain?: string; // If both currency and chain provided, address will be created if not exists
}

export interface GetWithdrawalQuotasRequestUTA {
  currency: string;
  /** UTA V2 chain identifier (2026.08.27). Replaces chainId. */
  chain?: string;
  /** @deprecated UTA V2 renamed to chain */
  chainId?: string;
  /** Required as of UTA V2 (2026.08.27) */
  withdrawType?: 'ADDRESS' | 'UID' | 'MAIL' | 'PHONE';
  isInner?: boolean;
}

export interface SubmitWithdrawRequestUTA {
  currency: string;
  toAddress: string;
  amount: string;
  withdrawType: 'ADDRESS' | 'UID' | 'MAIL' | 'PHONE';
  /** UTA V2 chain identifier (2026.08.27). Replaces chainId. */
  chain?: string;
  /** @deprecated UTA V2 renamed to chain */
  chainId?: string;
  memo?: string;
  isInner?: boolean;
  remark?: string;
  feeDeductType?: 'INTERNAL' | 'EXTERNAL';
}

export interface AddSubAccountRequestUTA {
  password: string;
  subName: string;
  access: 'Spot' | 'Futures' | 'Margin' | string;
  remarks?: string;
  mode?: 'CLASSIC' | 'UNIFIED';
}

export interface AddSubAccountApiRequestUTA {
  subName: string;
  passphrase: string;
  remark: string;
  permission?: string;
  ipWhitelist?: string;
  expire?: '-1' | '30' | '90' | '180' | '360';
}

/**
 * Order Endpoints
 */

export interface PlaceOrderRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  clientOid?: string; // Mandatory for futures and margin; optional otherwise. Max 40 chars
  symbol: string;
  side: 'BUY' | 'SELL';
  positionSide?: 'BOTH' | 'LONG' | 'SHORT'; // For Classic Futures only
  orderType: 'LIMIT' | 'MARKET';
  size: string;
  sizeUnit: 'BASECCY' | 'QUOTECCY' | 'UNIT'; // Required for UTA, UNIT for Futures
  price?: string;
  leverage?: number; // Only for Classic Mode isolated margin
  reduceOnly?: boolean; // Only for Futures
  marginMode?: 'ISOLATED' | 'CROSS'; // Only for Classic Futures
  stp?: 'DC' | 'CO' | 'CN' | 'CB';
  /**
   * Time in Force. Added 'RPI' as of 2025.01.02
   * - GTC: Good Till Cancel (default)
   * - FOK: Fill Or Kill
   * - IOC: Immediate Or Cancel
   * - GTT: Good Till Time (not supported for Futures)
   * - RPI: Retail Price Improvement Order (Phase 1: Futures only)
   */
  timeInForce?: 'GTC' | 'IOC' | 'GTT' | 'FOK' | 'RPI';
  cancelAfter?: number; // Only effective when timeInForce is GTT
  postOnly?: boolean;
  autoBorrow?: boolean; // Only for Isolated/Cross Margin (Classic only)
  autoRepay?: boolean; // Only for Isolated/Cross Margin (Classic only)
  tags?: string; // Max length 20
  /** Broker tag, max 50 chars. Decoupled from capped tags (2026.09.21) */
  brokerTag?: string;
  triggerDirection?: 'DOWN' | 'UP'; // Required when triggerPrice is set
  triggerPrice?: string;
  triggerPriceType?: 'TP' | 'IP' | 'MP'; // Only for Futures
  tpTriggerPrice?: string; // Only for Futures
  tpTriggerPriceType?: 'TP' | 'IP' | 'MP';
  slTriggerPrice?: string; // Only for Futures
  slTriggerPriceType?: 'TP' | 'IP' | 'MP';
  /** Close position for symbol; ignores side/size and cancels pending close orders. Default false */
  closeOrder?: boolean;
}

export interface BatchPlaceOrderRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  orderList: Omit<PlaceOrderRequestUTA, 'tradeType'>[];
}

export interface GetOrderDetailsRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  symbol: string;
  orderId?: string; // At least one of orderId or clientOid required
  clientOid?: string; // At least one of orderId or clientOid required
}

export interface GetOpenOrderListRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  symbol?: string; // Required for SPOT, ISOLATED, and CROSS
  orderFilter?: 'NORMAL' | 'CONDITION'; // Defaults to NORMAL
  startAt?: number; // milliseconds
  endAt?: number; // milliseconds
  pageNumber?: number;
  pageSize?: number; // Default 50, max 200
}

export interface GetOrderHistoryRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  symbol?: string; // Required for SPOT, ISOLATED, and CROSS
  side?: 'BUY' | 'SELL';
  orderFilter?: 'NORMAL' | 'CONDITION'; // Defaults to NORMAL
  startAt?: number; // milliseconds
  endAt?: number; // milliseconds
  lastId?: string;
  pageSize?: number; // Default 50, max 200
}

export interface GetTradeHistoryRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  symbol?: string; // Required for SPOT, ISOLATED, and CROSS
  orderId?: string;
  side?: 'BUY' | 'SELL';
  type?: 'LIMIT' | 'MARKET';
  startAt?: number; // milliseconds
  endAt?: number; // milliseconds
  lastId?: string;
  pageSize?: number; // Default 50, max 200
  /** Query all trade kinds (UTA V2 2026.08.27), e.g. NORMAL / ADL / LIQUID / SETTLEMENT */
  fillType?: string;
}

export interface AmendOrderRequestUTA {
  symbol: string;
  orderId?: string;
  clientOid?: string;
  newPrice?: number | string;
  newSize?: number | string;
  tpTriggerPrice?: string;
  slTriggerPrice?: string;
}

export interface GetIndexPriceRequestUTA {
  symbol: string;
}

export interface CancelOrderRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  symbol: string; // For FUTURES optional for single order cancellation (ignored if orderId provided); For UTA FUTURES, required
  orderId?: string; // At least one of orderId or clientOid required
  clientOid?: string; // At least one of orderId or clientOid required
}

export interface CancelOrderItemRequestUTA {
  symbol: string;
  orderId?: string; // At least one of orderId or clientOid required
  clientOid?: string; // At least one of orderId or clientOid required
}

export interface BatchCancelOrdersRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'ISOLATED' | 'CROSS' | 'MARGIN';
  cancelOrderList: CancelOrderItemRequestUTA[]; // Maximum 20 orders
}

/** Batch cancel orders by symbol (POST /order/cancel-all) */
export interface BatchCancelOrdersBySymbolRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'MARGIN';
  symbol: string;
  marginMode?: 'CROSS' | 'ISOLATED';
  orderFilter?: 'NORMAL' | 'ADVANCED';
}

export interface SetDCPRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'MARGIN';
  timeout: number; // Range: timeout=-1 (unset) or 5 <= timeout <= 86400 seconds
  symbols?: string[]; // Up to 50 trading pairs. Empty means all trading pairs
}

export interface GetDCPRequestUTA {
  tradeType: 'SPOT' | 'FUTURES' | 'MARGIN';
}

/**
 * Position Endpoints
 */

export interface GetPositionListRequestUTA {
  symbol?: string; // Optional, if not provided returns all open positions
  pageNumber?: number;
  pageSize?: number;
}

export interface BatchModifyMarginModeRequestUTA {
  /** Trading pair symbol(s), comma-separated for batch */
  symbol: string;
  marginMode: 'CROSS' | 'ISOLATED';
}

export interface ModifyIsolatedFuturesMarginRequestUTA {
  type: 'DEPOSIT' | 'WITHDRAW';
  amount: string;
  symbol: string;
  tradeType: 'FUTURES' | 'MARGIN';
  positionSide?: 'LONG' | 'SHORT' | 'BOTH';
}

/** Third-party custody (OES) custodian codes */
export type ThirdPartyCustodyCustodianUTA =
  | 'BITGO_SG'
  | 'BITGO_SD'
  | 'CACTUS'
  | 'CEFFU';

/**
 * Get Third-Party Custody Currencies (public)
 * Settlement currencies supported per custodian.
 */
export interface GetThirdPartyCustodyCurrenciesRequestUTA {
  /** If omitted, returns all custodian rows */
  custodian?: ThirdPartyCustodyCustodianUTA;
  /** If omitted, all currencies for the selected custodian(s) */
  currency?: string;
}

/**
 * Get Third-Party Custody Account Currency Limits (private)
 * Remaining OES custody quota per custodian/currency.
 */
export interface GetThirdPartyCustodyQuotaRequestUTA {
  /**
   * If sub-account API key is used, this parameter is ignored; only the
   * custodian bound to the sub-account is returned (per API docs).
   */
  custodian?: ThirdPartyCustodyCustodianUTA;
  /** If omitted, limits for all currencies under the custodian */
  currency?: string;
}

export interface GetPositionsHistoryRequestUTA {
  symbol?: string;
  startAt?: number; // milliseconds
  endAt?: number; // milliseconds
  lastId?: number; // For cursor-based pagination
  pageSize?: number; // Default 10, max 200
}

/** Settled funding fee history (private) */
export interface GetPrivateFundingFeeHistoryRequestUTA {
  symbol?: string;
  startAt?: number;
  endAt?: number;
  lastId?: number;
  pageSize?: number;
}

export interface GetAccountPositionTiersRequestUTA {
  symbol: string; // Supports up to 10 symbols, comma-separated
  tradeType?: 'FUTURES' | 'MARGIN'; // Not support margin for the time being
  marginMode?: 'ISOLATED' | 'CROSS'; // Not support cross for the time being
  data?: 'RISK_LIMIT' | 'BORROW'; // Not support borrow for the time being
}

export interface GetSubAccountListRequestUTA {
  currentPage?: number;
  pageSize?: number;
}

export interface SetKcsFeeDeductionRequestUTA {
  /** true to enable KCS fee deduction, false to disable */
  enabled: boolean;
}

export interface GetDepositHistoryRequestUTA {
  currency?: string;
  id?: string;
  startAt?: number;
  endAt?: number;
  currentPage?: number;
  pageSize?: number;
  status?: string;
}

export interface GetWithdrawalHistoryRequestUTA {
  currency?: string;
  id?: string;
  currentPage?: number;
  pageSize?: number;
  startAt?: number;
  endAt?: number;
  status?: string;
}

export interface GetInterestRateIndexRequestUTA {
  symbol: string;
  startAt?: number;
  endAt?: number;
  lastId?: number;
  pageSize?: number;
}

export interface GetCallAuctionInfoRequestUTA {
  symbol: string;
}
