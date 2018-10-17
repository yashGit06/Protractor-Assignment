describe('GPS',()=>{
    browser.waitForAngularEnabled(false);
    browser.get('http://www.ourgoalplan.com/Login.aspx');
    var uName=element(By.xpath("//input[@id='txtName']"));
    var pswrdF=element(By.xpath("//input[@id='txtPassword']"));
    var loginB=element(By.xpath("//input[@id='btnLogin']"));
    var msgB=element(By.xpath("//a[@id='ucGPSMenu_hlnkMessage']"));
    var srchF=element(By.xpath("//input[@id='ctl00_cphBody_txtSearch']"));
    var srchB=element(By.xpath("//a[@id='ctl00_cphBody_lbtnSearch']"));
    var srchTxt="Ansuman Sahu";
    var id="yashwants";
    var pswd="user@mindfire";

    it('Login to GPS',()=>{
        uName.sendKeys(id);
        pswrdF.sendKeys(pswd);
        loginB.click();
    });

    it('Logged Sucessfully',()=>{
        expect(browser.getCurrentUrl()).toEqual('http://www.ourgoalplan.com/GoalSheet.aspx');
    });

    it('CLick Message',()=>{
        msgB.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.ourgoalplan.com/MessageList.aspx');
    });

    it('Search for the keyword',()=>{
        srchF.sendKeys(srchTxt);
        srchB.click();
        //browser.sleep(5000);
        var tab = element.all(By.xpath("//table[@class='table table-bordered table-condensed table-hover table-striped']/tbody"));
        var rows = tab.all(by.tagName("tr"));
        var cells = rows.all(by.tagName("td"));
    

          cells.each(function(element, index) {
            if(index%4==1){
                element.getText().then(function (text) {
                expect(text).toEqual("Ansuman Sahu");
               });
            }
          });

    });
});