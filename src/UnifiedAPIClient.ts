import { BaseRestClient } from './lib/BaseRestClient.js';
import type {
  InternalRequestContext,
  RestClientType,
} from './lib/requestUtils.js';
import {
  isUTAMainClientType,
  REST_CLIENT_TYPE_ENUM,
} from './lib/requestUtils.js';
import type {
  AddSubAccountApiRequestUTA,
  AddSubAccountRequestUTA,
  AmendOrderRequestUTA,
  BatchCancelOrdersBySymbolRequestUTA,
  BatchCancelOrdersRequestUTA,
  BatchModifyMarginModeRequestUTA,
  BatchPlaceOrderRequestUTA,
  CancelOrderRequestUTA,
  ConvertSmallBalanceRequestUTA,
  FlexTransferRequestUTA,
  GetAccountLedgerRequestUTA,
  GetAccountPositionTiersRequestUTA,
  GetAnnouncementsRequestUTA,
  GetBorrowingRatesAndLimitsRequestUTA,
  GetCallAuctionInfoRequestUTA,
  GetClassicAccountRequestUTA,
  GetCurrenciesRequestUTA,
  GetCurrencyRequestUTA,
  GetCurrentFundingRateRequestUTA,
  GetDCPRequestUTA,
  GetDepositAddressRequestUTA,
  GetDepositHistoryRequestUTA,
  GetFeeRateRequestUTA,
  GetFiatPriceRequestUTA,
  GetHistoryFundingRateRequestUTA,
  GetIndexPriceRequestUTA,
  GetInterestHistoryRequestUTA,
  GetInterestRateIndexRequestUTA,
  GetKlinesRequestUTA,
  GetLeverageRequestUTA,
  GetOpenOrderListRequestUTA,
  GetOrderBookRequestUTA,
  GetOrderDetailsRequestUTA,
  GetOrderHistoryRequestUTA,
  GetPositionListRequestUTA,
  GetPositionsHistoryRequestUTA,
  GetPrivateFundingFeeHistoryRequestUTA,
  GetRateLimitRequestUTA,
  GetServiceStatusRequestUTA,
  GetSmallBalanceCurrenciesRequestUTA,
  GetSmallBalanceOrderDetailRequestUTA,
  GetSmallBalanceOrderHistoryRequestUTA,
  GetSubAccountListRequestUTA,
  GetSubAccountRequestUTA,
  GetSymbolRequestUTA,
  GetThirdPartyCustodyCurrenciesRequestUTA,
  GetThirdPartyCustodyQuotaRequestUTA,
  GetTickerRequestUTA,
  GetTradeHistoryRequestUTA,
  GetTradesRequestUTA,
  GetTransferQuotasRequestUTA,
  GetWithdrawalHistoryRequestUTA,
  GetWithdrawalQuotasRequestUTA,
  ModifyIsolatedFuturesMarginRequestUTA,
  ModifyLeverageRequestUTA,
  ModifyMarginCrossLeverageRequestUTA,
  PlaceOrderRequestUTA,
  SetAccountModeRequestUTA,
  SetDCPRequestUTA,
  SetKcsFeeDeductionRequestUTA,
  SetSubAccountsRateLimitRequestUTA,
  SetSubAccountTransferPermissionRequestUTA,
  SubmitWithdrawRequestUTA,
} from './types/request/uta-types.js';
import type { APISuccessResponse } from './types/response/shared.types.js';
import type {
  AddSubAccountApiResponseUTA,
  AddSubAccountResponseUTA,
  AmendOrderResponseUTA,
  ApiKeyInfoUTA,
  BatchCancelOrdersBySymbolResponseUTA,
  BatchCancelOrdersResponseUTA,
  BatchModifyMarginModeResponseUTA,
  BatchPlaceOrderResponseUTA,
  BorrowableCurrencyUTA,
  CancelOrderResponseUTA,
  DCPResponseUTA,
  DepositAddressUTA,
  FlexTransferResponseUTA,
  GetAccountLedgerResponseClassicUTA,
  GetAccountLedgerResponseUTA,
  GetAccountModeResponseUTA,
  GetAccountOverviewResponseUTA,
  GetAnnouncementsResponseUTA,
  GetBorrowingRatesAndLimitsResponseUTA,
  GetCallAuctionInfoResponseUTA,
  GetClassicAccountResponseUTA,
  GetCrossMarginConfigResponseUTA,
  GetCurrenciesResponseUTA,
  GetCurrencyResponseUTA,
  GetCurrentFundingRateResponseUTA,
  GetDepositHistoryResponseUTA,
  GetFeeRateResponseUTA,
  GetFiatPriceResponseUTA,
  GetHistoryFundingRateResponseUTA,
  GetIndexPriceResponseUTA,
  GetInterestHistoryResponseUTA,
  GetInterestRateIndexResponseUTA,
  GetKlinesResponseUTA,
  GetLeverageItemUTA,
  GetOpenOrderListResponseUTA,
  GetOrderBookResponseUTA,
  GetOrderHistoryResponseUTA,
  GetPositionsHistoryResponseUTA,
  GetPrivateFundingFeeHistoryResponseUTA,
  GetRateLimitCapResponseUTA,
  GetRateLimitResponseUTA,
  GetServiceStatusResponseUTA,
  GetSmallBalanceCurrenciesResponseUTA,
  GetSmallBalanceOrderHistoryResponseUTA,
  GetSubAccountListResponseUTA,
  GetSubAccountResponseUTA,
  GetSymbolResponseUTA,
  GetTickerResponseUTA,
  GetTradeHistoryResponseUTA,
  GetTradesResponseUTA,
  GetTradeStatisticsResponseUTA,
  GetTransferQuotasResponseUTA,
  GetWithdrawalHistoryResponseUTA,
  KYCRegionUTA,
  ModifyIsolatedFuturesMarginResponseUTA,
  ModifyMarginCrossLeverageResponseUTA,
  OrderDetailsUTA,
  PlaceOrderResponseUTA,
  PositionTierUTA,
  PositionUTA,
  SetKcsFeeDeductionResponseUTA,
  SetSubAccountsRateLimitResponseUTA,
  SmallBalanceOrderUTA,
  SubAccountTransferPermissionUTA,
  SubmitWithdrawResponseUTA,
  ThirdPartyCustodyCurrencyUTA,
  ThirdPartyCustodyQuotaUTA,
  WithdrawalQuotasUTA,
} from './types/response/uta-types.js';

