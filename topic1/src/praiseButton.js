class PraiseButton {
    constructor(count = 0) {
        this.count = count;
    }

    add() {
        return ++this.count;
    }
}

export default PraiseButton;

