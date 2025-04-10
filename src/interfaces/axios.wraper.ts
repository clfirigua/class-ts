export interface AxiosWrapperInterface {
    get: <T>(url: string, params?: any) => Promise<T>;
}