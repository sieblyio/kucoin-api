# KuCoin 6 Nov 2026 API updates

## Goal

Add the documented 6 Nov account summary, sub-account mode, and UTA private
funding fee settlement changes to `update02112026`, retaining version 2.6.9.

## Verified sources

- [6 Nov changelog](https://www.kucoin.com/docs-new/change-log): confirms all three changes, including removal of every old sub-account quantity field and the three required V3 summary fields.
- [Classic account summary V3](https://www.kucoin.com/docs-new/rest/account-info/account-funding/get-account-summary-info-v3): `GET /api/v3/user-info`, returning numeric `level`, `maxSharedSubCount`, and `usedSharedSubCount`.
- [UTA Add Sub Account](https://www.kucoin.com/docs-new/v2/rest/ua/add-sub-account) and [Classic Add Sub Account](https://www.kucoin.com/docs-new/rest/account-info/sub-account/add-sub-account): optional `mode`, accepting `CLASSIC` or `UNIFIED`.
- [FundingFeeSettle](https://www.kucoin.com/docs-new/3470415w0): private `fundingFeeSettle` (with `symbol`) and `fundingFeeSettleAll` channels. Push data contains `s`, `mp`, `q`, `mM`, `sc`, `ft`, `ff`, `fr`, and `pV`.

## Decisions

- Replace `SpotAccountSummary` with the three required V3 fields and document the
  6 Nov change. Update `getAccountSummary()` from `/api/v2/user-info` to the
  documented `/api/v3/user-info` so its route matches its response type.
- Add the optional mode union to both existing sub-account request interfaces.
- Follow existing UTA push naming and envelope conventions. Export a settlement
  topic union, push data, and push event. Preserve documented field casing and
  string amounts; `P` and `ft` are numbers. Use `string` for `mM` because the
  supplied event documentation does not enumerate all margin mode values.
- Existing generic string subscriptions already handle both private channels;
  verify serialization, private routing, and update emission without adding a
  separate subscription API.
- Use only mocked transports and local message processing. No production API
  calls, workflow changes, generated documentation edits, or version bump.

## Acceptance criteria

- Summary requests use V3; the response type contains exactly the three required
  fields, with no old quantity fields.
- Both sub-account methods accept either mode or an omitted mode and preserve it
  in the request. Other mode values fail TypeScript checking.
- Both settlement topics serialize for subscribe/unsubscribe on `privateProV2`,
  and documented event payloads reach update listeners unchanged.
- Version remains 2.6.9. Add one new commit with the requested title and bullet
  changelog; do not amend or push.

## Test plan

Write typed mocked REST and WebSocket regressions before implementation and
confirm the missing types fail compilation. Run all offline unit tests, source
and changed-test lint, TypeScript checking, and the CJS/ESM build. Skip live REST
integration tests because they call production APIs. Record exact final commands
and results here after validation.

## Validation results

- `npm ci --ignore-scripts --no-audit --no-fund --cache /tmp/kucoin-npm-cache`: passed; installed 477 packages.
- `npm test -- --runInBand test/REST/account-updates.test.ts test/websockets/funding-fee-settle.test.ts`: failed before implementation as expected because the new summary fields, both mode properties, and settlement types were absent.
- `npm test -- --runInBand test/REST/account-updates.test.ts test/REST/uta-orderbook.test.ts test/websockets`: final run passed, 6 suites / 56 tests. An earlier run found five incorrect test expectations about credential-free POST parameters and added WS metadata; those expectations were corrected. The existing error-frame test logs an expected console error.
- `npm run lint`: passed, 0 errors / 51 existing source warnings.
- `npx --no-install eslint test/REST/account-updates.test.ts test/websockets/funding-fee-settle.test.ts`: passed, 0 errors / 3 warnings for parameter names in the test's private-method type signature, matching the existing message test pattern.
- `npx --no-install tsc --noEmit -p tsconfig.json`: passed.
- `npm run build`: passed, including both ESM and CJS builds.
- `git diff --check`: passed.

All requested items were confirmed; none were skipped. Live public/private REST
integration tests were not run because they call production APIs. The deliberate
compatibility change is that `getAccountSummary()` now calls V3 and exposes shared
quota counts instead of the old per-permission quantity fields.
