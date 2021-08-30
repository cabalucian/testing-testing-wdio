describe('Verify results match the search criteria', () => {
    it('should do all the tasks', async () => {
        //Go to url
        await browser.url('https://www.bayut.com');

        //Return purpose dropdown element and click on it
        const result = await browser.execute(() => {
            return document.getElementsByClassName('eedc221b') [0];
        })
        
        const button = await $(result);
        await button.click();

        //Return Buy button and click on it
        const resultButtonBuy = await browser.execute(() => {
            return document.getElementsByClassName('_933a9a61 _5dd5033c') [0];
        })

        const buttonBuy = await $(resultButtonBuy);
        await buttonBuy.click();

        //Choose Location to be Dubai Marina
        const resultLocationInput = await browser.execute(() => {
            return document.getElementsByClassName('a41c4dcc _6a3a3de9') [0];
        })
        const locationName = await $(resultLocationInput);
        await locationName.setValue('Dubai Marina');

        //Click on Dubai Marina search result
        await browser.pause(500);
        const resultButtonDubaiMarina = await browser.execute(() => {
            return document.getElementsByClassName('_0e756b14') [0];
        })
        const buttonDubaiMarina = await $(resultButtonDubaiMarina);
        await buttonDubaiMarina.click();

        //Click on the Find green button
        const buttonFindMe = await $('=Find');
        await buttonFindMe.click();

        //Verify results match the search criteria
        await browser.pause(1000);
        const resultArrayLocation = await browser.execute(() => {
            return document.getElementsByClassName('_7afabd84');
        })
        for (let i = 0; i < resultArrayLocation.length; i++) {
            await expect($(resultArrayLocation[i])).toHaveTextContaining('Dubai Marina');
        }

        
        //await browser.debug();

        //console.log('Rezultatul este: ' + result.value);

    });
});