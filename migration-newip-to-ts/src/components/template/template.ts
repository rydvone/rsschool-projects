import '../../global.css';

class TemplateVisual {
    makeTemplate(element: string, res: boolean) {
        const templateItem = document.querySelector(element) as HTMLElement;
        templateItem.classList.remove('add');

        if (res && element === '.visual') {
            templateItem.classList.add('add');
            const sourcesItem = document.querySelector('.sources') as HTMLElement;
            if (sourcesItem === null) {
                throw new Error('No element');
            }
            sourcesItem.innerHTML = '';
            const newsItem = document.querySelector('.news');
            if (newsItem === null) {
                throw new Error('No element');
            }
            newsItem.innerHTML = '';
            const sliderControl = document.querySelector('.slider-control') as HTMLElement;
            if (sliderControl === null) {
                throw new Error('No element');
            }
            sliderControl.innerHTML = '';
        }
        if (res && element === '.visual-news') {
            templateItem.classList.add('add');
            const newsItem = document.querySelector('.news');
            if (newsItem === null) {
                throw new Error('No element');
            }
            newsItem.innerHTML = '';
        }
    }
}

export default TemplateVisual;
