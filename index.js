const scrape = require("website-scraper");
const PuppeteerPlugin = require("website-scraper-puppeteer");
const path = require("path");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

scrape({
  urls: ["https://biihappy.com/"],
  directory: path.resolve(__dirname, "biihappy"),
  plugins: [
    new PuppeteerPlugin({
      puppeteer, // Pass the puppeteer-extra instance with stealth
      launchOptions: { headless: false }, // Set to false if you want to see the browser actions
      scrollToBottom: { timeout: 30000, viewportN: 10 },
    }),
  ],
})
  .then((result) => {
    console.log("Scraping completed:", result);
  })
  .catch((err) => {
    console.error("Scraping failed:", err);
  });
