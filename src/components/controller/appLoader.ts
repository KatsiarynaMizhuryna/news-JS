import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '04eaa63b4c34477d9e7c8855afa5ab14', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
