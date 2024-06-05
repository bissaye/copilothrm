export interface BaseApiRespone {
    status: number;
    message: string;
    content: any;
}

export interface BaseApiResponePaginate {
    totalPage: number;
    totalCount: number;
}
