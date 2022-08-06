import Vue from "vue";
import { BigNumber } from "ethers";
import Loader from "@/components/loader.vue";

import utils from "@/plugins/utils";
import { TokenSymbol } from "@/plugins/types";

Vue.component("Loader", Loader);

/**
 * Implementation of the tokenFormatter as a global filter
 */
Vue.filter("formatToken", (value: string, symbol: TokenSymbol) => {
  return utils.handleFormatToken(symbol, value);
});

/**
 * Implementation of the tokenFormatter as a global filter
 */
Vue.filter("formatUsdAmount", (value: string | BigNumber, price: string, symbol: TokenSymbol) => {
  return utils.getFormattedTotalPrice(Number(price), +utils.handleFormatToken(symbol, <string>value));
});

/**
 * Filtering human-readable time
 */
Vue.filter("getTimeString", (value: number) => {
  const { hours, minutes, seconds } = utils.timeCalc(value);
  return `${hours ? utils.handleTimeAmount(hours, "hour") : ""}
        ${minutes ? utils.handleTimeAmount(minutes, "minute") : ""}
        ${seconds ? utils.handleTimeAmount(seconds, "second") : ""}`;
});