/**
 * Unified Trading Account Client
 *
 * This client provides access to the Unified Trading Account API endpoints
 * that unify market data access across Spot, Futures, and Margin trading.
 */
export class UnifiedAPIClient extends BaseRestClient {
  getClientType(): RestClientType {
    return REST_CLIENT_TYPE_ENUM.unifiedTradingAccount;
  }

  /**
   *
   * REST - Unified Trading Account - Market Data
   *
   */

  /**
   * Get Announcements
   * This interface can obtain the latest news announcements, and the default
   * page search is for announcements within a month.
   */
  getAnnouncements(
    params?: GetAnnouncementsRequestUTA,
  ): Promise<APISuccessResponse<GetAnnouncementsResponseUTA>> {
    return this.get('api/ua/v2/market/announcement', params);
  }

  /**
   * Get Currency
   * Request the currency details of a specified currency via this endpoint.
   */
  getCurrency(
    params: GetCurrencyRequestUTA,
  ): Promise<APISuccessResponse<GetCurrencyResponseUTA>> {
    return this.get('api/ua/v2/market/currency', params);
  }

  /**
   * Get Currencies
   * Currency and chain-level deposit/withdrawal configuration.
   */
  getCurrencies(
    params?: GetCurrenciesRequestUTA,
  ): Promise<APISuccessResponse<GetCurrenciesResponseUTA>> {
    return this.get('api/ua/v2/asset/currencies', params);
  }

  /**
   * Get Third-Party Custody Currencies
   * Query settlement currencies supported by third-party (OES) custodian institutions.
   */
  getThirdPartyCustodyCurrencies(
    params?: GetThirdPartyCustodyCurrenciesRequestUTA,
  ): Promise<APISuccessResponse<ThirdPartyCustodyCurrencyUTA[]>> {
    return this.get('api/ua/v2/oes/currency', params);
  }

  /**
   * Get Symbol
   * Request a list of available currency pairs for trading via this endpoint.
   */
  getSymbols(
    params: GetSymbolRequestUTA,
  ): Promise<APISuccessResponse<GetSymbolResponseUTA>> {
    return this.get('api/ua/v2/market/instrument', params);
  }

  /**
   * Get Ticker
   * Request market tickers for the trading pairs in the market (including 24h volume).
   */
  getTickers(
    params: GetTickerRequestUTA,
  ): Promise<APISuccessResponse<GetTickerResponseUTA>> {
    return this.get('api/ua/v2/market/ticker', params);
  }

  /**
   * Get Trades
   * Request via this endpoint to get the latest 100 public trades of the specified symbol.
   */
  getTrades(
    params: GetTradesRequestUTA,
  ): Promise<APISuccessResponse<GetTradesResponseUTA>> {
    return this.get('api/ua/v2/market/trade', params);
  }

  /**
   * Get OrderBook
   * Query order book depth information (aggregated by price).
   */
  getOrderBook(
    params: GetOrderBookRequestUTA,
  ): Promise<APISuccessResponse<GetOrderBookResponseUTA>> {
    return this.get('api/ua/v2/market/orderbook', params);
  }

  /**
   * Get Klines
   * Get the Kline of the symbol. Data are returned in grouped buckets based on requested type.
   */
  getKlines(
    params: GetKlinesRequestUTA,
  ): Promise<APISuccessResponse<GetKlinesResponseUTA>> {
    return this.get('api/ua/v2/market/kline', params);
  }

  /**
   * Get Index Price
   * Index price snapshots (updated once per second).
   */
  getIndexPrice(
    params: GetIndexPriceRequestUTA,
  ): Promise<APISuccessResponse<GetIndexPriceResponseUTA>> {
    return this.get('api/ua/v2/market/index-price', params);
  }

  /**
   * Get Current Funding Rate
   * Get current Futures funding fee rate.
   */
  getCurrentFundingRate(
    params?: GetCurrentFundingRateRequestUTA,
  ): Promise<
    APISuccessResponse<
      GetCurrentFundingRateResponseUTA | GetCurrentFundingRateResponseUTA[]
    >
  > {
    return this.get('api/ua/v2/market/funding-rate', params);
  }

