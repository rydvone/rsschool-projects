import News from './news/news';
import Sources from './sources/sources';
import { ResponseArticle } from '../../types/articles';
import { ResponseSource } from '../../types/source';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ResponseArticle): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSource): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
