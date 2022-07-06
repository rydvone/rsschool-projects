import News from './news/news';
import Sources from './sources/sources';
import { ResponseArticle } from '../../types/articles';
import { ResponseSource } from '../../types/source';
import Selects from '../selects/selects';

export class AppView {
    private news: News;
    private sources: Sources;
    private selects: Selects;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.selects = new Selects();
    }

    public drawNews(data: ResponseArticle): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSource): void {
        const values = data?.sources ? data?.sources : [];
        this.selects.slider(values);
        // this.sources.draw(values);
    }
}

export default AppView;
