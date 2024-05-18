import { request } from '@/api/request';

/**
 * 获取最近的区块列表
 * @param data 请求参数
 * @returns 区块详细信息
 */
 export function list(params: API.CrossListParams) {
    return request<API.CrossListResponse>(
        {
            url: '/cross',
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
export function detail(data: API.CrossDetailParams) {
    return request<API.CrossDetailResponse>(
        {
            url: '/cross/detail',
            method: 'post',
            data,
        }
    );
}
