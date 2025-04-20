/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  PairFactory,
  PairFactory_PairCreated,
  RewardsDistributor,
  RewardsDistributor_CheckpointToken,
  RewardsDistributor_Claimed,
} from "generated";

PairFactory.PairCreated.handler(async ({ event, context }) => {
  const entity: PairFactory_PairCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    stable: event.params.stable,
    pair: event.params.pair,
    _4: event.params._4,
  };

  context.PairFactory_PairCreated.set(entity);
});

RewardsDistributor.CheckpointToken.handler(async ({ event, context }) => {
  const entity: RewardsDistributor_CheckpointToken = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    time: event.params.time,
    tokens: event.params.tokens,
  };

  context.RewardsDistributor_CheckpointToken.set(entity);
});

RewardsDistributor.Claimed.handler(async ({ event, context }) => {
  const entity: RewardsDistributor_Claimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    amount: event.params.amount,
    claim_epoch: event.params.claim_epoch,
    max_epoch: event.params.max_epoch,
  };

  context.RewardsDistributor_Claimed.set(entity);
});