  /**
   * Get History Funding Rate
   * Query the Futures funding rate at each settlement time point within a certain time range.
   */
  getHistoryFundingRate(
    params: GetHistoryFundingRateRequestUTA,
  ): Promise<APISuccessResponse<GetHistoryFundingRateResponseUTA>> {
    return this.get('api/ua/v2/market/funding-rate-history', params);
  }

  /**
   * Get Cross Margin Config
   * Request the configure info of the 'spot cross margin' via this endpoint.
   */
  getCrossMarginConfig(): Promise<
    APISuccessResponse<GetCrossMarginConfigResponseUTA>
  > {
    return this.get('api/ua/v1/market/cross-config');
  }

  /**
   * Get Borrowable Currencies
   * List of borrowable currencies (UTA / public).
   */
  getBorrowableCurrencies(): Promise<
    APISuccessResponse<BorrowableCurrencyUTA[]>
  > {
    return this.get('api/ua/v2/market/borrowable-currency');
  }

  /**
   * Get Service Status
   * Get the service status.
   */
  getServiceStatus(
    params: GetServiceStatusRequestUTA,
  ): Promise<APISuccessResponse<GetServiceStatusResponseUTA>> {
    return this.get('api/ua/v2/server/status', params);
  }

  /**
   * Get Client IP Address
   * Get the client side IP address. Added 2026.07.01.
   */
  getClientIPAddress(): Promise<APISuccessResponse<string>> {
    return this.get('api/ua/v2/user/my-ip');
  }

  /**
   * Get Fiat Price (UTA)
   * Request the fiat price of currencies for available trading pairs. Added 2026.07.01.
   */
  getFiatPrice(
    params: GetFiatPriceRequestUTA,
  ): Promise<APISuccessResponse<GetFiatPriceResponseUTA>> {
    return this.get('api/ua/v2/market/fiat-price', params);
  }

  /**
   * Get Interest Rate Index (UTA)
   * Interest rate index records by symbol. Added 2026.07.17.
   */
  getInterestRateIndex(
    params: GetInterestRateIndexRequestUTA,
  ): Promise<APISuccessResponse<GetInterestRateIndexResponseUTA>> {
    return this.get('api/ua/v2/market/interest-rate-index', params);
  }

  /**
   * Platform 24h Market Statistics (UTA)
   * Spot and futures 24h turnover. Added 2026.07.17.
   */
  getTradeStatistics(): Promise<
    APISuccessResponse<GetTradeStatisticsResponseUTA>
  > {
    return this.get('api/ua/v2/trade-statistics');
  }

  /**
   * Get Call Auction Info (UTA)
   * Estimated price/size and bid/ask ranges during call auction. Added 2026.07.17.
   */
  getCallAuctionInfo(
    params: GetCallAuctionInfoRequestUTA,
  ): Promise<APISuccessResponse<GetCallAuctionInfoResponseUTA>> {
    return this.get('api/ua/v2/market/call-auction-info', params);
  }

  /**
   *
   * REST - Unified Trading Account - Account
   *
   */

  /**
   * Get Account (Classic)
   * Get information for Classic Account (FUNDING, SPOT, FUTURES, CROSS, ISOLATED).
   * Note: AccountType enum value changed from TRADING to SPOT as of 2026.01.17.
   */
  getClassicAccount(
    params: GetClassicAccountRequestUTA,
  ): Promise<APISuccessResponse<GetClassicAccountResponseUTA>> {
    return this.getPrivate('api/ua/v2/account/balance', params);
  }

  /**
   * Get Account (UTA)
   * Get information for Unified Trading Account.
   */
  getAccount(): Promise<APISuccessResponse<GetClassicAccountResponseUTA>> {
    return this.getPrivate('api/ua/v2/unified/account/balance');
  }

  /**
   * Get Account Overview (UTA)
   * Get account overview for Unified Trading Account.
   */
  getAccountOverview(): Promise<
    APISuccessResponse<GetAccountOverviewResponseUTA>
  > {
    return this.getPrivate('api/ua/v2/unified/account/overview');
  }

  /**
   * Get Sub Account
   * Request sub account info via this endpoint.
   */
  getSubAccount(
    params?: GetSubAccountRequestUTA,
  ): Promise<APISuccessResponse<GetSubAccountResponseUTA>> {
    return this.getPrivate('api/ua/v2/sub-account/balance', params);
  }

  /**
   * Get Sub-account List (UTA)
   * Paginated list of sub-accounts. Added 2026.08.03.
   */
  getSubAccountList(
    params?: GetSubAccountListRequestUTA,
  ): Promise<APISuccessResponse<GetSubAccountListResponseUTA>> {
    return this.getPrivate('api/ua/v2/user/sub-account-list', params);
  }

  /**
   * Get Transfer Quotas
   * This endpoint returns the transferable balance of a specified account.
   * Note: AccountType enum value changed from TRADING to SPOT as of 2026.01.17.
   * Note: UNIFIED accountType supported as of latest UTA update.
   */
  getTransferQuotas(
    params: GetTransferQuotasRequestUTA,
  ): Promise<APISuccessResponse<GetTransferQuotasResponseUTA>> {
    return this.getPrivate('api/ua/v2/account/transfer-quota', params);
  }

  /**
   * Flex Transfer
   * This interface can be used for transfers between master- and sub-accounts and transfers.
   * Note: AccountType enum value changed from TRADING to SPOT as of 2026.01.17.
   */
  flexTransfer(
    params: FlexTransferRequestUTA,
  ): Promise<APISuccessResponse<FlexTransferResponseUTA>> {
    return this.postPrivate('api/ua/v2/account/transfer', params);
  }

