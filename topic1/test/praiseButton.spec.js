describe('测试点赞类',function(){
    it('测试add方法',function(){
        expect(new PraiseButton().add(1)).toEqual(2);
    })
});