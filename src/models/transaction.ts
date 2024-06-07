/** 
 * 交易数据的字段名与表头中展示的名称之间的对应关系 
 * https://antdv.com/components/table#Column
 */

/*export const columns = [
    { title: '交易哈希', dataIndex: 'tx_hash', ellipsis: true },
    { title: '区块高度', dataIndex: 'height', width: 100, align: 'center' },
    { title: '状态', dataIndex: 'status', width: 90, align: 'center' },
    { title: '发送方', dataIndex: 'from', ellipsis: true },
    { title: ' ', dataIndex: 'to_icon', width: 30 },
    { title: '接收方', dataIndex: 'to', ellipsis: true },
    { title: '加密方式', dataIndex: 'crypto_method', width: 120, align: 'center' },
];*/
export const columns = [
    { title: '交易ID', dataIndex: 'txId', width: 150 },
    { title: '源链IP', dataIndex: 'srcIp', width: 150, },
    { title: '源链端口', dataIndex: 'srcPort', width: 150,  },
    { title: '源链Hash', dataIndex: 'srcHash', width: 150, },
    { title: '目的链IP', dataIndex: 'dstIp', width: 150, },
    { title: '目的链端口', dataIndex: 'dstPort', width: 150, },
    { title: '目的链Hash', dataIndex: 'dstHash', ellipsis: true },

];