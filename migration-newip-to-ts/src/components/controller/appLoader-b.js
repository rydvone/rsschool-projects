import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7ef0f44ec1fa45ad84933825bb77ee5e',
        });
    }
}

export default AppLoader;
