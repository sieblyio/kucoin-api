
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/kucoin-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/kucoin-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/kucoin-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [SpotClient](#SpotClientts)
- [FuturesClient](#FuturesClientts)
- [WebsocketAPIClient](#WebsocketAPIClientts)
- [UnifiedAPIClient](#UnifiedAPIClientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# SpotClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [SpotClient.ts](/src/SpotClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getMyIp()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L322) |  | GET | `api/v1/ip` |
| [getServiceStatus()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L330) |  | GET | `api/v1/status` |
| [getAccountSummary()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L345) | :closed_lock_with_key:  | GET | `api/v2/user-info` |
| [getAccountSummaryV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L355) | :closed_lock_with_key:  | GET | `api/v3/user-info` |
| [getKYCRegions()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L364) | :closed_lock_with_key:  | GET | `api/kyc/regions/v4` |
| [getApikeyInfo()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L374) | :closed_lock_with_key:  | GET | `api/v1/user/api-key` |
| [getUserType()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L383) | :closed_lock_with_key:  | GET | `api/v1/hf/accounts/opened` |
| [getBalances()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L392) | :closed_lock_with_key:  | GET | `api/v1/accounts` |
| [getAccountDetail()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L403) | :closed_lock_with_key:  | GET | `api/v1/accounts/{accountId}` |
| [getMarginBalance()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L414) | :closed_lock_with_key:  | GET | `api/v3/margin/accounts` |
| [getIsolatedMarginBalance()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L425) | :closed_lock_with_key:  | GET | `api/v3/isolated/accounts` |
| [getTransactions()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L438) | :closed_lock_with_key:  | GET | `api/v1/accounts/ledgers` |
| [getHFTransactions()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L450) | :closed_lock_with_key:  | GET | `api/v1/hf/accounts/ledgers` |
| [getHFMarginTransactions()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L462) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/account/ledgers` |
| [createSubAccount()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L479) | :closed_lock_with_key:  | POST | `api/v2/sub/user/created` |
| [enableSubAccountMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L491) | :closed_lock_with_key:  | POST | `api/v3/sub/user/margin/enable` |
| [enableSubAccountFutures()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L501) | :closed_lock_with_key:  | POST | `api/v3/sub/user/futures/enable` |
| [getSubAccountsV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L510) | :closed_lock_with_key:  | GET | `api/v2/sub/user` |
| [getSubAccountBalance()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L522) | :closed_lock_with_key:  | GET | `api/v1/sub-accounts/{subUserId}` |
| [getSubAccountBalancesV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L537) | :closed_lock_with_key:  | GET | `api/v2/sub-accounts` |
| [createSubAPI()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L555) | :closed_lock_with_key:  | POST | `api/v1/sub/api-key` |
| [updateSubAPI()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L566) | :closed_lock_with_key:  | POST | `api/v1/sub/api-key/update` |
| [getSubAPIs()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L578) | :closed_lock_with_key:  | GET | `api/v1/sub/api-key` |
| [deleteSubAPI()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L590) | :closed_lock_with_key:  | DELETE | `api/v1/sub/api-key` |
| [createDepositAddressV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L607) | :closed_lock_with_key:  | POST | `api/v3/deposit-address/create` |
| [getDepositAddressesV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L619) | :closed_lock_with_key:  | GET | `api/v3/deposit-addresses` |
| [getDeposits()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L633) | :closed_lock_with_key:  | GET | `api/v1/deposits` |
| [getWithdrawalQuotas()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L650) | :closed_lock_with_key:  | GET | `api/v1/withdrawals/quotas` |
| [submitWithdrawV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L662) | :closed_lock_with_key:  | POST | `api/v3/withdrawals` |
| [cancelWithdrawal()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L675) | :closed_lock_with_key:  | DELETE | `api/v1/withdrawals/{withdrawalId}` |
| [getWithdrawals()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L687) | :closed_lock_with_key:  | GET | `api/v1/withdrawals` |
| [getWithdrawalById()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L698) | :closed_lock_with_key:  | GET | `api/v1/withdrawals/{withdrawalId}` |
| [getTransferable()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L716) | :closed_lock_with_key:  | GET | `api/v1/accounts/transferable` |
| [submitFlexTransfer()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L728) | :closed_lock_with_key:  | POST | `api/v3/accounts/universal-transfer` |
| [getBasicUserFee()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L747) | :closed_lock_with_key:  | GET | `api/v1/base-fee` |
| [getTradingPairFee()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L763) | :closed_lock_with_key:  | GET | `api/v1/trade-fees` |
| [getAnnouncements()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L786) |  | GET | `api/v3/announcements` |
| [getCurrency()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L797) |  | GET | `api/v3/currencies/{currency}` |
| [getCurrencies()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L809) |  | GET | `api/v3/currencies` |
| [getSymbol()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L819) |  | GET | `api/v2/symbols/{symbol}` |
| [getSymbols()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L831) |  | GET | `api/v2/symbols` |
| [getTicker()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L844) |  | GET | `api/v1/market/orderbook/level1` |
| [getTickers()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L853) |  | GET | `api/v1/market/allTickers` |
| [getTradeHistories()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L864) |  | GET | `api/v1/market/histories` |
| [getKlines()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L876) |  | GET | `api/v1/market/candles` |
| [getOrderBookLevel20()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L887) |  | GET | `api/v1/market/orderbook/level2_20` |
| [getOrderBookLevel100()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L898) |  | GET | `api/v1/market/orderbook/level2_100` |
| [getFullOrderBook()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L909) | :closed_lock_with_key:  | GET | `api/v3/market/orderbook/level2` |
| [getCallAuctionPartOrderBook()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L921) |  | GET | `api/v1/market/orderbook/callauction/level2_{size}` |
| [getCallAuctionInfo()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L938) |  | GET | `api/v1/market/callauctionData` |
| [getFiatPrice()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L949) |  | GET | `api/v1/prices` |
| [get24hrStats()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L958) |  | GET | `api/v1/market/stats` |
| [getMarkets()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L969) |  | GET | `api/v1/markets` |
| [submitHFOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L986) | :closed_lock_with_key:  | POST | `api/v1/hf/orders` |
| [submitHFOrderSync()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1002) | :closed_lock_with_key:  | POST | `api/v1/hf/orders/sync` |
| [submitHFOrderTest()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1014) | :closed_lock_with_key:  | POST | `api/v1/hf/orders/test` |
| [submitHFMultipleOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1023) | :closed_lock_with_key:  | POST | `api/v1/hf/orders/multi` |
| [submitHFMultipleOrdersSync()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1035) | :closed_lock_with_key:  | POST | `api/v1/hf/orders/multi/sync` |
| [cancelHFOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1047) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders/{orderId}` |
| [cancelHFOrderSync()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1061) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders/sync/{orderId}` |
| [cancelHFOrderByClientOId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1077) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders/client-order/{clientOid}` |
| [cancelHFOrderSyncByClientOId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1097) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders/sync/client-order/{clientOid}` |
| [cancelHFOrdersNumber()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1112) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders/cancel/{orderId}` |
| [cancelHFAllOrdersBySymbol()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1127) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders` |
| [cancelHFAllOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1138) | :closed_lock_with_key:  | DELETE | `api/v1/hf/orders/cancelAll` |
| [updateHFOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1147) | :closed_lock_with_key:  | POST | `api/v1/hf/orders/alter` |
| [getHFOrderDetailsByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1161) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/{orderId}` |
| [getHFOrderDetailsByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1173) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/client-order/{clientOid}` |
| [getHFActiveSymbols()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1188) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/active/symbols` |
| [getHFActiveOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1203) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/active` |
| [getHFActiveOrdersPaginated()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1215) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/active/page` |
| [getHFCompletedOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1237) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/done` |
| [getHFFilledOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1251) | :closed_lock_with_key:  | GET | `api/v1/hf/fills` |
| [cancelHFOrderAutoSettingQuery()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1266) | :closed_lock_with_key:  | GET | `api/v1/hf/orders/dead-cancel-all/query` |
| [cancelHFOrderAutoSetting()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1279) | :closed_lock_with_key:  | POST | `api/v1/hf/orders/dead-cancel-all` |
| [submitStopOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1296) | :closed_lock_with_key:  | POST | `api/v1/stop-order` |
| [cancelStopOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1307) | :closed_lock_with_key:  | DELETE | `api/v1/stop-order/cancelOrderByClientOid` |
| [cancelStopOrderById()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1327) | :closed_lock_with_key:  | DELETE | `api/v1/stop-order/{orderId}` |
| [cancelStopOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1340) | :closed_lock_with_key:  | DELETE | `api/v1/stop-order/cancel` |
| [getStopOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1353) | :closed_lock_with_key:  | GET | `api/v1/stop-order` |
| [getStopOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1366) | :closed_lock_with_key:  | GET | `api/v1/stop-order/{orderId}` |
| [getStopOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1377) | :closed_lock_with_key:  | GET | `api/v1/stop-order/queryOrderByClientOid` |
| [submitOCOOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1389) | :closed_lock_with_key:  | POST | `api/v3/oco/order` |
| [cancelOCOOrderById()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1402) | :closed_lock_with_key:  | DELETE | `api/v3/oco/order/{orderId}` |
| [cancelOCOOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1415) | :closed_lock_with_key:  | DELETE | `api/v3/oco/client-order/{clientOid}` |
| [cancelMultipleOCOOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1428) | :closed_lock_with_key:  | DELETE | `api/v3/oco/orders` |
| [getOCOOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1444) | :closed_lock_with_key:  | GET | `api/v3/oco/order/{orderId}` |
| [getOCOOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1455) | :closed_lock_with_key:  | GET | `api/v3/oco/client-order/{clientOid}` |
| [getOCOOrderDetails()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1466) | :closed_lock_with_key:  | GET | `api/v3/oco/order/details/{orderId}` |
| [getOCOOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1477) | :closed_lock_with_key:  | GET | `api/v3/oco/orders` |
| [getMarginActivePairsV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1494) | :closed_lock_with_key:  | GET | `api/v3/margin/symbols` |
| [getMarginConfigInfo()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1507) |  | GET | `api/v1/margin/config` |
| [getMarginLeveragedToken()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1517) | :closed_lock_with_key:  | GET | `api/v3/etf/info` |
| [getMarginMarkPrices()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1528) |  | GET | `api/v3/mark-price/all-symbols` |
| [getMarginMarkPrice()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1537) |  | GET | `api/v1/mark-price/{symbol}/current` |
| [getIsolatedMarginSymbolsConfig()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1548) | :closed_lock_with_key:  | GET | `api/v1/isolated/symbols` |
| [getMarginCollateralRatio()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1559) |  | GET | `api/v3/margin/collateralRatio` |
| [getMarketAvailableInventory()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1570) |  | GET | `api/v3/margin/available-inventory` |
| [submitHFMarginOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1587) | :closed_lock_with_key:  | POST | `api/v3/hf/margin/order` |
| [submitHFMarginOrderTest()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1598) | :closed_lock_with_key:  | POST | `api/v3/hf/margin/order/test` |
| [cancelHFMarginOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1609) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/orders/{orderId}` |
| [cancelHFMarginOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1625) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/orders/client-order/{clientOid}` |
| [cancelHFAllMarginOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1644) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/orders` |
| [getHFMarginOpenSymbols()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1656) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/order/active/symbols` |
| [getHFActiveMarginOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1667) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/orders/active` |
| [getHFMarginFilledOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1678) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/orders/done` |
| [getHFMarginFills()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1692) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/fills` |
| [getHFMarginOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1706) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/orders/{orderId}` |
| [getHFMarginOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1718) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/orders/client-order/{clientOid}?symbol={symbol}` |
| [addMarginStopOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1732) | :closed_lock_with_key:  | POST | `api/v3/hf/margin/stop-order` |
| [cancelMarginStopOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1743) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/stop-order/cancel-by-id?orderId={orderId}` |
| [cancelMarginStopOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1756) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/stop-order/cancel-by-clientOid` |
| [batchCancelMarginStopOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1770) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/stop-order/cancel` |
| [getMarginStopOrdersList()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1781) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/stop-orders` |
| [getMarginStopOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1792) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/stop-order/orderId?orderId={orderId}` |
| [getMarginStopOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1805) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/stop-order/clientOid` |
| [addMarginOcoOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1816) | :closed_lock_with_key:  | POST | `api/v3/hf/margin/oco-order` |
| [cancelMarginOcoOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1827) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/oco-order/cancel-by-id?orderId={orderId}` |
| [cancelMarginOcoOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1840) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/oco-order/cancel-by-clientOid` |
| [batchCancelMarginOcoOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1854) | :closed_lock_with_key:  | DELETE | `api/v3/hf/margin/oco-order/cancel` |
| [getMarginOcoOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1865) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/oco-order/clientOid` |
| [getMarginOcoOrderDetailByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1876) | :closed_lock_with_key:  | GET | `api/v3/hf/margin/oco-order/detail/orderId?orderId={orderId}` |
| [getBorrowInterestRate()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1895) | :closed_lock_with_key:  | GET | `api/v3/margin/borrowRate` |
| [marginBorrowV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1906) | :closed_lock_with_key:  | POST | `api/v3/margin/borrow` |
| [getMarginBorrowHistoryV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1917) | :closed_lock_with_key:  | GET | `api/v3/margin/borrow` |
| [marginRepayV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1928) | :closed_lock_with_key:  | POST | `api/v3/margin/repay` |
| [getMarginRepayHistoryV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1939) | :closed_lock_with_key:  | GET | `api/v3/margin/repay` |
| [getMarginInterestRecordsV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1950) | :closed_lock_with_key:  | GET | `api/v3/margin/interest` |
| [updateMarginLeverageV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1961) | :closed_lock_with_key:  | POST | `api/v3/position/update-user-leverage` |
| [getLendingCurrencyV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1982) |  | GET | `api/v3/project/list` |
| [getLendingInterestRateV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L1995) |  | GET | `api/v3/project/marketInterestRate` |
| [submitLendingSubscriptionV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2013) | :closed_lock_with_key:  | POST | `api/v3/purchase` |
| [updateLendingSubscriptionOrdersV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2032) | :closed_lock_with_key:  | POST | `api/v3/lend/purchase/update` |
| [getLendingSubscriptionOrdersV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2045) | :closed_lock_with_key:  | GET | `api/v3/purchase/orders` |
| [submitLendingRedemptionV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2058) | :closed_lock_with_key:  | POST | `api/v3/redeem` |
| [getLendingRedemptionOrdersV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2077) | :closed_lock_with_key:  | GET | `api/v3/redeem/orders` |
| [getMarginRiskLimitConfig()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2094) | :closed_lock_with_key:  | GET | `api/v3/margin/currencies` |
| [getConvertSymbol()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2111) |  | GET | `api/v1/convert/symbol` |
| [getConvertCurrencies()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2122) |  | GET | `api/v1/convert/currencies` |
| [submitConvertOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2131) | :closed_lock_with_key:  | POST | `api/v1/convert/order` |
| [getConvertQuote()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2142) | :closed_lock_with_key:  | GET | `api/v1/convert/quote` |
| [getConvertOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2153) | :closed_lock_with_key:  | GET | `api/v1/convert/order/detail` |
| [getConvertOrderHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2164) | :closed_lock_with_key:  | GET | `api/v1/convert/order/history` |
| [submitConvertLimitOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2175) | :closed_lock_with_key:  | POST | `api/v1/convert/limit/order` |
| [getConvertLimitQuote()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2186) | :closed_lock_with_key:  | GET | `api/v1/convert/limit/quote` |
| [getConvertLimitOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2197) | :closed_lock_with_key:  | GET | `api/v1/convert/limit/order/detail` |
| [getConvertLimitOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2208) | :closed_lock_with_key:  | GET | `api/v1/convert/limit/orders` |
| [cancelConvertLimitOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2219) | :closed_lock_with_key:  | DELETE | `api/v1/convert/limit/order/cancel` |
| [subscribeEarnFixedIncome()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2237) | :closed_lock_with_key:  | POST | `api/v1/earn/orders` |
| [getEarnRedeemPreview()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2248) | :closed_lock_with_key:  | GET | `api/v1/earn/redeem-preview` |
| [submitRedemption()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2259) | :closed_lock_with_key:  | DELETE | `api/v1/earn/orders` |
| [getEarnSavingsProducts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2270) | :closed_lock_with_key:  | GET | `api/v1/earn/saving/products` |
| [getEarnPromotionProducts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2281) | :closed_lock_with_key:  | GET | `api/v1/earn/promotion/products` |
| [getEarnFixedIncomeHoldAssets()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2292) | :closed_lock_with_key:  | GET | `api/v1/earn/hold-assets` |
| [getEarnStakingProducts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2303) | :closed_lock_with_key:  | GET | `api/v1/earn/staking/products` |
| [getEarnKcsStakingProducts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2315) | :closed_lock_with_key:  | GET | `api/v1/earn/kcs-staking/products` |
| [getEarnEthStakingProducts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2327) | :closed_lock_with_key:  | GET | `api/v1/earn/eth-staking/products` |
| [submitStructuredProductPurchase()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2344) | :closed_lock_with_key:  | POST | `api/v1/struct-earn/orders` |
| [getDualInvestmentProducts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2355) |  | GET | `api/v1/struct-earn/dual/products` |
| [getStructuredProductOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2366) | :closed_lock_with_key:  | GET | `api/v1/struct-earn/orders` |
| [getDiscountRateConfigs()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2384) | :closed_lock_with_key:  | GET | `api/v1/otc-loan/discount-rate-configs` |
| [getOtcLoan()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2395) | :closed_lock_with_key:  | GET | `api/v1/otc-loan/loan` |
| [getOtcLoanAccounts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2404) | :closed_lock_with_key:  | GET | `api/v1/otc-loan/accounts` |
| [getAffiliateUserRebateInfo()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2420) | :closed_lock_with_key:  | GET | `api/v2/affiliate/inviter/statistics` |
| [getAffiliateInvitees()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2429) | :closed_lock_with_key:  | GET | `api/v2/affiliate/queryInvitees` |
| [getAffiliateCommission()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2440) | :closed_lock_with_key:  | GET | `api/v2/affiliate/queryMyCommission` |
| [getAffiliateTradeHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2451) | :closed_lock_with_key:  | GET | `api/v2/affiliate/queryTransactionByUid` |
| [getAffiliateTransaction()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2462) | :closed_lock_with_key:  | GET | `api/v2/affiliate/queryTransactionByTime` |
| [getKumining()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2473) | :closed_lock_with_key:  | GET | `api/v2/affiliate/queryKumining` |
| [getBrokerRebateOrderDownloadLink()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2491) | :closed_lock_with_key:  | GET | `api/v1/broker/api/rebase/download` |
| [getBrokerRebateOrderDownloadLinkV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2504) | :closed_lock_with_key:  | GET | `api/v2/broker/api/rebase/download` |
| [getPublicWSConnectionToken()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2521) |  | POST | `api/v1/bullet-public` |
| [getPrivateWSConnectionToken()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2528) | :closed_lock_with_key:  | POST | `api/v1/bullet-private` |
| [getPrivateWSConnectionTokenV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2536) | :closed_lock_with_key:  | POST | `api/v2/bullet-private` |
| [getSubAccountsV1()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2558) | :closed_lock_with_key:  | GET | `api/v1/sub/user` |
| [getSubAccountBalancesV1()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2566) | :closed_lock_with_key:  | GET | `api/v1/sub-accounts` |
| [getMarginBalances()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2581) | :closed_lock_with_key:  | GET | `api/v1/margin/account` |
| [createDepositAddress()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2599) | :closed_lock_with_key:  | POST | `api/v1/deposit-addresses` |
| [getDepositAddressesV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2609) | :closed_lock_with_key:  | GET | `api/v2/deposit-addresses` |
| [getDepositAddressV1()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2618) | :closed_lock_with_key:  | GET | `api/v1/deposit-addresses` |
| [getHistoricalDepositsV1()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2629) | :closed_lock_with_key:  | GET | `api/v1/hist-deposits` |
| [getHistoricalWithdrawalsV1()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2645) | :closed_lock_with_key:  | GET | `api/v1/hist-withdrawals` |
| [submitWithdraw()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2654) | :closed_lock_with_key:  | POST | `api/v1/withdrawals` |
| [submitTransferMasterSub()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2670) | :closed_lock_with_key:  | POST | `api/v2/accounts/sub-transfer` |
| [submitInnerTransfer()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2682) | :closed_lock_with_key:  | POST | `api/v2/accounts/inner-transfer` |
| [submitOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2700) | :closed_lock_with_key:  | POST | `api/v1/orders` |
| [submitOrderTest()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2712) | :closed_lock_with_key:  | POST | `api/v1/orders/test` |
| [submitMultipleOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2720) | :closed_lock_with_key:  | POST | `api/v1/orders/multi` |
| [cancelOrderById()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2731) | :closed_lock_with_key:  | DELETE | `api/v1/orders/{orderId}` |
| [cancelOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2743) | :closed_lock_with_key:  | DELETE | `api/v1/order/client-order/{clientOid}` |
| [cancelAllOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2756) | :closed_lock_with_key:  | DELETE | `api/v1/orders` |
| [getOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2768) | :closed_lock_with_key:  | GET | `api/v1/orders` |
| [getRecentOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2778) | :closed_lock_with_key:  | GET | `api/v1/limit/orders` |
| [getOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2789) | :closed_lock_with_key:  | GET | `api/v1/orders/{orderId}` |
| [getOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2799) | :closed_lock_with_key:  | GET | `api/v1/order/client-order/{clientOid}` |
| [getFills()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2815) | :closed_lock_with_key:  | GET | `api/v1/fills` |
| [getRecentFills()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2825) | :closed_lock_with_key:  | GET | `api/v1/limit/fills` |
| [submitMarginOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2840) | :closed_lock_with_key:  | POST | `api/v1/margin/order` |
| [submitMarginOrderTest()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2851) | :closed_lock_with_key:  | POST | `api/v1/margin/order/test` |
| [getIsolatedMarginAccounts()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2866) | :closed_lock_with_key:  | GET | `api/v1/isolated/accounts` |
| [getIsolatedMarginAccount()](https://github.com/sieblyio/kucoin-api/blob/master/src/SpotClient.ts#L2877) | :closed_lock_with_key:  | GET | `api/v1/isolated/account/{symbol}` |

# FuturesClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClient.ts](/src/FuturesClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getBalance()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L97) | :closed_lock_with_key:  | GET | `api/v1/account-overview` |
| [getTransactions()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L107) | :closed_lock_with_key:  | GET | `api/v1/transaction-history` |
| [getSubBalances()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L126) | :closed_lock_with_key:  | GET | `api/v1/account-overview-all` |
| [getTradingPairFee()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L145) | :closed_lock_with_key:  | GET | `api/v1/trade-fees` |
| [getSymbol()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L166) |  | GET | `api/v1/contracts/{symbol}` |
| [getSymbols()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L177) |  | GET | `api/v1/contracts/active` |
| [getTicker()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L185) |  | GET | `api/v1/ticker` |
| [getTickers()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L195) |  | GET | `api/v1/allTickers` |
| [getFullOrderBookLevel2()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L203) |  | GET | `api/v1/level2/snapshot` |
| [getPartOrderBookLevel2Depth20()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L213) |  | GET | `api/v1/level2/depth20` |
| [getPartOrderBookLevel2Depth100()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L223) |  | GET | `api/v1/level2/depth100` |
| [getMarketTrades()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L233) |  | GET | `api/v1/trade/history` |
| [getKlines()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L243) |  | GET | `api/v1/kline/query` |
| [getMarkPrice()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L253) |  | GET | `api/v1/mark-price/{symbol}/current` |
| [getIndex()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L263) |  | GET | `api/v1/index/query` |
| [getInterestRates()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L276) |  | GET | `api/v1/interest/query` |
| [getPremiumIndex()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L289) |  | GET | `api/v1/premium/query` |
| [get24HourTransactionVolume()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L302) |  | GET | `api/v1/trade-statistics` |
| [getServiceStatus()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L322) |  | GET | `api/v1/status` |
| [submitOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L336) | :closed_lock_with_key:  | POST | `api/v1/orders` |
| [submitNewOrderTest()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L349) | :closed_lock_with_key:  | POST | `api/v1/orders/test` |
| [submitMultipleOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L360) | :closed_lock_with_key:  | POST | `api/v1/orders/multi` |
| [submitSLTPOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L370) | :closed_lock_with_key:  | POST | `api/v1/st-orders` |
| [cancelOrderById()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L383) | :closed_lock_with_key:  | DELETE | `api/v1/orders/{orderId}` |
| [cancelOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L393) | :closed_lock_with_key:  | DELETE | `api/v1/orders/client-order/{clientOid}` |
| [batchCancelOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L407) | :closed_lock_with_key:  | DELETE | `api/v1/orders/multi-cancel` |
| [cancelAllOrdersV3()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L417) | :closed_lock_with_key:  | DELETE | `api/v3/orders` |
| [cancelAllStopOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L427) | :closed_lock_with_key:  | DELETE | `api/v1/stopOrders` |
| [getOrderByOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L437) | :closed_lock_with_key:  | GET | `api/v1/orders/{orderId}` |
| [getOrderByClientOrderId()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L447) | :closed_lock_with_key:  | GET | `api/v1/orders/byClientOid` |
| [getOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L457) | :closed_lock_with_key:  | GET | `api/v1/orders` |
| [getRecentOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L467) | :closed_lock_with_key:  | GET | `api/v1/recentDoneOrders` |
| [getStopOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L477) | :closed_lock_with_key:  | GET | `api/v1/stopOrders` |
| [getOpenOrderStatistics()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L487) | :closed_lock_with_key:  | GET | `api/v1/openOrderStatistics` |
| [getRecentFills()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L497) | :closed_lock_with_key:  | GET | `api/v1/recentFills` |
| [getFills()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L509) | :closed_lock_with_key:  | GET | `api/v1/fills` |
| [getMarginMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L525) | :closed_lock_with_key:  | GET | `api/v2/position/getMarginMode` |
| [updateMarginMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L538) | :closed_lock_with_key:  | POST | `api/v2/position/changeMarginMode` |
| [batchSwitchMarginMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L554) | :closed_lock_with_key:  | POST | `api/v2/position/batchChangeMarginMode` |
| [getMaxOpenSize()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L565) | :closed_lock_with_key:  | GET | `api/v2/getMaxOpenSize` |
| [getPosition()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L576) | :closed_lock_with_key:  | GET | `api/v1/position` |
| [getPositionV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L586) | :closed_lock_with_key:  | GET | `api/v2/position` |
| [getPositions()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L596) | :closed_lock_with_key:  | GET | `api/v1/positions` |
| [getHistoryPositions()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L606) | :closed_lock_with_key:  | GET | `api/v1/history-positions` |
| [getMaxWithdrawMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L620) | :closed_lock_with_key:  | GET | `api/v1/margin/maxWithdrawMargin` |
| [getCrossMarginLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L630) | :closed_lock_with_key:  | GET | `api/v2/getCrossUserLeverage` |
| [changeCrossMarginLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L643) | :closed_lock_with_key:  | POST | `api/v2/changeCrossUserLeverage` |
| [depositMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L659) | :closed_lock_with_key:  | POST | `api/v1/position/margin/deposit-margin` |
| [getCrossMarginRiskLimit()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L671) | :closed_lock_with_key:  | GET | `api/v2/batchGetCrossOrderLimit` |
| [withdrawMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L683) | :closed_lock_with_key:  | POST | `api/v1/margin/withdrawMargin` |
| [getCrossMarginRequirement()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L694) | :closed_lock_with_key:  | GET | `api/v2/getCrossModeMarginRequirement` |
| [getRiskLimitLevel()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L706) | :closed_lock_with_key:  | GET | `api/v1/contracts/risk-limit/{symbol}` |
| [updateRiskLimitLevel()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L716) | :closed_lock_with_key:  | POST | `api/v1/position/risk-limit-level/change` |
| [getPositionMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L727) | :closed_lock_with_key:  | GET | `api/v2/position/getPositionMode` |
| [updatePositionMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L735) | :closed_lock_with_key:  | POST | `api/v2/position/switchPositionMode` |
| [getFundingRate()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L753) | :closed_lock_with_key:  | GET | `api/v1/funding-rate/{symbol}/current` |
| [getFundingRates()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L763) | :closed_lock_with_key:  | GET | `api/v1/contract/funding-rates` |
| [getFundingHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L773) | :closed_lock_with_key:  | GET | `api/v1/funding-history` |
| [submitCopyTradeOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L793) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/orders` |
| [submitCopyTradeOrderTest()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L808) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/orders/test` |
| [submitCopyTradeSLTPOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L822) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/st-orders` |
| [cancelCopyTradeOrderById()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L835) | :closed_lock_with_key:  | DELETE | `api/v1/copy-trade/futures/orders` |
| [cancelCopyTradeOrderByClientOid()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L845) | :closed_lock_with_key:  | DELETE | `api/v1/copy-trade/futures/orders/client-order` |
| [getCopyTradeMaxOpenSize()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L859) | :closed_lock_with_key:  | GET | `api/v1/copy-trade/futures/get-max-open-size` |
| [getCopyTradeMaxWithdrawMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L880) | :closed_lock_with_key:  | GET | `api/v1/copy-trade/futures/position/margin/max-withdraw-margin` |
| [addCopyTradeIsolatedMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L894) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/position/margin/deposit-margin` |
| [removeCopyTradeIsolatedMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L910) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/position/margin/withdraw-margin` |
| [modifyCopyTradeRiskLimitLevel()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L926) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/position/risk-limit-level/change` |
| [updateCopyTradeAutoDepositStatus()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L941) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/position/margin/auto-deposit-status` |
| [switchCopyTradeMarginMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L956) | :closed_lock_with_key:  | POST | `api/v1/copy-trade/futures/position/changeMarginMode` |
| [updateCopyTradeCrossMarginLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L969) | :closed_lock_with_key:  | POST | `api/v2/copy-trade/futures/changeCrossUserLeverage` |
| [getCopyTradeCrossMarginRequirement()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L982) | :closed_lock_with_key:  | POST | `api/v2/copy-trade/getCrossModeMarginRequirement` |
| [switchCopyTradePositionMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L996) | :closed_lock_with_key:  | POST | `api/v2/copy-trade/position/switchPositionMode` |
| [getBrokerRebateOrderDownloadLink()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1016) | :closed_lock_with_key:  | GET | `api/v1/broker/api/rebase/download` |
| [getBrokerRebateOrderDownloadLinkV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1029) | :closed_lock_with_key:  | GET | `api/v2/broker/api/rebase/download` |
| [getPublicWSConnectionToken()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1046) |  | POST | `api/v1/bullet-public` |
| [getPrivateWSConnectionToken()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1053) | :closed_lock_with_key:  | POST | `api/v1/bullet-private` |
| [getPrivateWSConnectionTokenV2()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1061) | :closed_lock_with_key:  | POST | `api/v2/bullet-private` |
| [submitTransferOut()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1076) | :closed_lock_with_key:  | POST | `api/v3/transfer-out` |
| [submitTransferIn()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1087) | :closed_lock_with_key:  | POST | `api/v1/transfer-in` |
| [getTransfers()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1098) | :closed_lock_with_key:  | GET | `api/v1/transfer-list` |
| [updateAutoDepositStatus()](https://github.com/sieblyio/kucoin-api/blob/master/src/FuturesClient.ts#L1113) | :closed_lock_with_key:  | POST | `api/v1/position/margin/auto-deposit-status` |

# WebsocketAPIClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [WebsocketAPIClient.ts](/src/WebsocketAPIClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewSpotOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L90) | :closed_lock_with_key:  | WS | `spot.order` |
| [modifySpotOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L104) | :closed_lock_with_key:  | WS | `spot.modify` |
| [cancelSpotOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L118) | :closed_lock_with_key:  | WS | `spot.cancel` |
| [submitSyncSpotOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L132) | :closed_lock_with_key:  | WS | `spot.sync_order` |
| [cancelSyncSpotOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L146) | :closed_lock_with_key:  | WS | `spot.sync_cancel` |
| [submitMarginOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L160) | :closed_lock_with_key:  | WS | `margin.order` |
| [cancelMarginOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L174) | :closed_lock_with_key:  | WS | `margin.cancel` |
| [submitFuturesOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L188) | :closed_lock_with_key:  | WS | `futures.order` |
| [cancelFuturesOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L202) | :closed_lock_with_key:  | WS | `futures.cancel` |
| [submitMultipleFuturesOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L218) | :closed_lock_with_key:  | WS | `futures.multi_order` |
| [amendFuturesOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L232) | :closed_lock_with_key:  | WS | `uta.amend` |
| [cancelMultipleFuturesOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/WebsocketAPIClient.ts#L246) | :closed_lock_with_key:  | WS | `futures.multi_cancel` |

# UnifiedAPIClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [UnifiedAPIClient.ts](/src/UnifiedAPIClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getAnnouncements()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L162) |  | GET | `api/ua/v2/market/announcement` |
| [getCurrency()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L172) |  | GET | `api/ua/v2/market/currency` |
| [getCurrencies()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L182) |  | GET | `api/ua/v2/asset/currencies` |
| [getThirdPartyCustodyCurrencies()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L192) |  | GET | `api/ua/v2/oes/currency` |
| [getSymbols()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L202) |  | GET | `api/ua/v2/market/instrument` |
| [getTickers()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L212) |  | GET | `api/ua/v2/market/ticker` |
| [getTrades()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L222) |  | GET | `api/ua/v2/market/trade` |
| [getOrderBook()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L232) |  | GET | `api/ua/v2/market/orderbook` |
| [getKlines()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L242) |  | GET | `api/ua/v2/market/kline` |
| [getIndexPrice()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L252) |  | GET | `api/ua/v2/market/index-price` |
| [getCurrentFundingRate()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L262) |  | GET | `api/ua/v2/market/funding-rate` |
| [getHistoryFundingRate()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L276) |  | GET | `api/ua/v2/market/funding-rate-history` |
| [getCrossMarginConfig()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L286) |  | GET | `api/ua/v1/market/cross-config` |
| [getBorrowableCurrencies()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L296) |  | GET | `api/ua/v2/market/borrowable-currency` |
| [getServiceStatus()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L306) |  | GET | `api/ua/v2/server/status` |
| [getClientIPAddress()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L316) |  | GET | `api/ua/v2/user/my-ip` |
| [getFiatPrice()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L324) |  | GET | `api/ua/v2/market/fiat-price` |
| [getInterestRateIndex()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L334) |  | GET | `api/ua/v2/market/interest-rate-index` |
| [getTradeStatistics()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L344) |  | GET | `api/ua/v2/trade-statistics` |
| [getCallAuctionInfo()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L354) |  | GET | `api/ua/v2/market/call-auction-info` |
| [getClassicAccount()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L371) | :closed_lock_with_key:  | GET | `api/ua/v2/account/balance` |
| [getAccount()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L381) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/account/balance` |
| [getAccountOverview()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L389) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/account/overview` |
| [getSubAccount()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L399) | :closed_lock_with_key:  | GET | `api/ua/v2/sub-account/balance` |
| [getSubAccountList()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L409) | :closed_lock_with_key:  | GET | `api/ua/v2/user/sub-account-list` |
| [getTransferQuotas()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L421) | :closed_lock_with_key:  | GET | `api/ua/v2/account/transfer-quota` |
| [flexTransfer()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L432) | :closed_lock_with_key:  | POST | `api/ua/v2/account/transfer` |
| [setSubAccountTransferPermission()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L442) | :closed_lock_with_key:  | POST | `api/ua/v2/sub-account/canTransferOut` |
| [getAccountMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L452) | :closed_lock_with_key:  | GET | `api/ua/v2/account/mode` |
| [setAccountMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L460) | :closed_lock_with_key:  | POST | `api/ua/v2/account/mode` |
| [getFeeRate()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L472) | :closed_lock_with_key:  | GET | `api/ua/v2/user/fee-rate` |
| [getAccountLedger()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L488) | :closed_lock_with_key:  | GET | `api/ua/v2/account/ledger` |
| [getInterestHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L502) | :closed_lock_with_key:  | GET | `api/ua/v2/account/interest-history` |
| [getBorrowingRatesAndLimits()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L512) | :closed_lock_with_key:  | GET | `api/ua/v2/account/interest-limits` |
| [modifyLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L522) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/account/modify-leverage` |
| [modifyMarginCrossLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L537) | :closed_lock_with_key:  | POST | `api/ua/v1/classic/account/modify-leverage-margin-cross` |
| [modifyClassicMarginCrossLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L551) | :closed_lock_with_key:  | POST | `api/ua/v1/classic/account/modify-leverage-margin-cross` |
| [modifyUnifiedMarginCrossLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L564) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/account/modify-leverage-margin-cross` |
| [getLeverage()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L577) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/account/leverage` |
| [getDepositAddress()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L589) | :closed_lock_with_key:  | GET | `api/ua/v2/asset/deposit/address` |
| [getDepositHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L599) | :closed_lock_with_key:  | GET | `api/ua/v2/asset/deposit/history` |
| [getWithdrawalHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L609) | :closed_lock_with_key:  | GET | `api/ua/v2/asset/withdrawal/history` |
| [setKcsFeeDeduction()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L619) | :closed_lock_with_key:  | GET | `api/ua/v2/account/fee/kcs-deduct` |
| [getApiKeyInfo()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L630) | :closed_lock_with_key:  | GET | `api/ua/v2/user/api-key` |
| [getKYCRegions()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L638) |  | GET | `api/ua/v2/user/kyc-region` |
| [getRateLimit()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L646) | :closed_lock_with_key:  | GET | `api/ua/v2/rate-limit/query` |
| [getAllRateLimit()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L656) | :closed_lock_with_key:  | GET | `api/ua/v2/rate-limit/query-all` |
| [getRateLimitCap()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L664) | :closed_lock_with_key:  | GET | `api/ua/v2/rate-limit/query-cap` |
| [setSubAccountsRateLimit()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L672) | :closed_lock_with_key:  | POST | `api/ua/v2/rate-limit/set` |
| [addSubAccount()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L682) | :closed_lock_with_key:  | POST | `api/ua/v2/user/sub/create-sub-account` |
| [addSubAccountApi()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L692) | :closed_lock_with_key:  | POST | `api/ua/v2/user/create-sub-api-key` |
| [getWithdrawalQuotas()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L702) | :closed_lock_with_key:  | GET | `api/ua/v2/withdrawals/quotas` |
| [submitWithdraw()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L712) | :closed_lock_with_key:  | POST | `api/ua/v2/withdrawal` |
| [cancelWithdrawal()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L722) | :closed_lock_with_key:  | DELETE | `api/ua/v2/withdrawal` |
| [getThirdPartyCustodyQuota()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L732) | :closed_lock_with_key:  | GET | `api/ua/v2/oes/custody-quota` |
| [placeOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L753) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/order/amend` |
| [amendOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L784) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/order/amend` |
| [batchPlaceOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L796) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/detail` |
| [getOrderDetails()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L823) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/detail` |
| [getClassicOrderDetails()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L837) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/detail` |
| [getUnifiedOrderDetails()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L847) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/order/detail` |
| [getOpenOrderList()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L862) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/open-list` |
| [getClassicOpenOrderList()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L876) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/open-list` |
| [getUnifiedOpenOrderList()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L886) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/order/open-list` |
| [getOrderHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L901) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/history` |
| [getClassicOrderHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L915) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/history` |
| [getUnifiedOrderHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L925) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/order/history` |
| [getTradeHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L939) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/execution` |
| [getClassicTradeHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L953) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/order/execution` |
| [getUnifiedTradeHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L963) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/order/execution` |
| [cancelOrder()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L974) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/order/cancel-all` |
| [batchCancelOrders()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L991) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/order/cancel-all` |
| [batchCancelOrdersBySymbol()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1006) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/order/cancel-all` |
| [setDCP()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1019) | :closed_lock_with_key:  | POST | `api/ua/v1/dcp/set` |
| [getDCP()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1030) | :closed_lock_with_key:  | GET | `api/ua/v1/dcp/query` |
| [getPositionList()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1050) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/position/open-list` |
| [batchModifyMarginMode()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1060) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/position/margin-mode` |
| [modifyIsolatedFuturesMargin()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1070) | :closed_lock_with_key:  | POST | `api/ua/v2/unified/position/modify-margin` |
| [getPositionsHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1083) | :closed_lock_with_key:  | GET | `api/ua/v2/position/history` |
| [getPrivateFundingFeeHistory()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1093) | :closed_lock_with_key:  | GET | `api/ua/v2/position/funding-history` |
| [getAccountPositionTiers()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1106) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/position/tiers` |
| [getClassicAccountPositionTiers()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1121) | :closed_lock_with_key:  | GET | `api/ua/v1/classic/position/tiers` |
| [getUnifiedAccountPositionTiers()](https://github.com/sieblyio/kucoin-api/blob/master/src/UnifiedAPIClient.ts#L1131) | :closed_lock_with_key:  | GET | `api/ua/v2/unified/position/tiers` |