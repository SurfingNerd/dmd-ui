/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Initialized = ContractEventLog<{
  version: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type gasPriceChanged = ContractEventLog<{
  _value: string;
  0: string;
}>;

export interface TxPermissionHbbftMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): TxPermissionHbbftMock;
  clone(): TxPermissionHbbftMock;
  methods: {
    ANNOUNCE_AVAILABILITY_SIGNATURE(): NonPayableTransactionObject<string>;

    REPORT_MALICIOUS_SIGNATURE(): NonPayableTransactionObject<string>;

    REPORT_MISSING_CONNECTIVITY_SELECTOR(): NonPayableTransactionObject<string>;

    REPORT_RECONNECT_SELECTOR(): NonPayableTransactionObject<string>;

    SET_VALIDATOR_IP(): NonPayableTransactionObject<string>;

    WRITE_ACKS_SIGNATURE(): NonPayableTransactionObject<string>;

    WRITE_PART_SIGNATURE(): NonPayableTransactionObject<string>;

    addAllowedSender(_sender: string): NonPayableTransactionObject<void>;

    allowedSenders(): NonPayableTransactionObject<string[]>;

    allowedTxTypes(
      _sender: string,
      _to: string,
      arg2: number | string | BN,
      _gasPrice: number | string | BN,
      _data: string | number[]
    ): NonPayableTransactionObject<{
      typesMask: string;
      cache: boolean;
      0: string;
      1: boolean;
    }>;

    blockGasLimit(): NonPayableTransactionObject<string>;

    certifierContract(): NonPayableTransactionObject<string>;

    connectivityTracker(): NonPayableTransactionObject<string>;

    contractName(): NonPayableTransactionObject<string>;

    contractNameHash(): NonPayableTransactionObject<string>;

    contractVersion(): NonPayableTransactionObject<string>;

    initialize(
      _allowed: string[],
      _certifier: string,
      _validatorSet: string,
      _keyGenHistoryContract: string,
      _connectivityTracker: string,
      _contractOwner: string
    ): NonPayableTransactionObject<void>;

    isSenderAllowed(arg0: string): NonPayableTransactionObject<boolean>;

    keyGenHistoryContract(): NonPayableTransactionObject<string>;

    minimumGasPrice(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    removeAllowedSender(_sender: string): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setBlockGasLimit(
      _value: number | string | BN
    ): NonPayableTransactionObject<void>;

    setConnectivityTracker(
      _connectivityTracker: string
    ): NonPayableTransactionObject<void>;

    setMinimumGasPrice(
      _value: number | string | BN
    ): NonPayableTransactionObject<void>;

    setValidatorSetContract(
      _address: string
    ): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    validatorSetContract(): NonPayableTransactionObject<string>;
  };
  events: {
    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    gasPriceChanged(cb?: Callback<gasPriceChanged>): EventEmitter;
    gasPriceChanged(
      options?: EventOptions,
      cb?: Callback<gasPriceChanged>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Initialized", cb: Callback<Initialized>): void;
  once(
    event: "Initialized",
    options: EventOptions,
    cb: Callback<Initialized>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "gasPriceChanged", cb: Callback<gasPriceChanged>): void;
  once(
    event: "gasPriceChanged",
    options: EventOptions,
    cb: Callback<gasPriceChanged>
  ): void;
}
