const axios = require("axios");
const cheerio = require("cheerio");
let nifty = require("./nifty50.json");
const fs = require("fs");
// URL of the page we want to scrape
const sheets = ['income', 'balancesheet', 'cashflow']
const periods = [ "annual",'quarter']
// Async function which scrapes the data
async function scrapeData() {
  try {
    for (var idx in nifty) {
      var item = nifty[idx];
      for (var prd = 0; prd < periods.length; prd++) {
        for (var sht = 0; sht < sheets.length; sht++) {
          // Fetch HTML of the page we want to scrape
          if(periods[prd] == "quarter" && sheets[sht] != "income") break; 
          const url =
            "https://www.tickertape.in/stocks/" + item + "/financials?checklist=basic&statement=" + sheets[sht] + "&view=normal&period=" + periods[prd] + "";
          const { data } = await axios.get(url);
          // Load HTML we fetched in the previous line
          const $ = cheerio.load(data);
          // Select all the data-statement-type= in income,balancesheet,cashflow
          const cols = $("*[data-statement-type='" + sheets[sht] + "'] div");
          // Stores data for all countries
          const colData = [];
          // Use .each method to loop through the li we selected
          cols.each((idx, el) => {
            // Object holding data for each country/jurisdiction
            const colDiv = $(el).children("div");
            const rowtext = [];
            colDiv.each((cidx, cel) => {
              const rows = $(cel).children("div");
              if (cidx == 0) {
                rows.each((ridx, cell) => {
                  if (ridx != 0 || sht == 0) rowtext.push($(cell).text())
                });
                if (rowtext.length > 0) {
                  colData.push(rowtext);
                }
              }
            });

          });
          colData.pop();
          //  console.dir(colData)
          // Logs rows array to the console
          let isQuarter='';
          periods[prd] == "quarter" ? isQuarter = '- quarter' : isQuarter = '';
          if (colData[0]) {
            for (var j = 0; j < colData[0].length; j++) {
              try {
                let cat = colData[0] ? colData[0][j] : '-';
                let yr0 = colData[1] ? colData[1][j] : '-';
                let yr1 = colData[2] ? colData[2][j] : '_';
                let yr2 = colData[3] ? colData[3][j] : '_';
                let yr3 = colData[4] ? colData[4][j] : '_';
                let yr4 = colData[5] ? colData[5][j] : '_';
                let yr5 = colData[6] ? colData[6][j] : '_';
                let yr6 = colData[7] ? colData[7][j] : '_';
                let yr7 = colData[8] ? colData[8][j] : '_';
                let yr8 = colData[9] ? colData[9][j] : '_';
                let yr9 = colData[10] ? colData[10][j] : '_';
                let yr10 = colData[11] ? colData[11][j] : '_';
                let yr11 = colData[12] ? colData[13][j] : '_';
                let yr12 = colData[13] ? colData[13][j] : '_';
                console.log(idx + ' :' + sheets[sht]+ isQuarter + ' :' + cat + ' :' + yr0 + ' :' + yr1 + ' :' + yr2 + ' :' + yr3 + ' :' + yr4 + ' :' + yr5 + ' :' + yr6 + ' :' + yr7 + ' :' + yr8 + ' :' + yr9+ ' :' + yr10+ ' :' + yr11+ ' :' + yr12);
              } catch (error) {
                console.log(error + ' ' + j + yr0)
              }
            }
          }
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();
