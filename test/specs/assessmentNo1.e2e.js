describe('Verify results match the search criteria', () => {
    it('should click on the purpose dropdown element', async () => {
        //Go to url
        await browser.url('https://www.bayut.com');

        //Return purpose dropdown element and click on it
        const result = await browser.execute(() => {
            return document.getElementsByClassName('eedc221b') [0];
        })
        
        const button = await $(result);
        await button.click();

        //Expect the dropdown element to be visible
        await browser.pause(100);
        const dropdown = await browser.execute(() => {
            return document.getElementsByClassName('_0a772a68') [0];
        })
        const dd = await $(dropdown);
        await expect(dd).toBeDisplayed();
    });

    it('should click on the Buy option', async () => {
        //Return Buy button and click on it
        const resultButtonBuy = await browser.execute(() => {
            return document.getElementsByClassName('_933a9a61 _5dd5033c') [0];
        })

        const buttonBuy = await $(resultButtonBuy);
        await buttonBuy.click();

    });

    it('should choose the location to be Dubai Marina', async () => {
        //Choose Location to be Dubai Marina
        const resultLocationInput = await browser.execute(() => {
            return document.getElementsByClassName('a41c4dcc _6a3a3de9') [0];
        })
        const locationName = await $(resultLocationInput);
        await locationName.setValue('Dubai Marina');

    });

    it('should click on the Dubai Marina search result', async () => {
        //Click on Dubai Marina search result
        await browser.pause(500);
        const resultButtonDubaiMarina = await browser.execute(() => {
            return document.getElementsByClassName('_0e756b14') [0];
        })
        const buttonDubaiMarina = await $(resultButtonDubaiMarina);
        await buttonDubaiMarina.click();

    });

    it('should click on the Find button', async () => {
        //Click on the Find green button
        const buttonFindMe = await $('=Find');
        await buttonFindMe.click();

    });

    it('should wait for the list with locations to load', async () => {
        //Wait for the list to load
        const elem = await $('._357a9937');
        await elem.waitForDisplayed({
            timeout: 2000,
            timeoutMsg: 'Page not loaded in 2s'
        });
    });

    it('should verify the results match the search criteria', async () => {
        //Verify results match the search criteria
        //await browser.pause(1000);
        const resultArrayLocation = await browser.execute(() => {
            return document.getElementsByClassName('_7afabd84');
        })
        for (let i = 0; i < resultArrayLocation.length; i++) {
            await expect($(resultArrayLocation[i])).toHaveTextContaining('Dubai Marina');
        }
    });
});