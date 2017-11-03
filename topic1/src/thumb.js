import PraiseButton from './praiseButton.js';

class Thumb extends PraiseButton {
    constructor(count) {
        super(count);
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
    init(){
        this.render();
    }
}
export { Thumb };