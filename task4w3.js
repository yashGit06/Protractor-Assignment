describe('W3school',()=>{
    browser.waitForAngularEnabled(false);
    browser.get('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default');
    //browser.waitForAngular();
    browser.sleep(2000);

    it('Selecting Text',()=>{
        browser.switchTo().frame('iframeResult');
        var ele1= element(By.xpath("/html/head"));
        var ele2= element(By.xpath("/html/body/h1"));

        //expect(ele.getText()).toMatch(("This is a Heading"));
        //browser.actions().click(ele1).click(ele1).click(ele1).perform();
        browser.actions().dragAndDrop(ele1,ele2).perform();
        //browser.actions().click(ele1).keyRight(protractor.Key.SHIFT).perform();
        //browser.actions().mouseMove(ele1).mouseDown().mouseMove(ele2).mouseUp().perform();
        browser.sleep(3000);
    });

});
