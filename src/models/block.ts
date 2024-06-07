/**
 * 交易数据的字段名与表头中展示的名称之间的对应关系
 * https://antdv.com/components/table#Column
 */

export const columns = [
    { title: '高度', dataIndex: 'blockHeight', width: 100, className: "text" },
    { title: '区块hash值', dataIndex: 'blockHash', width: 100, className: "text" },
    { title: '时间戳', dataIndex: 'timeStamp', width: 100, className: "text" },
    { title: 'DagHash', dataIndex: 'dagHash', width: 100, className: "text" },
    { title: 'txRoot', dataIndex: 'txRoot', width: 100, className: "text" },
    { title: 'rwSetRoot', dataIndex: 'rwSetRoot', width: 100, className: "text" },
    { title: 'signature', dataIndex: 'signature', width: 100, className: "text" },
    { title: 'previousBlockHash', dataIndex: 'previousBlockHash',ellipsis: true, className: "text" }
];
export const columnsChainMaker = [
    { title: '高度', dataIndex: 'blockHeight', width: 80, className: "text"},
    { title: '区块hash值', dataIndex: 'blockHash', width: 300, className: "text" },
    { title: '时间戳', dataIndex: 'timeStamp', width: 120, className: "text" },
    { title: 'DagHash', dataIndex: 'dagHash', width: 300, className: "text" },
    { title: 'txRoot', dataIndex: 'txRoot',ellipsis: true, className: "text" }
];
export const columnsEth = [
    { title: '高度', dataIndex: 'blockHeight', width: 80, className: "text" },
    { title: 'stateRoot', dataIndex: 'stateRoot', width: 500, className: "text" },
    { title: 'gasLimit', dataIndex: 'gasLimit', width: 100, className: "text" },
    { title: 'totalDifficulty', dataIndex: 'totalDifficulty', width: 120, className: "text" },
    { title: 'previousBlockAddress', dataIndex: 'previousBlockAddress', ellipsis: true, className: "text" }
];
export const columnsH2Chain = [
    { title: '高度', dataIndex: 'blockHeight', width: 80 , className: "text"},
    { title: '区块hash值', dataIndex: 'blockHash', width: 300, className: "text" },
    { title: '出块时间', dataIndex: 'timeStamp', width: 200, className: "text" },
    { title: 'previousBlockHash', dataIndex: 'previousBlockHash', width: 300, className: "text" },
    { title: 'signerPubkey', dataIndex: 'signerPubkey', ellipsis: true, className: "text" }
];