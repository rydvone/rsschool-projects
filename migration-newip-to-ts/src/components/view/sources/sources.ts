import './sources.css';
import { ISourse } from '../../../types/source';

class Sources {
    draw(data: ISourse[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesItem = document.querySelector('.sources') as HTMLElement;
        if (sourcesItem === null) {
            throw new Error('No element');
        }
        sourcesItem.innerHTML = '';
        sourcesItem.append(fragment);
    }
}

export default Sources;
