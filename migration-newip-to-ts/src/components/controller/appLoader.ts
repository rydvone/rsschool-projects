import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '7ef0f44ec1fa45ad84933825bb77ee5e',
        });
    }
}

export default AppLoader;