  /**
   * Set Sub Account Transfer Permission
   * This endpoint supports setting whether the specified sub-account needs to open the SUB_TO_SUB transfer permission.
   */
  setSubAccountTransferPermission(
    params: SetSubAccountTransferPermissionRequestUTA,
  ): Promise<APISuccessResponse<SubAccountTransferPermissionUTA[]>> {
    return this.postPrivate('api/ua/v2/sub-account/canTransferOut', params);
  }

  /**
   * Get Account Mode
   * This interface supports query the list of unified and classic sub-accounts and current account mode.
   */
  getAccountMode(): Promise<APISuccessResponse<GetAccountModeResponseUTA>> {
    return this.getPrivate('api/ua/v2/account/mode');
  }

  /**
   * Set Account Mode
   * This interface supports set account mode to UTA.
   */
  setAccountMode(
    params: SetAccountModeRequestUTA,
  ): Promise<APISuccessResponse<null>> {
    return this.postPrivate('api/ua/v2/account/mode', params);
  }

  /**
   * Get Fee Rate
   * This interface is for the trading pair's actual fee rate.
   * You can inquire about fee rates of 10 trading pairs each time at most for Spot.
   * Futures only supports 1 symbol at a time.
   */
  getFeeRate(
    params: GetFeeRateRequestUTA,
  ): Promise<APISuccessResponse<GetFeeRateResponseUTA>> {
    return this.getPrivate('api/ua/v2/user/fee-rate', params);
  }

  /**
   * Get Account Ledger
   * This API endpoint returns all transfer (in and out) records and supports multi-coin queries.
   * The query results are sorted in descending order by createdAt and ID.
   * Note: AccountType enum value changed from TRADING to SPOT as of 2026.01.17.
   * Note: direction values unified to uppercase IN/OUT as of 2026.01.17.
   * Note: For Futures - id changed from Number to String, balance/amount changed from Number to String as of 2026.01.17.
   * Note: ts standardized to nanoseconds as of 2026.01.12.
   * Note: amount is always returned as a positive number as of 2026.04.28; use direction (IN/OUT) to determine flow.
   */
  getAccountLedger(
    params: GetAccountLedgerRequestUTA,
  ): Promise<
    APISuccessResponse<
      GetAccountLedgerResponseUTA | GetAccountLedgerResponseClassicUTA
    >
  > {
    return this.getPrivate('api/ua/v2/account/ledger', params);
  }

  /**
   * Get Interest History (UTA)
   * Request the interest records via this endpoint.
   */
  getInterestHistory(
    params: GetInterestHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetInterestHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/account/interest-history', params);
  }

  /**
   * Get Borrowing Rates and Limits
   * Hourly/daily rates and borrow limits (UTA).
   */
  getBorrowingRatesAndLimits(
    params: GetBorrowingRatesAndLimitsRequestUTA,
  ): Promise<APISuccessResponse<GetBorrowingRatesAndLimitsResponseUTA>> {
    return this.getPrivate('api/ua/v2/account/interest-limits', params);
  }

  /**
   * Modify Leverage (UTA)
   * This interface supports modify leverage of the specified symbol.
   */
  modifyLeverage(
    params: ModifyLeverageRequestUTA,
  ): Promise<APISuccessResponse<null>> {
    return this.postPrivate(
      'api/ua/v2/unified/account/modify-leverage',
      params,
    );
  }

