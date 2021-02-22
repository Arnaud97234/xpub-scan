// @ts-ignore
import coininfo from "coininfo";

// GENERAL
// -------

const VERBOSE = false;

// CHECK BALANCES
// --------------

// Providers
// (use {address} as a placeholder for the address)

const DEFAULT_BITCOIN_API = 'https://sochain.com/api/v2/address/BTC/';

const DEFAULT_LITECOIN_API = 'https://sochain.com/api/v2/address/LTC/';

// max number of addresses to probe when checking a possible gap between derivation indices
// (that is: range of indices not used for derivation)
const MAX_EXPLORATION = 20;

// XPUB <> ADDRESS COMPARISON
// --------------------------

// scope of the derivation for the comparison
const DERIVATION_SCOPE = {

  // _quick search_
  // the common range from which addresses
  // are generally derived
  quick_search: {
    account: {
      min: 0,
      max: 4
    },
    index: {
      min: 0,
      max: 1000
    }
  },

  // _deep search_
  // an extended range for a deeper analysis,
  // initiated when quick search fails
  deep_search: {
    account: {
      min: 0,
      max: 1000
    },
    index: {
      min: 0,
      max: 100000
    }
  }
}


// DERIVATION PARAMETERS
// ---------------------

export const network = {type: undefined};


const BITCOIN_NETWORK = coininfo.bitcoin.main.toBitcoinJS()

const LITECOIN_NETWORK = coininfo.litecoin.main.toBitcoinJS();

export enum AddressType {
  LEGACY = "Legacy",
  NATIVE = "Native SegWit",
  SEGWIT = "SegWit"
}

Object.freeze(AddressType);

export {
  DEFAULT_BITCOIN_API,
  DEFAULT_LITECOIN_API,
  MAX_EXPLORATION,
  VERBOSE,
  BITCOIN_NETWORK,
  LITECOIN_NETWORK,
  DERIVATION_SCOPE,
}