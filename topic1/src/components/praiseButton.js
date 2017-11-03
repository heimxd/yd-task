import utils from '../utils/index.js';

class PraiseButton {
    constructor(count = 0) {
        this.count = count;
    }

    add() {
        return utils.add(this.count);
    }
}

export default PraiseButton;

