import { add, getWeek, getWeek2 } from '../../src/index';

describe('测试src/index.js的方法', function () {
    it('测试add', function () {
        expect(add(1)).toBe(2);
    });
    it('测试getWeek', function () {
        expect(getWeek()).toBe('星期日');
    })
    it('测试getWeek2', function () {
        expect(getWeek2()).toBe('星期日');
    })
});