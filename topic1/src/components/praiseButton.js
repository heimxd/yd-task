import { add } from '../utils/index.js';

class PraiseButton {
    constructor(count = 0) {
        this.count = count;
    }

    add() {
        this.count = add(this.count);
    }
}

export default PraiseButton;

