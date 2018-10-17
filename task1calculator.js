describe('Mathematics',function(){
    browser.get('https://juliemr.github.io/protractor-demo/');
    var a=16;
    var b=4;
    var resA=[];
    var var1 = element(By.xpath("//input[@ng-model='first']"));
    var var2 = element(By.xpath("//input[@ng-model='second']"));
    var button = element(By.xpath("//button[@id='gobutton']"));
    var res=element(by.xpath("//h2[@class='ng-binding']"));


        it('Addition',function(){           
            var1.sendKeys(a);
            var opr = element(by.cssContainingText('option', '+'));        
            opr.click();
            var2.sendKeys(b);
            button.click();
            browser.waitForAngular();
            resA.push(a+b);
            expect(res.getText()).toMatch((a+b).toString());
        });



        it('Subtraction',function(){           
            var1.sendKeys(a); 
            var opr = element(by.cssContainingText('option', '-'));       
            opr.click();
            var2.sendKeys(b);
            button.click();
            browser.waitForAngular();
            resA.push(a-b);
            expect(res.getText()).toMatch((a-b).toString());
        });



        it('Division',function(){           
            var1.sendKeys(a); 
            var opr = element(by.cssContainingText('option', '/'));       
            opr.click();
            var2.sendKeys(b);
            button.click();
            browser.waitForAngular();
            resA.push(a/b);
            expect(res.getText()).toMatch((a/b).toString());
        });


        it('Moduls',function(){           
            var1.sendKeys(a); 
            var opr = element(by.cssContainingText('option', '%'));       
            opr.click();
            var2.sendKeys(b);
            button.click();
            browser.waitForAngular();
            resA.push(a%b);
            expect(res.getText()).toMatch((a%b).toString());
        });

        it('Multiple',function(){           
            var1.sendKeys(a); 
            var opr = element(by.cssContainingText('option', '*'));       
            opr.click();
            var2.sendKeys(b);
            button.click();
            browser.waitForAngular();
            resA.push(a*b);
            expect(res.getText()).toMatch((a*b).toString());
        });

        it('Table content',()=>{
            let rows = element.all(by.repeater('result in memory'));
            rows.each(function(row){
            let cells = row.$$('td'); //all(by.css)
            cells.get(2).getText().then(function(txt){
                
                for(var i=0;i<5;i++)
                {
                    var cal;
                    switch (i) {
                        case 0:cal=a+b;break;
                        case 1:cal=a-b;break;
                        case 2:cal=a/b;break;
                        case 3:cal=a%b;break;
                        case 4:cal=a*b;break;
                    }
                    if(txt == resA[i]){
                        expect(cells.get(2).getText()).toMatch((cal).toString());
                        }
                }

                })
            })
        });
});