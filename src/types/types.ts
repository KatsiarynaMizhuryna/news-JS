export interface SourceObj {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface SourceData {
    status: string;
    sources: SourceObj[];
}
interface SourceItemObj {
    id: SourceObj['id'];
    name: SourceObj['name'];
}
export interface ArticleObj {
    source: SourceItemObj;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface ArticleData {
    status: string;
    totalResults: number;
    articles: ArticleObj[];
}
export interface apiKeyObj {
    apiKey: string;
}
export interface SrcOptions {
    sources?: string;
}
export enum endpoint {
    'sources',
    'everything',
    'top-headlines',
}
