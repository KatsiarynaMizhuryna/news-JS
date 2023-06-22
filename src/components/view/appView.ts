import News from './news/news';
import Sources from './sources/sources';

import { ArticleData, SourceData } from '../../types/types';
type drawNews = ArticleData | undefined;

type drawSources = SourceData | undefined;

export class AppView {
    private news;
    private sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: drawNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: drawSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
