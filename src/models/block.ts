/** 
 * 交易数据的字段名与表头中展示的名称之间的对应关系 
 * https://antdv.com/components/table#Column
 */

export const columns = [
    { title: '高度', dataIndex: 'blockHeight', width: 100 },
    { title: 'hash值', dataIndex: 'blockHash', width: 80 },
    { title: '出块时间', dataIndex: 'timeStamp', width: 180 },
    { title: 'DagHash', dataIndex: 'dagHash', width: 80 },
    { title: 'txRoot', dataIndex: 'txRoot', ellipsis: true }
];