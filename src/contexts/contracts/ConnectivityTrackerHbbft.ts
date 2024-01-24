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
export type NotifyEarlyEpochEnd = ContractEventLog<{
  epoch: string;
  blockNumber: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type ReportMissingConnectivity = ContractEventLog<{
  reporter: string;
  validator: string;
  blockNumber: string;
  0: string;
  1: string;
  2: string;
}>;
export type ReportReconnect = ContractEventLog<{
  reporter: string;
  validator: string;
  blockNumber: string;
  0: string;
  1: string;
  2: string;
}>;
export type SetEarlyEpochEndToleranceLevel = ContractEventLog<{
  _level: string;
  0: string;
}>;
export type SetMinReportAgeBlocks = ContractEventLog<{
  _minReportAge: string;
  0: string;
}>;

export interface ConnectivityTrackerHbbft extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ConnectivityTrackerHbbft;
  clone(): ConnectivityTrackerHbbft;
  methods: {
    blockRewardContract(): NonPayableTransactionObject<string>;

    checkReportMissingConnectivityCallable(
      caller: string,
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    checkReportReconnectCallable(
      caller: string,
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    currentEpoch(): NonPayableTransactionObject<string>;

    earlyEpochEndThreshold(): NonPayableTransactionObject<string>;

    earlyEpochEndToleranceLevel(): NonPayableTransactionObject<string>;

    getFlaggedValidators(): NonPayableTransactionObject<string[]>;

    getValidatorConnectivityScore(
      epoch: number | string | BN,
      validator: string
    ): NonPayableTransactionObject<string>;

    initialize(
      _contractOwner: string,
      _validatorSetContract: string,
      _stakingContract: string,
      _blockRewardContract: string,
      _minReportAgeBlocks: number | string | BN
    ): NonPayableTransactionObject<void>;

    isEarlyEpochEnd(
      arg0: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    minReportAgeBlocks(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    reportMissingConnectivity(
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    reportReconnect(
      validator: string,
      blockNumber: number | string | BN,
      blockHash: string | number[]
    ): NonPayableTransactionObject<void>;

    setEarlyEpochEndToleranceLevel(
      _level: number | string | BN
    ): NonPayableTransactionObject<void>;

    setMinReportAge(
      _minReportAge: number | string | BN
    ): NonPayableTransactionObject<void>;

    stakingContract(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    validatorSetContract(): NonPayableTransactionObject<string>;
  };
  events: {
    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>
    ): EventEmitter;

    NotifyEarlyEpochEnd(cb?: Callback<NotifyEarlyEpochEnd>): EventEmitter;
    NotifyEarlyEpochEnd(
      options?: EventOptions,
      cb?: Callback<NotifyEarlyEpochEnd>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    ReportMissingConnectivity(
      cb?: Callback<ReportMissingConnectivity>
    ): EventEmitter;
    ReportMissingConnectivity(
      options?: EventOptions,
      cb?: Callback<ReportMissingConnectivity>
    ): EventEmitter;

    ReportReconnect(cb?: Callback<ReportReconnect>): EventEmitter;
    ReportReconnect(
      options?: EventOptions,
      cb?: Callback<ReportReconnect>
    ): EventEmitter;

    SetEarlyEpochEndToleranceLevel(
      cb?: Callback<SetEarlyEpochEndToleranceLevel>
    ): EventEmitter;
    SetEarlyEpochEndToleranceLevel(
      options?: EventOptions,
      cb?: Callback<SetEarlyEpochEndToleranceLevel>
    ): EventEmitter;

    SetMinReportAgeBlocks(cb?: Callback<SetMinReportAgeBlocks>): EventEmitter;
    SetMinReportAgeBlocks(
      options?: EventOptions,
      cb?: Callback<SetMinReportAgeBlocks>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Initialized", cb: Callback<Initialized>): void;
  once(
    event: "Initialized",
    options: EventOptions,
    cb: Callback<Initialized>
  ): void;

  once(event: "NotifyEarlyEpochEnd", cb: Callback<NotifyEarlyEpochEnd>): void;
  once(
    event: "NotifyEarlyEpochEnd",
    options: EventOptions,
    cb: Callback<NotifyEarlyEpochEnd>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(
    event: "ReportMissingConnectivity",
    cb: Callback<ReportMissingConnectivity>
  ): void;
  once(
    event: "ReportMissingConnectivity",
    options: EventOptions,
    cb: Callback<ReportMissingConnectivity>
  ): void;

  once(event: "ReportReconnect", cb: Callback<ReportReconnect>): void;
  once(
    event: "ReportReconnect",
    options: EventOptions,
    cb: Callback<ReportReconnect>
  ): void;

  once(
    event: "SetEarlyEpochEndToleranceLevel",
    cb: Callback<SetEarlyEpochEndToleranceLevel>
  ): void;
  once(
    event: "SetEarlyEpochEndToleranceLevel",
    options: EventOptions,
    cb: Callback<SetEarlyEpochEndToleranceLevel>
  ): void;

  once(
    event: "SetMinReportAgeBlocks",
    cb: Callback<SetMinReportAgeBlocks>
  ): void;
  once(
    event: "SetMinReportAgeBlocks",
    options: EventOptions,
    cb: Callback<SetMinReportAgeBlocks>
  ): void;
}
