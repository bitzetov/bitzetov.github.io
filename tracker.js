var BtczBalance1 = 0;
var BtczValue = 0;
var startDate = new Date("2018-01-12T08:00:00Z");

function updatePage(){
    var currentDate = new Date().getTime();
    var hours = Number(Math.round((currentDate-startDate)/3600000));
    var totalDonations = Number(Math.round(BtczBalance1));
    var hourlyAverage = Number(Math.round(totalDonations/hours));
    var BtczBalance1_toBtc = (BtczBalance1*BtczValue);
    document.getElementById('statsTxt').innerHTML = "<b>" + totalDonations + " BTCZ</b> собрано за <b>" + hours + " часов</b>, в среднем: <b>" + hourlyAverage + " BTCZ/час</b>";
    document.getElementById('btczBalance1').innerHTML = BtczBalance1.toFixed(0) + " BTCZ";
    document.getElementById('btczBalance1_toBtc').innerHTML = "<b>" + BtczBalance1_toBtc.toFixed(8) + " BTC</b>";
    document.getElementById('progressBar1').style.width = (BtczBalance1_toBtc/0.003).toFixed(2) + "%";
    document.getElementById('progressPercent1').innerHTML = (BtczBalance1_toBtc/0.003).toFixed(0) + "%";
}

function getBalances(){
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "https://bitcoinz.ph/api/addr/t1M3fZ2aZ5U8pRdAoKH2rwLH2evnXmz3B3A/balance", true);
    xhr1.onload = function(){
        if(this.status == 200){
            var result = xhr1.responseText;
            BtczBalance1 = Number(result/100000000);
            updatePage();
        }
    }
    xhr1.send();
    var xhr3 = new XMLHttpRequest();
    xhr3.open("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoinz/", true);
    xhr3.onload = function(){
        if(this.status == 200){
            var result = JSON.parse(xhr3.responseText);
            BtczValue = Number(result[0].price_btc);
            updatePage();
        }
    }
    xhr3.send();
}

function start(){
    getBalances();
    setInterval(function(){getBalances();}, 300000);
}
