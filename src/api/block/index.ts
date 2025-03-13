import { request } from '@/api/request';
import { useFetchFactory } from '@/api/factory'
/**
 * 获取最近的区块列表
 * @param data 请求参数
 * @returns 区块详细信息
 */
export function list(params: API.BlockListParams) {
    return request<API.BlockListResponse>(
        {
            url: '/blocks',
            method: 'get',
            params,
        }
    );
}

/**
 * 获取区块的详细信息
 * @param data 请求参数
 * @returns 区块详细信息
 */
export function detail(data: API.BlockDetailParams) {
    return request<API.BlockDetailResponse>(
        {
            url: '/block/detail',
            method: 'post',
            data,
        }
    );
}


export async function sendPostRequest(chainIp: string) {
    const resopnse = await request<API.BlockDetailResponse>({
        url: '/supply/chain/checkNewblock',
        method: 'post',
        // data: { chainIp }
        data: {
            "chainIP": chainIp
        }
    })
    return resopnse.data;
}

export async function getBlockDetail(chainIP: string){
    const authorizationToken = "\
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmNGFiMTQwZDM3ZGQ0MDI5YTY1MzRiYzhhM2RkMGJmMiIsIm5hbWUiOiJ6MSIsInJvbGUiOiJ0ZW5hbnQiLCJ0b2tlbkNyZWF0ZVRpbWUiOjE3NDE4NDY5NTcsInBhc3N3b3JkRXhwaXJhdGlvbiI6MTc0MzQwNTI2MiwiZXhwaXJlZEF0IjoxNzQxODQ4NzU3fQ.B3VPYm98G2R2nebS_RMZ5CAEEuVicexwaKvwARD90EM\
    ";
    const resopnse = await request<any>({
        url: '/supply/chain/checkNewblock',
        method: 'post',
        

        // data: { chainIp }
        data: {
            "chainIP": chainIP,
            "authorizationToken": authorizationToken
        }
    })
    return resopnse.data;
}

export async function getBlocksDetail(blockHEIGHT: string,chainIP: string){
    const authorizationToken = "\
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmNGFiMTQwZDM3ZGQ0MDI5YTY1MzRiYzhhM2RkMGJmMiIsIm5hbWUiOiJ6MSIsInJvbGUiOiJ0ZW5hbnQiLCJ0b2tlbkNyZWF0ZVRpbWUiOjE3NDE4NDY5NTcsInBhc3N3b3JkRXhwaXJhdGlvbiI6MTc0MzQwNTI2MiwiZXhwaXJlZEF0IjoxNzQxODQ4NzU3fQ.B3VPYm98G2R2nebS_RMZ5CAEEuVicexwaKvwARD90EM\
    ";
    const resopnse = await request<any>({
        url: '/supply/chain/checkBlockInfoheight',
        method: 'post',
        // data: { chainIp }
        data: {
            "blockHEIGHT": blockHEIGHT,
            "chainIP": chainIP,
            "authorizationToken": authorizationToken
        }
    })
    return resopnse.data;
}


export async function getCrossTx(){
    const resopnse = await request<any>({
        url: '/supply/crosschain/queryAllCrossTx',
        method: 'get',
        // data: { chainIp }
    })
    return resopnse.data;
}

// export async function sendCrossTx(srcChainType:String,dstChainType:String,src:String,dst:String){
//     const resopnse = await request<any>({
//         url: '/supply/crosschain/addCrossTx',
//         method: 'post',
//        data: { 
//         "src": src,
//         "dst": dst,
//         // "srcIp":"116.204.36.31",
//         // "srcPort":123,
//         // "dstIp":"116.204.36.31",
//         // "dstPort":2323,
//         "srcChainType":srcChainType,
//         "dstChainType":dstChainType
//         }
//     })
//     return resopnse.data;
// }
export async function sendCrossTx(dstChainType:String,dstIp:String,relayIp:String,srcChainType:String,scrIp:String){
    const resopnse = await request<any>({
        url: '/supply/crosschain/execute/full',
        method: 'post',
       data: { 
        "srcChainType":srcChainType,
        "dstChainType":dstChainType,
        "srcIp":scrIp,
        "dstIp":dstIp,
        "relayIp":relayIp
        }
    })
    return resopnse.data;
}









// 定义函数发送请求并处理响应
// export function sendPostRequest(chainIP: string,) {
//     fetch('http://localhost:8080/supply/chain/checkNewblock/', {
//         method: 'POST', // 使用POST方法
//         headers: {
//             'Content-Type': 'application/json' // 设置请求头，表明发送的是JSON数据
//         },
//         body: JSON.stringify(chainIP) // 将JSON对象转换为字符串发送
//     })
//         .then(response => response.json()) // 将响应转换为JSON格式
//         .then(data => {
//             console.log('Success:', data); // 在控制台打印成功返回的数据
//             // 在这里处理返回的数据，例如显示在页面上
//         })
//         .catch(error => {
//             console.error('Error:', error); // 在控制台打印错误信息
//             // 处理错误，例如显示错误信息
//         });
// }

// export function getDetail(chainIP:string) {
//     try {
//         const response = fetch('http://localhost:8080/supply/chain/checkNewblock/', {
//           method: 'POST', // 使用POST方法
//           headers: {
//             'Content-Type': 'application/json' // 设置请求头，表明发送的是JSON数据
//           },
//           body: JSON.stringify(chainIP) // 将JSON对象转换为字符串发送
//         });
//         const jsonResponse = response.json(); // 等待并解析响应为JSON
//         console.log('Success:', jsonResponse); // 在控制台打印成功返回的数据
//         return jsonResponse; // 返回响应数据
//       } catch (error) {
//         console.error('Error:', error); // 在控制台打印错误信息
//         throw error; // 抛出错误
//       }
// //     // 发送POST请求到指定接口
// // fetch('http://localhost:8080/supply/chain/checkNewblock/', {
// //     method: 'POST', // 使用POST方法
// //     headers: {
// //       'Content-Type': 'application/json' // 设置请求头，表明发送的是JSON数据
// //     },
// //     body: JSON.stringify(chainIP) // 将JavaScript对象转换为JSON字符串
// //   })
// //   .then(response => response.json()) // 将响应转换为JSON格式
// //   .then(data => {
// //     console.log('Success:', data); // 在控制台打印成功返回的数据
// //     return data
// //   })
// //   .catch((error) => {
// //     console.error('Error:', error); // 在控制台打印错误信息
// //   });
// }