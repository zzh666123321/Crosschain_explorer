import { useFetchFactory } from '@/api/factory'
import shuffle from "@/utils/shuffle";
import { wrapResponse } from "@/api/request";

import txs from '@/mock/transactions.json'
import blks from '@/mock/blocks.json'
import blksChainMaker from '@/mock/ChainMakerblock.json'
import blksH2Chain from '@/mock/H2Chainblock.json'
import blksEth from '@/mock/Ethblock.json'
import address from '@/mock/address.json'
import blockChainMaker from '@/mock/blockheightChainMaker.json'
import blockEth from '@/mock/blockheightEth.json'
import blockH2Chain from '@/mock/blockheightH2Chain.json'

export const useTransactionList = useFetchFactory<API.TransactionListParams, typeof txs.data>(
    () => {
        const data = shuffle<typeof txs.data[0]>(txs.data);
        return Promise.resolve(wrapResponse(data));
    }
)

export const useTransactionDetail = useFetchFactory<API.TransactionDetailParams, typeof txs.data[0]>(
    () => {
        const data = txs.data[0]
        return Promise.resolve(wrapResponse(data))
    }
)

export const useBlockList = useFetchFactory<API.BlockListParams, typeof blks.data>(
    () => {
        const data = shuffle<typeof blks.data[0]>(blks.data);
        return Promise.resolve(wrapResponse(data));
    }
)



export const useBlockListChainMaker = useFetchFactory<API.BlockListParams, typeof blksChainMaker.data.tenBlocksInfo>(
    () => {
        const data = shuffle<typeof blksChainMaker.data.tenBlocksInfo[0]>(blksChainMaker.data.tenBlocksInfo);
        return Promise.resolve(wrapResponse(data));
    }
)

export const useBlockListH2Chain = useFetchFactory<API.BlockListParams, typeof blksH2Chain.data.tenBlocksInfo>(
    () => {
        const data = shuffle<typeof blksH2Chain.data.tenBlocksInfo[0]>(blksH2Chain.data.tenBlocksInfo);
        return Promise.resolve(wrapResponse(data));
    }
)

export const useBlockListEth = useFetchFactory<API.BlockListParams, typeof blksEth.data.tenBlocksInfo>(
    () => {
        const data = shuffle<typeof blksEth.data.tenBlocksInfo[0]>(blksEth.data.tenBlocksInfo);
        return Promise.resolve(wrapResponse(data));
    }
)

export const useBlockChainMakerDetail = useFetchFactory<API.BlockDetailParams, typeof blockChainMaker>(
    () => {
        const data = blockChainMaker
        return Promise.resolve(wrapResponse({
            ...data,
            transactions: txs.data
        }))
    }
)

export const useBlockEthDetail = useFetchFactory<API.BlockDetailParams, typeof blockEth>(
    () => {
        const data = blockEth
        return Promise.resolve(wrapResponse({
            ...data,
            transactions: txs.data
        }))
    }
)
export const useBlockH2ChainDetail = useFetchFactory<API.BlockDetailParams, typeof blockH2Chain>(
    () => {
        const data = blockH2Chain
        return Promise.resolve(wrapResponse({
            ...data,
            transactions: txs.data
        }))
    }
)


export const useAddressDetail = useFetchFactory<API.AddressDetailParams, typeof address>(
    () => {
        const data = address
        return Promise.resolve(wrapResponse({
            ...data,
            transactions: txs.data
        }))
    }
)