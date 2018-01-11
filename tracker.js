Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @bitzetov
 Sign out
 Watch 0
  Star 0  Fork 0 bitzetov/bitzetov.github.io
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
bitzetov.github.io/ 
tracker.js
   or cancel
    
 Edit file    Preview changes
1
var BtczBalance1 = 0;
2
var BtczBalance2 = 0;
3
var BtczValue = 0;
4
var startDate = new Date("2018-01-03T19:00:00Z");
5
​
6
function updatePage(){
7
    var currentDate = new Date().getTime();
8
    var hours = Number(Math.round((currentDate-startDate)/3600000));
9
    var totalDonations = Number(Math.round(BtczBalance1+BtczBalance2));
10
    var hourlyAverage = Number(Math.round(totalDonations/hours));
11
    var BtczBalance1_toBtc = (BtczBalance1*BtczValue);
12
    var BtczBalance2_toBtc = (BtczBalance2*BtczValue);
13
    document.getElementById('statsTxt').innerHTML = "<b>" + totalDonations + " BTCZ</b> raised in <b>" + hours + " hours</b>, average: <b>" + hourlyAverage + " BTCZ/h</b>";
14
    document.getElementById('btczBalance1').innerHTML = BtczBalance1.toFixed(0) + " BTCZ";
15
    document.getElementById('btczBalance2').innerHTML = BtczBalance2.toFixed(0) + " BTCZ";
16
    document.getElementById('btczBalance1_toBtc').innerHTML = "<b>" + BtczBalance1_toBtc.toFixed(8) + " BTC</b>";
17
    document.getElementById('btczBalance2_toBtc').innerHTML = "<b>" + BtczBalance2_toBtc.toFixed(8) + " BTC</b>";
18
    document.getElementById('progressBar1').style.width = (BtczBalance1_toBtc/0.025).toFixed(2) + "%";
19
    document.getElementById('progressPercent1').innerHTML = (BtczBalance1_toBtc/0.025).toFixed(0) + "%";
20
    document.getElementById('progressBar2').style.width = (BtczBalance2_toBtc/0.025).toFixed(2) + "%";
21
    document.getElementById('progressPercent2').innerHTML = (BtczBalance2_toBtc/0.025).toFixed(0) + "%";
22
}
23
​
24
function getBalances(){
25
    var xhr1 = new XMLHttpRequest();
26
    xhr1.open("GET", "https://bitcoinz.ph/api/addr/t1M3fZ2aZ5U8pRdAoKH2rwLH2evnXmz3B3A/balance", true);
27
    xhr1.onload = function(){
28
        if(this.status == 200){
29
            var result = xhr1.responseText;
30
            BtczBalance1 = Number(result/100000000);
31
            updatePage();
32
        }
33
    }
34
    xhr1.send();
35
    var xhr2 = new XMLHttpRequest();
36
    xhr2.open("GET", "https://bitcoinz.ph/api/addr/t1QPbt39fb4pzWXkNSM3qo6dWiL4ii42s48/balance", true);
37
    xhr2.onload = function(){
38
        if(this.status == 200){
39
            var result = xhr2.responseText;
40
            BtczBalance2 = Number(result/100000000);
41
            updatePage();
42
        }
43
    }
44
    xhr2.send();
45
    var xhr3 = new XMLHttpRequest();
46
    xhr3.open("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoinz/", true);
47
    xhr3.onload = function(){
48
        if(this.status == 200){
49
            var result = JSON.parse(xhr3.responseText);
@bitzetov
Commit changes

Update tracker.js

Add an optional extended description…
  Commit directly to the master branch.
  Create a new branch for this commit and start a pull request. Learn more about pull requests.
Commit changes  Cancel
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
