/**
 * 交易数据的字段名与表头中展示的名称之间的对应关系
 * https://antdv.com/components/table#Column
 */

export const columns = [
    { title: '高度', dataIndex: 'blockHeight', width: 100, className: "text" },
    { title: '区块哈希', dataIndex: 'blockHash', width: 100, className: "text" },
    { title: '时间戳', dataIndex: 'timeStamp', width: 100, className: "text" },
    { title: 'Dag哈希', dataIndex: 'dagHash', width: 100, className: "text" },
    { title: '交易跟', dataIndex: 'txRoot', width: 100, className: "text" },
    { title: '签名', dataIndex: 'signature', width: 100, className: "text" },
    { title: '前块哈希', dataIndex: 'previousBlockHash',ellipsis: true, className: "text" }
];
export const columnsChainMaker = [
    { title: '高度', dataIndex: 'blockHeight', width: 80, className: "text"},
    { title: '区块哈希', dataIndex: 'blockHash', width: 300, className: "text" },
    { title: '时间戳', dataIndex: 'timeStamp', width: 120, className: "text" },
    { title: 'Dag哈希', dataIndex: 'dagHash', width: 300, className: "text" },
    { title: '交易根', dataIndex: 'txRoot',ellipsis: true, className: "text" }
];
export const columnsEth = [
    { title: '高度', dataIndex: 'blockHeight', width: 80, className: "text" },
    { title: '状态根', dataIndex: 'stateRoot', width: 500, className: "text" },
    { title: 'gas上限', dataIndex: 'gasLimit', width: 150, className: "text" },
    { title: '难度', dataIndex: 'totalDifficulty', width: 120, className: "text" },
    { title: '前块地址', dataIndex: 'previousBlockAddress', ellipsis: true, className: "text" }
];
export const columnsH2Chain = [
    { title: '高度', dataIndex: 'blockHeight', width: 80 , className: "text"},
    { title: '区块哈希', dataIndex: 'blockHash', width: 300, className: "text" },
    { title: '时间戳', dataIndex: 'timeStamp', width: 200, className: "text" },
    { title: '前块哈希', dataIndex: 'previousBlockHash', width: 300, className: "text" },
    { title: '公钥', dataIndex: 'signerPubkey', ellipsis: true, className: "text" }
];