  /**
   * Modify Leverage Margin Cross (UTA)
   * Update leverage for a currency in UTA cross margin.
   *
   * @deprecated Use {@link modifyClassicMarginCrossLeverage} or {@link modifyUnifiedMarginCrossLeverage}.
   */
  modifyMarginCrossLeverage(
    params: ModifyMarginCrossLeverageRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<ModifyMarginCrossLeverageResponseUTA>> {
    if (accountMode === 'classic') {
      return this.modifyClassicMarginCrossLeverage(params);
    }
    return this.modifyUnifiedMarginCrossLeverage(params);
  }

  /**
   * Modify Classic Leverage Margin Cross
   * Update cross-margin leverage on the classic account.
   */
  modifyClassicMarginCrossLeverage(
    params: ModifyMarginCrossLeverageRequestUTA,
  ): Promise<APISuccessResponse<ModifyMarginCrossLeverageResponseUTA>> {
    return this.postPrivate(
      'api/ua/v1/classic/account/modify-leverage-margin-cross',
      params,
    );
  }

  /**
   * Modify Unified Leverage Margin Cross
   * Update cross-margin leverage on the unified account.
   */
  modifyUnifiedMarginCrossLeverage(
    params: ModifyMarginCrossLeverageRequestUTA,
  ): Promise<APISuccessResponse<ModifyMarginCrossLeverageResponseUTA>> {
    return this.postPrivate(
      'api/ua/v2/unified/account/modify-leverage-margin-cross',
      params,
    );
  }

  /**
   * Get Leverage (UTA)
   * Query leverage for MARGIN (currency) or FUTURES (symbol).
   */
  getLeverage(
    params: GetLeverageRequestUTA,
  ): Promise<APISuccessResponse<GetLeverageItemUTA[]>> {
    return this.getPrivate('api/ua/v2/unified/account/leverage', params);
  }

  /**
   * Get Deposit Address
   * Return a deposit address; when both currency and chain are provided,
   * the address will be created if it does not exist.
   * URL unified to GET /api/ua/v2/asset/deposit/address as of 2026.01.17.
   */
  getDepositAddress(
    params: GetDepositAddressRequestUTA,
  ): Promise<APISuccessResponse<DepositAddressUTA[]>> {
    return this.getPrivate('api/ua/v2/asset/deposit/address', params);
  }

  /**
   * Get Deposit History (UTA)
   * Paginated deposit records. Added 2026.08.03.
   */
  getDepositHistory(
    params?: GetDepositHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetDepositHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/asset/deposit/history', params);
  }

  /**
   * Get Withdrawal History (UTA)
   * Paginated withdrawal records. Added 2026.08.03.
   */
  getWithdrawalHistory(
    params?: GetWithdrawalHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetWithdrawalHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/asset/withdrawal/history', params);
  }

  /**
   * KCS Fee Deduction Management (UTA)
   * Enable or disable KCS fee deduction. Added 2026.08.03.
   */
  setKcsFeeDeduction(
    params: SetKcsFeeDeductionRequestUTA,
  ): Promise<APISuccessResponse<SetKcsFeeDeductionResponseUTA>> {
    return this.getPrivate('api/ua/v2/account/fee/kcs-deduct', params);
  }

  /**
   * Get API Key Info (UTA)
   * Get the API key information for the key used to call this endpoint.
   * Works for both master and sub user API keys. Added 2026.05.15.
   */
  getApiKeyInfo(): Promise<APISuccessResponse<ApiKeyInfoUTA>> {
    return this.getPrivate('api/ua/v2/user/api-key');
  }

  /**
   * Get KYC Regions (UTA)
   * Obtain the list of KYC regions. Added 2026.05.15.
   */
  getKYCRegions(): Promise<APISuccessResponse<KYCRegionUTA[]>> {
    return this.get('api/ua/v2/user/kyc-region');
  }

  /**
   * Get API Rate Limit (UTA)
   * Query UTA API rate limit for specified UIDs. Added 2026.06.05.
   */
  getRateLimit(
    params: GetRateLimitRequestUTA,
  ): Promise<APISuccessResponse<GetRateLimitResponseUTA>> {
    return this.getPrivate('api/ua/v2/rate-limit/query', params);
  }

  /**
   * Get All API Rate Limit (UTA)
   * Query UTA API rate limit for all accounts under the master. Added 2026.06.05.
   */
  getAllRateLimit(): Promise<APISuccessResponse<GetRateLimitResponseUTA>> {
    return this.getPrivate('api/ua/v2/rate-limit/query-all');
  }

  /**
   * Get API Rate Limit Cap (UTA)
   * Query the master account UTA API rate limit cap and allocation. Added 2026.06.05.
   */
  getRateLimitCap(): Promise<APISuccessResponse<GetRateLimitCapResponseUTA>> {
    return this.getPrivate('api/ua/v2/rate-limit/query-cap');
  }

  /**
   * Set Sub Accounts API Rate Limit (UTA)
   * Set UTA API rate limits for sub-accounts. Added 2026.06.05.
   */
  setSubAccountsRateLimit(
    params: SetSubAccountsRateLimitRequestUTA,
  ): Promise<APISuccessResponse<SetSubAccountsRateLimitResponseUTA>> {
    return this.postPrivate('api/ua/v2/rate-limit/set', params);
  }

  /**
   * Add Sub-Account (UTA)
   * Create a sub-account. Added 2026.05.15.
   */
  addSubAccount(
    params: AddSubAccountRequestUTA,
  ): Promise<APISuccessResponse<AddSubAccountResponseUTA>> {
    return this.postPrivate('api/ua/v2/user/sub/create-sub-account', params);
  }

  /**
   * Add Sub-Account API (UTA)
   * Create an API key for a sub-account. Added 2026.05.15.
   */
  addSubAccountApi(
    params: AddSubAccountApiRequestUTA,
  ): Promise<APISuccessResponse<AddSubAccountApiResponseUTA>> {
    return this.postPrivate('api/ua/v2/user/create-sub-api-key', params);
  }

  /**
   * Get Withdrawal Quotas (UTA)
   * Obtain withdrawal quota information for a currency. Added 2026.05.15.
   */
  getWithdrawalQuotas(
    params: GetWithdrawalQuotasRequestUTA,
  ): Promise<APISuccessResponse<WithdrawalQuotasUTA>> {
    return this.getPrivate('api/ua/v2/withdrawals/quotas', params);
  }

  /**
   * Withdraw (UTA)
   * Withdraw the specified currency. Added 2026.05.15.
   */
  submitWithdraw(
    params: SubmitWithdrawRequestUTA,
  ): Promise<APISuccessResponse<SubmitWithdrawResponseUTA>> {
    return this.postPrivate('api/ua/v2/withdrawal', params);
  }

  /**
   * Cancel Withdrawal (UTA)
   * Cancel a withdrawal request in PROCESSING status. Added 2026.05.15.
   */
  cancelWithdrawal(params?: {
    withdrawalId?: string;
  }): Promise<APISuccessResponse<string | null>> {
    return this.deletePrivate('api/ua/v2/withdrawal', params);
  }

  /**
   * Get Third-Party Custody Account Currency Limits
   * OES remaining custody quota per custodian and settlement currency.
   */
  getThirdPartyCustodyQuota(
    params?: GetThirdPartyCustodyQuotaRequestUTA,
  ): Promise<APISuccessResponse<ThirdPartyCustodyQuotaUTA[]>> {
    return this.getPrivate('api/ua/v2/oes/custody-quota', params);
  }

  /**
   * Get Small Balance Currencies
   * Query currencies eligible for conversion to KCS. Requires General permission.
   * @see https://www.kucoin.com/docs-new/v2/rest/ua/small-balance-currencies
   */
  getSmallBalanceCurrencies(
    params: GetSmallBalanceCurrenciesRequestUTA,
  ): Promise<APISuccessResponse<GetSmallBalanceCurrenciesResponseUTA>> {
    return this.getPrivate('api/ua/v2/asset/small-balance/currencies', params);
  }

  /**
   * Convert Small Balance
   * Convert 1 to 20 source currencies into KCS. Requires Spot permission.
   * @see https://www.kucoin.com/docs-new/v2/rest/ua/small-balance-convert
   */
  convertSmallBalance(
    params: ConvertSmallBalanceRequestUTA,
  ): Promise<APISuccessResponse<SmallBalanceOrderUTA>> {
    return this.postPrivate('api/ua/v2/asset/small-balance/order', params);
  }

  /**
   * Get Small Balance Convert Order Detail
   * Query an order by orderId or clientOrderId. Requires General permission.
   * @see https://www.kucoin.com/docs-new/v2/rest/ua/small-balance-order-detail
   */
  getSmallBalanceOrderDetail(
    params: GetSmallBalanceOrderDetailRequestUTA,
  ): Promise<APISuccessResponse<SmallBalanceOrderUTA>> {
    return this.getPrivate(
      'api/ua/v2/asset/small-balance/order/detail',
      params,
    );
  }

  /**
   * Get Small Balance Convert Order History
   * Query paginated conversion orders. Requires General permission.
   * @see https://www.kucoin.com/docs-new/v2/rest/ua/small-balance-order-history
   */
  getSmallBalanceOrderHistory(
    params: GetSmallBalanceOrderHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetSmallBalanceOrderHistoryResponseUTA>> {
    return this.getPrivate(
      'api/ua/v2/asset/small-balance/order/history',
      params,
    );
  }

  /**
   *
   * REST - Unified Trading Account - Orders
   *
   */

  /**
   * Place Order
   * This interface can be used to place orders.
   * Supports RPI (Retail Price Improvement) orders for Futures as of 2025.01.02.
   * Note: timeInForce supports 'RPI' value for Futures only (Phase 1).
   * Note: For Classic mode, tradeType is required in query param.
   * Note: For Unified mode, tradeType is sent in the request body (incl. MARGIN as of 2026.04.19).
   * Note: closeOrder supported for closing futures position by symbol.
   */
  placeOrder(
    params: PlaceOrderRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<PlaceOrderResponseUTA>> {
    const { tradeType, ...bodyParams } = params;
    const url =
      accountMode === 'classic'
        ? `api/ua/v1/classic/order/place?tradeType=${tradeType}`
        : 'api/ua/v2/unified/order/place';

    const internalReqContext: InternalRequestContext = {
      derivedClientType: isUTAMainClientType(params)
        ? REST_CLIENT_TYPE_ENUM.main
        : REST_CLIENT_TYPE_ENUM.futures,
    };

    if (accountMode === 'unified') {
      return this.postPrivate(
        url,
        { ...bodyParams, tradeType },
        internalReqContext,
      );
    }

    return this.postPrivate(url, bodyParams, internalReqContext);
  }

  /**
   * Amend Order
   * Modify price, size, or TP/SL trigger prices. Futures only. Provide orderId or clientOid.
   */
  amendOrder(
    params: AmendOrderRequestUTA,
  ): Promise<APISuccessResponse<AmendOrderResponseUTA>> {
    return this.postPrivate('api/ua/v2/unified/order/amend', params);
  }

  /**
   * Batch Place Order (Classic)
   * This interface can be used for placing batch orders.
   * URL changed to /api/ua/v2/{accountMode}/order/place-batch as of 2026.01.17.
   * Note: timeInForce supports 'RPI' value for Futures as of 2025.01.02.
   */
  batchPlaceOrder(
    params: BatchPlaceOrderRequestUTA,
    accountMode: 'classic' | 'unified' = 'classic',
  ): Promise<APISuccessResponse<BatchPlaceOrderResponseUTA>> {
    const url =
      accountMode === 'classic'
        ? `api/ua/v1/classic/order/place-batch?tradeType=${params.tradeType}`
        : 'api/ua/v2/unified/order/place-batch';

    const internalReqContext: InternalRequestContext = {
      derivedClientType: isUTAMainClientType(params)
        ? REST_CLIENT_TYPE_ENUM.main
        : REST_CLIENT_TYPE_ENUM.futures,
    };

    return this.postPrivate(url, params, internalReqContext);
  }

  /**
   * Get Order Details
   * This interface can be used getting single order details.
   * Note: timeInForce returns 'RPI' value for Futures RPI orders as of 2025.01.02.
   * Note: status changed from String to Number for UTA as of 2026.01.17.
   * Note: orderTime/updatedTime standardized to nanoseconds as of 2026.01.12.
   *
   * @deprecated Use {@link getClassicOrderDetails} or {@link getUnifiedOrderDetails}.
   */
  getOrderDetails(
    params: GetOrderDetailsRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<OrderDetailsUTA>> {
    if (accountMode === 'classic') {
      return this.getClassicOrderDetails(params);
    }
    return this.getUnifiedOrderDetails(params);
  }

  /**
   * Get Classic Order Details
   * Single order details on the classic account.
   */
  getClassicOrderDetails(
    params: GetOrderDetailsRequestUTA,
  ): Promise<APISuccessResponse<OrderDetailsUTA>> {
    return this.getPrivate('api/ua/v1/classic/order/detail', params);
  }

  /**
   * Get Unified Order Details
   * Single order details on the unified account.
   */
  getUnifiedOrderDetails(
    params: GetOrderDetailsRequestUTA,
  ): Promise<APISuccessResponse<OrderDetailsUTA>> {
    return this.getPrivate('api/ua/v2/unified/order/detail', params);
  }

  /**
   * Get Open Order List
   * This interface can be used getting open order list.
   * Note: timeInForce returns 'RPI' value for Futures RPI orders as of 2025.01.02.
   * Note: status changed from String to Number for UTA as of 2026.01.17.
   * Note: orderTime/updatedTime standardized to nanoseconds as of 2026.01.12.
   *
   * @deprecated Use {@link getClassicOpenOrderList} or {@link getUnifiedOpenOrderList}.
   */
  getOpenOrderList(
    params: GetOpenOrderListRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<GetOpenOrderListResponseUTA>> {
    if (accountMode === 'classic') {
      return this.getClassicOpenOrderList(params);
    }
    return this.getUnifiedOpenOrderList(params);
  }

  /**
   * Get Classic Open Order List
   * Open orders on the classic account.
   */
  getClassicOpenOrderList(
    params: GetOpenOrderListRequestUTA,
  ): Promise<APISuccessResponse<GetOpenOrderListResponseUTA>> {
    return this.getPrivate('api/ua/v1/classic/order/open-list', params);
  }

  /**
   * Get Unified Open Order List
   * Open orders on the unified account.
   */
  getUnifiedOpenOrderList(
    params: GetOpenOrderListRequestUTA,
  ): Promise<APISuccessResponse<GetOpenOrderListResponseUTA>> {
    return this.getPrivate('api/ua/v2/unified/order/open-list', params);
  }

  /**
   * Get Order History
   * This interface can be used for getting order history.
   * Note: timeInForce returns 'RPI' value for Futures RPI orders as of 2025.01.02.
   * Note: status changed from String to Number for UTA as of 2026.01.17.
   * Note: orderTime/updatedTime standardized to nanoseconds as of 2026.01.12.
   *
   * @deprecated Use {@link getClassicOrderHistory} or {@link getUnifiedOrderHistory}.
   */
  getOrderHistory(
    params: GetOrderHistoryRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<GetOrderHistoryResponseUTA>> {
    if (accountMode === 'classic') {
      return this.getClassicOrderHistory(params);
    }
    return this.getUnifiedOrderHistory(params);
  }

  /**
   * Get Classic Order History
   * Order history on the classic account.
   */
  getClassicOrderHistory(
    params: GetOrderHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetOrderHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v1/classic/order/history', params);
  }

  /**
   * Get Unified Order History
   * Order history on the unified account.
   */
  getUnifiedOrderHistory(
    params: GetOrderHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetOrderHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/unified/order/history', params);
  }

  /**
   * Get Trade History
   * This interface can be used for getting trade execution history.
   * Note: executionTime standardized to nanoseconds as of 2026.01.12.
   * Note: isRpiTrade added for Futures as of 2025.01.02.
   *
   * @deprecated Use {@link getClassicTradeHistory} or {@link getUnifiedTradeHistory}.
   */
  getTradeHistory(
    params: GetTradeHistoryRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<GetTradeHistoryResponseUTA>> {
    if (accountMode === 'classic') {
      return this.getClassicTradeHistory(params);
    }
    return this.getUnifiedTradeHistory(params);
  }

  /**
   * Get Classic Trade History
   * Trade execution history on the classic account.
   */
  getClassicTradeHistory(
    params: GetTradeHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetTradeHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v1/classic/order/execution', params);
  }

  /**
   * Get Unified Trade History
   * Trade execution history on the unified account.
   */
  getUnifiedTradeHistory(
    params: GetTradeHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetTradeHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/unified/order/execution', params);
  }

  /**
   * Cancel Order
   * This interface can be used to cancel orders.
   * Note: ts (timestamp in nanoseconds) only effective for unified account mode.
   */
  cancelOrder(
    params: CancelOrderRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<CancelOrderResponseUTA>> {
    const url =
      accountMode === 'classic'
        ? `api/ua/v1/classic/order/cancel?tradeType=${params.tradeType}`
        : 'api/ua/v2/unified/order/cancel';
    return this.postPrivate(url, params);
  }

  /**
   * Batch Cancel Orders
   * This interface can be used for batch cancel orders (maximum 20 orders).
   * Note: tradeType required for Classic accounts only; ignored in UTA (UNIFIED) mode.
   * Note: ts (timestamp in nanoseconds) not supported for classic accounts.
   */
  batchCancelOrders(
    params: BatchCancelOrdersRequestUTA,
    accountMode: 'classic' | 'unified' = 'unified',
  ): Promise<APISuccessResponse<BatchCancelOrdersResponseUTA>> {
    const url =
      accountMode === 'classic'
        ? `api/ua/v1/classic/order/cancel-batch?tradeType=${params.tradeType}`
        : 'api/ua/v2/unified/order/cancel-batch';
    return this.postPrivate(url, params);
  }

  /**
   * Batch Cancel Orders By Symbol
   * Cancels orders in batch by symbol. UTA only. Supports SPOT (non-margin), FUTURES, and MARGIN (Spot-Margin as of 2026.05.15).
   */
  batchCancelOrdersBySymbol(
    params: BatchCancelOrdersBySymbolRequestUTA,
  ): Promise<APISuccessResponse<BatchCancelOrdersBySymbolResponseUTA>> {
    return this.postPrivate('api/ua/v2/unified/order/cancel-all', params);
  }

  /**
   * Set DCP (Disconnection Protect / Deadman Switch) - Classic Only
   * Set automatic order cancellation after specified time.
   * Call this interface to automatically cancel all orders of the set trading pair after the specified time.
   * Note: Order cancellation delay is between 0 and 10 seconds.
   * Note: timeout range: -1 (unset) or 5 <= timeout <= 86400 seconds.
   */
  setDCP(
    params: SetDCPRequestUTA,
  ): Promise<APISuccessResponse<DCPResponseUTA>> {
    return this.postPrivate('api/ua/v1/dcp/set', params);
  }

  /**
   * Get DCP (Disconnection Protect / Deadman Switch) - Classic Only
   * Get automatic order cancellation settings.
   * If data is empty, it means DCP is not set.
   */
  getDCP(
    params: GetDCPRequestUTA,
  ): Promise<APISuccessResponse<DCPResponseUTA>> {
    return this.getPrivate('api/ua/v1/dcp/query', params);
  }

  /**
   *
   * REST - Unified Trading Account - Positions
   *
   */

  /**
   * Get Position List (UTA)
   * Get the position details of all open positions.
   * Note: creationTime standardized to nanoseconds as of 2026.01.12.
   * Note: pageNumber, pageSize query params and liquidationPrice in each position (as of 2026.04.09).
   * Note: adlPercentage added 2026.05.15.
   * Note: positionMargin and riskRatio added in latest UTA update.
   */
  getPositionList(
    params?: GetPositionListRequestUTA,
  ): Promise<APISuccessResponse<PositionUTA[]>> {
    return this.getPrivate('api/ua/v2/unified/position/open-list', params);
  }

  /**
   * Batch Modify Margin Mode (UTA)
   * Batch modify the margin mode for futures positions.
   */
  batchModifyMarginMode(
    params: BatchModifyMarginModeRequestUTA,
  ): Promise<APISuccessResponse<BatchModifyMarginModeResponseUTA>> {
    return this.postPrivate('api/ua/v2/unified/position/margin-mode', params);
  }

  /**
   * Modify Isolated Futures Margin (UTA)
   * Extract or add margin for an isolated futures position.
   */
  modifyIsolatedFuturesMargin(
    params: ModifyIsolatedFuturesMarginRequestUTA,
  ): Promise<APISuccessResponse<ModifyIsolatedFuturesMarginResponseUTA>> {
    return this.postPrivate('api/ua/v2/unified/position/modify-margin', params);
  }

  /**
   * Get Positions History (UTA)
   * Query position history information records.
   * Note: Data retained for up to 3 months.
   * Note: Each query limited to 7 days time range.
   * Note: creationTime and closingTime standardized to nanoseconds as of 2026.01.12.
   */
  getPositionsHistory(
    params?: GetPositionsHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetPositionsHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/position/history', params);
  }

  /**
   * Get Private Funding Fee History
   * Settled funding fee records for the current account.
   */
  getPrivateFundingFeeHistory(
    params?: GetPrivateFundingFeeHistoryRequestUTA,
  ): Promise<APISuccessResponse<GetPrivateFundingFeeHistoryResponseUTA>> {
    return this.getPrivate('api/ua/v2/position/funding-history', params);
  }

  /**
   * Get Account Position Tiers
   * Request account position tiers (risk limit) info.
   * Note: Currently only queries of classic - futures isolated margin are supported.
   *
   * @deprecated Use {@link getClassicAccountPositionTiers} or {@link getUnifiedAccountPositionTiers}.
   */
  getAccountPositionTiers(
    params: GetAccountPositionTiersRequestUTA,
    accountMode: 'classic' | 'unified' = 'classic',
  ): Promise<APISuccessResponse<PositionTierUTA[]>> {
    if (accountMode === 'classic') {
      return this.getClassicAccountPositionTiers(params);
    }
    return this.getUnifiedAccountPositionTiers(params);
  }

  /**
   * Get Classic Account Position Tiers
   * Classic account position tiers (risk limit).
   * Note: Currently only queries of classic - futures isolated margin are supported.
   */
  getClassicAccountPositionTiers(
    params: GetAccountPositionTiersRequestUTA,
  ): Promise<APISuccessResponse<PositionTierUTA[]>> {
    return this.getPrivate('api/ua/v1/classic/position/tiers', params);
  }

  /**
   * Get Unified Account Position Tiers
   * Unified account position tiers (risk limit).
   */
  getUnifiedAccountPositionTiers(
    params: GetAccountPositionTiersRequestUTA,
  ): Promise<APISuccessResponse<PositionTierUTA[]>> {
    return this.getPrivate('api/ua/v2/unified/position/tiers', params);
  }
}
