export interface BaseApiResponse {
    status: number;
    message: string;
    content: any;
}

export interface BaseApiResponsePaginate {
    totalPage: number;
    totalCount: number;
}
