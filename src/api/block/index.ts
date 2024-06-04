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


export function sendPostRequest(chainIp: string) {
    return request<API.BlockDetailResponse>({
        url: '/supply/chain/checkNewblock',
        method: 'post',
        // data: { chainIp }
        data: {
            chainIp: chainIp
        }
    })
}

export function getBlockDetail(chainIP: string){
    return sendPostRequest(chainIP)
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