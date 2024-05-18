declare namespace API {

    /** 区块列表参数 */
    type CrossListParams = {
        q?: string;
        s: string;
        limit: number;
        offset: number;
    };

    /** 区块列表 */
    type CrossListResponse = {
        id: string;
    }[];

    /** 区块详细信息参数 */
    type CrossDetailParams = {
        id: string;
    };

    /** 区块详细信息 */
    type CrossDetailResponse = {
        id: string;
    };
}