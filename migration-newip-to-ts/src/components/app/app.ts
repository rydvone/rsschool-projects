import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ResponseArticle } from '../../types/articles';
import { ResponseSource } from '../../types/source';

class App {
    private _controller: AppController;
    private _view: AppView;

    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this._controller.getNews(e, (data: ResponseArticle) => this._view.drawNews(data))
        );
        this._controller.getSources((data: ResponseSource) => this._view.drawSources(data));
    }
}

export default App;
