/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer, PairFactory_PairCreated, RewardsDistributor_CheckpointToken, RewardsDistributor_Claimed, Pair, Pair_Approval, Pair_Burn, Pair_Claim, Pair_EIP712DomainChanged, Pair_Fees, Pair_Mint, Pair_Swap, Pair_Sync, Pair_Transfer } from "envio";

indexer.contractRegister(
  { contract: "PairFactory", event: "PairCreated" },
  async ({ event, context }) => {
  context.chain.Pair.add(event.params.pair)
}
);

indexer.onEvent(
  { contract: "PairFactory", event: "PairCreated" },
  async ({ event, context }) => {
  const entity: PairFactory_PairCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    stable: event.params.stable,
    pair: event.params.pair,
    _4: event.params._4,
  };

  context.PairFactory_PairCreated.set(entity);
}
);

indexer.onEvent(
  { contract: "RewardsDistributor", event: "CheckpointToken" },
  async ({ event, context }) => {
  const entity: RewardsDistributor_CheckpointToken = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    time: event.params.time,
    tokens: event.params.tokens,
  };

  context.RewardsDistributor_CheckpointToken.set(entity);
}
);

indexer.onEvent(
  { contract: "RewardsDistributor", event: "Claimed" },
  async ({ event, context }) => {
  const entity: RewardsDistributor_Claimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    amount: event.params.amount,
    claim_epoch: event.params.claim_epoch,
    max_epoch: event.params.max_epoch,
  };

  context.RewardsDistributor_Claimed.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Approval" },
  async ({ event, context }) => {
  const entity: Pair_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Pair_Approval.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Burn" },
  async ({ event, context }) => {
  const entity: Pair_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    to: event.params.to,
  };

  context.Pair_Burn.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Claim" },
  async ({ event, context }) => {
  const entity: Pair_Claim = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.Pair_Claim.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "EIP712DomainChanged" },
  async ({ event, context }) => {
  const entity: Pair_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Pair_EIP712DomainChanged.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Fees" },
  async ({ event, context }) => {
  const entity: Pair_Fees = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.Pair_Fees.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Mint" },
  async ({ event, context }) => {
  const entity: Pair_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.Pair_Mint.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Swap" },
  async ({ event, context }) => {
  const entity: Pair_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    amount0In: event.params.amount0In,
    amount1In: event.params.amount1In,
    amount0Out: event.params.amount0Out,
    amount1Out: event.params.amount1Out,
    to: event.params.to,
  };

  context.Pair_Swap.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Sync" },
  async ({ event, context }) => {
  const entity: Pair_Sync = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve0: event.params.reserve0,
    reserve1: event.params.reserve1,
  };

  context.Pair_Sync.set(entity);
}
);

indexer.onEvent(
  { contract: "Pair", event: "Transfer" },
  async ({ event, context }) => {
  const entity: Pair_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Pair_Transfer.set(entity);
}
);
