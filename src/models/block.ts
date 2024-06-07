/**
 * 交易数据的字段名与表头中展示的名称之间的对应关系
 * https://antdv.com/components/table#Column
 */

export const columns = [
    { title: '高度', dataIndex: 'blockHeight', width: 100 },
    { title: '区块hash值', dataIndex: 'blockHash', width: 100 },
    { title: '时间戳', dataIndex: 'timeStamp', width: 100 },
    { title: 'DagHash', dataIndex: 'dagHash', width: 100 },
    { title: 'txRoot', dataIndex: 'txRoot', width: 100 },
    { title: 'rwSetRoot', dataIndex: 'rwSetRoot', width: 100 },
    { title: 'signature', dataIndex: 'signature', width: 100 },
    { title: 'previousBlockHash', dataIndex: 'previousBlockHash',ellipsis: true }
];
export const columnsChainMaker = [
    { title: '高度', dataIndex: 'blockHeight', width: 50 },
    { title: '区块hash值', dataIndex: 'blockHash', width: 300 },
    { title: '时间戳', dataIndex: 'timeStamp', width: 120 },
    { title: 'DagHash', dataIndex: 'dagHash', width: 300 },
    { title: 'txRoot', dataIndex: 'txRoot',ellipsis: true }
];
export const columnsEth = [
    { title: '高度', dataIndex: 'blockHeight', width: 80 },
    { title: 'stateRoot', dataIndex: 'stateRoot', width: 500 },
    { title: 'gasLimit', dataIndex: 'gasLimit', width: 100 },
    { title: 'totalDifficulty', dataIndex: 'totalDifficulty', width: 120 },
    { title: 'previousBlockAddress', dataIndex: 'previousBlockAddress', ellipsis: true }
];
export const columnsH2Chain = [
    { title: '高度', dataIndex: 'blockHeight', width: 80 },
    { title: '区块hash值', dataIndex: 'blockHash', width: 300 },
    { title: '出块时间', dataIndex: 'timeStamp', width: 200 },
    { title: 'previousBlockHash', dataIndex: 'previousBlockHash', width: 300 },
    { title: 'signerPubkey', dataIndex: 'signerPubkey', ellipsis: true }
];