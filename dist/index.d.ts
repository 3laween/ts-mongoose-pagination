declare module "mongoose" {
    interface IPaginateOptions {
        select?: Object | string;
        sort?: Object | string;
        collation?: any;
        projection?: Object | string;
        populate?: Object[] | string[] | Object | string;
        lean?: boolean;
        page?: number;
        perPage?: number;
    }
    interface IPaginateDefaultOptions {
        select: string;
        projection: string;
        lean: boolean;
        perPage: number;
    }
    interface IPaginateResult<T> {
        data: T[];
        pagination: IPagination;
    }
    interface IPagination {
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: number | null;
        nextPage: number | null;
        perPage: number;
        page?: number | null;
        totalPages?: number;
    }
    interface PaginateModel<T extends Document> extends Model<T> {
        paginate(query?: object, options?: IPaginateOptions, callback?: (err: any, result: IPaginateResult<T>) => void): Promise<IPaginateResult<T>>;
    }
}
export * from "./mongoose-pagination/pagination";
