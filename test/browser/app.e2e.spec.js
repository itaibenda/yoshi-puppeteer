import {expect} from 'chai';
import 'babel-polyfill';
import {beforeAndAfter} from '../environment';
import puppeteer from 'puppeteer';

describe('React application', () => {
  let browser, page;
  beforeAndAfter();

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
  });

  describe('open page', () => {
    it('should display title', async () => {
      await page.goto('http://localhost:3100/');
      const title = await page.$('h2');
      expect(await title.evaluate(elem => elem.innerText)).to.eql('Hello World!');
    });
  });
});
