import PraiseButton from './praiseButton.js';

class Thumb extends PraiseButton {
    constructor(count) {
        super(count);
        this.playing = false;
    }

    init() {
        this.render();
        this.bind();
    }

    render() {
        let thumbWrap = document.querySelector('.praise-thumb-wrap');
        if (thumbWrap) {
            let thumbChildren = (
                `<div class="praise-thumb">
                    <div class="sw"></div>
                    <div class="finger1"></div>
                    <div class="finger2"></div>
                    <div class="finger3"></div>
                    <div class="finger4"></div>
                    <div class="finger5"></div>
                </div>`
            )
            thumbWrap.innerHTML = thumbChildren;
        }
    }

    animation() {
        let element = document.querySelector('.praise-thumb');
        if (element) {
            element.classList.add('animation');
            setTimeout(function () {
                element.classList.remove('animation');
            }, 1500)
        }
    }

    bind() {
        let element = document.querySelector('.praise-thumb');
        if (element) {
            element.addEventListener('click', () => {
                if (!this.playing) {
                    super.add();
                    this.animation();
                    this.playing = true;
                    setTimeout(() => {
                        this.playing = false;
                    }, 1500);
                }
            });
        }
    }


}
export { Thumb };