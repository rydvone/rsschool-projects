import '../../global.css';
import Sources from '../view/sources/sources';
import { ISourse } from '../../types/source';

class Slider {
    private sources: Sources;

    constructor() {
        this.sources = new Sources();
    }

    slideControl(data: ISourse[]) {
        const sliderControl = document.querySelector('.slider-control') as HTMLElement;
        createButton('less', 'slide-control__button', '<<', 'disabled');
        createButton('page', 'slide-control__button', '1');
        createButton('more', 'slide-control__button', '>>');

        const buttonLess = document.querySelector('.less') as HTMLInputElement;
        const buttonMore = document.querySelector('.more') as HTMLInputElement;
        const page = document.querySelector('.page') as HTMLInputElement;

        const drawButton = this.sources;
        const countCurrentSource = 20;
        let numCurrentPage = 1;
        const numMaxPage = Math.ceil(data.length / countCurrentSource);
        let startPos = 0;
        let endPos = 20;

        page.textContent = String(numCurrentPage);

        numCurrentPageIsStart();
        drawButton.draw(data.slice(startPos, endPos));

        function createButton(nameClassFirst: string, nameClassSecond: string, content: string, status?: string) {
            const tagItem = document.createElement('button');
            tagItem.classList.add(nameClassFirst);
            tagItem.classList.add(nameClassSecond);
            tagItem.textContent = content;
            if (status) {
                tagItem.setAttribute(status, '');
            }
            sliderControl.append(tagItem);
        }

        function numCurrentPageIsStart() {
            buttonLess.disabled = true;
            buttonLess.classList.add('disable');
            buttonLess.removeEventListener('click', moveLess);

            buttonMore.disabled = false;
            buttonMore.classList.remove('disable');
            buttonMore.addEventListener('click', moveMore);
        }

        function numCurrentPageIsEnd() {
            buttonLess.disabled = false;
            buttonLess.classList.remove('disable');
            buttonLess.addEventListener('click', moveLess);

            buttonMore.disabled = true;
            buttonMore.classList.add('disable');
            buttonMore.removeEventListener('click', moveMore);
        }

        function numCurrentPageIsMiddle() {
            buttonLess.disabled = false;
            buttonLess.classList.remove('disable');
            buttonLess.addEventListener('click', moveLess);

            buttonMore.disabled = false;
            buttonMore.classList.remove('disable');
            buttonMore.addEventListener('click', moveMore);
        }

        function moveLess() {
            numCurrentPage--;
            changeStartEndPos(false);
            drawButton.draw(data.slice(startPos, endPos));
            if (numCurrentPage != numMaxPage) {
                numCurrentPageIsMiddle();
            }
            if (numCurrentPage == 1) {
                numCurrentPageIsStart();
            }
            page.textContent = String(numCurrentPage);
        }

        function moveMore() {
            numCurrentPage++;
            changeStartEndPos(true);
            drawButton.draw(data.slice(startPos, endPos));
            if (numCurrentPage != 1) {
                numCurrentPageIsMiddle();
            }
            if (numCurrentPage == numMaxPage) {
                numCurrentPageIsEnd();
            }
            page.textContent = String(numCurrentPage);
        }

        buttonLess.addEventListener('click', moveLess);
        buttonMore.addEventListener('click', moveMore);

        function changeStartEndPos(direction: boolean) {
            if (direction) {
                startPos += countCurrentSource;
                endPos += countCurrentSource;
            }
            if (!direction) {
                startPos -= countCurrentSource;
                endPos -= countCurrentSource;
            }
        }
    }
}

export default Slider;
