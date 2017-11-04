import { add } from '../src/utils/index.js'

describe('测试utils', function () {
    it('测试add方法', function () {
        expect(add(1)).toEqual(2);
    })
});