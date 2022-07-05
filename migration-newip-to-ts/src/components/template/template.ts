import '../../global.css';

class TemplateVisual {
    makeTemplate(res: boolean) {
        const templateItem = document.querySelector('.visual') as HTMLElement;

        templateItem.classList.remove('add');

        if (res) {
            templateItem.classList.add('add');
        }
    }
}

export default TemplateVisual;
