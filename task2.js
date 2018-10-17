describe('ProductWebTest',()=>{
    browser.get('http://demos.angularcode.com/product-manager/#/');
    var txt="Baba Ramdev Patanjali Gulab Jal";
    var srTxt=element(By.xpath("//input[@ng-model='filterProduct']"));
    var edIc=element(By.xpath("//button[@ng-click='open(c);']"));
    var modChk= element(By.xpath("//div[@class='modal-dialog']"));
    var cancelB=element(By.xpath("//a[@ng-click='cancel()']"));
    var delB=element(By.xpath("//button[@ng-click='deleteProduct(c);']"));

    describe('Task 2',()=>{

        it('Verify Title',()=>{
            var titleText=browser.getTitle();
            expect(titleText).toBe("Product Manager Web Application");
        });


        it('Adding text to search box',()=>{
            srTxt.sendKeys(txt);
        });

        it('Click Edit Icon',()=>{
            edIc.click();
            //browser.sleep(5000);
        });

        it('Modal Check',()=>{
            expect(modChk).toBeTruthy();
        });

        it('Click cancel button',()=>{
            cancelB.click();
            //browser.sleep(5000);
        });
        
        it('Click delete button',()=>{
            delB.click();
            browser.switchTo().alert().accept();
        });

        it('Table content',()=>{
            let list = element.all(By.xpath("//table[@class='table table-striped']/tbody/tr"));
            expect(list.count()).toBe(3);
        });
    });
});