import PraiseButton from './praiseButton.js';
import '../css/thumb.css';

class Thumb extends PraiseButton {
    constructor(count) {
        super(count);
        this.playing = false;
        this.thumbCount = 0;
    }

    init() {
        // this.render();
        this.bind();
    }

    render() {
        let thumbWrap = document.querySelector('.praise-thumb-wrap');
        if (thumbWrap) {
            let thumbChildren = (
                `<div class="praise-thumb">
                    <div class="sw"></div>
                    <div class="finger1"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                </div>`
            )
            thumbWrap.innerHTML = thumbChildren;
        }
    }

    add() {
        super.add();
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
                console.log(`点了一下`);
                if (!this.playing) {
                    this.add();
                    console.log(`赞了${this.count}次`);                    
                    this.animation();
                    this.playing = true;
                    this.thumbCount++;
                    if (this.thumbCount % 10 === 0) {
                        this.thumbCount = 0;
                        element.classList.add('grey');
                    } else {
                        element.classList.remove('grey');
                    }

                    setTimeout(() => {
                        this.playing = false;
                    }, 1500);
                }
            });
        }
    }


}
export { Thumb };