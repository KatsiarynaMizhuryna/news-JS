export interface Options {
    [key: string]: string;
}

export interface ResponseObj {
    endpoint: string;
    options?: Options;
}

export interface sourceObj {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface SrcOptions {
    sources?: string;
}
export interface apiKeyObj {
    apiKey: string;
}
