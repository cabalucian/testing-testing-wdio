const fetch = require('node-fetch')
const expect = require('chai').expect

describe('Verify Popular Searches links work correctly', () => {
    it('should verify Popular Searches links have status 200 - Ok', async () => {
        //Go to url
        await browser.url('https://www.bayut.com/')

        //Click on the "To Rent" button
        const buttonToRent = await $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[2]/div/div/div[2]')
        await buttonToRent.click()
        
        //Find and click on the "View all" button
        const result = await browser.execute(() => {
            return document.getElementsByClassName('_73897665 _1a18f9e1') [2];
        })
        const button = await $(result);
        await button.click();

        //Get all the a tags under Dubai Apartments
        const links = await browser.execute(() => {
            return document.getElementsByClassName('_22762832') [9].getElementsByTagName('a');
        })

        const urls = []

        //Get all the links
        for (var i = 0; i < links.length; i++ ) {
            var href = (await $(links[i]).getAttribute('href'))
            urls.push('https://www.bayut.com' + href)
        }

        //https://www.youtube.com/watch?v=0MFE-AMZavY
        const requests = urls.map(url => fetch(url))
        const responses = await Promise.all(requests)
        const statusCodes = responses.map(response => response.status)

        statusCodes.forEach(statusCode => {
            expect(statusCode).to.equal(200)  //to.be.below(400)
        })
        
    });
});