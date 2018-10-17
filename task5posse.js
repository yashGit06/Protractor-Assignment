describe('Posse',()=>{
    browser.get('https://posse.com/');
    browser.waitForAngular();
    var sy=element(By.xpath("//span[@class='location']"));
    var name=element.all(By.xpath("//div[@class='popularity'][200>span and span>100]/../../..//span[@ng-bind='searchResult.place.name']"));

    it('Slecting Sydney',()=>{
        sy.click();
        browser.waitForAngular();       
    });

    it('Checking 1',()=>{
        name.getText().then(function (text) {
            expect(text).toContain('Reuben Hills');
           });      
    });

    it('Checking 2',()=>{
        name.getText().then(function (text) {
            expect(text).toContain('The Strand Arcade');
           });      
    });

    it('Checking 3',()=>{
        name.getText().then(function (text) {
            expect(text).toContain('Mamak');
           });      
    });

    it('Checking 4',()=>{
        name.getText().then(function (text) {
            expect(text).toContain('Chat Thai');
           });      
    });

});
