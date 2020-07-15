'use strict';

var stores = [];

function Stores (name, minCustomers, maxCustomers, avgCookiePerCust) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiesPurchasedPerHour = [];
  this.hoursInDayArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

  this.numberOfCustomers = function() {
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  };

  this.findCookiesPerHour = function() {
    for (var i = 0; i < 14; i++) {
      var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
      this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
    };
  },

  this.findTotalCookies = function() {
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      totalCookies += this.cookiesPurchasedPerHour[i];
    };
    this.cookiesPurchasedPerHour.push(totalCookies);
    return totalCookies;
  };

  this.displaySales = function(id) {
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var ulStoresLi = document.getElementById(id);
      var liStores = document.createElement('li');
      liStores.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulStoresLi.appendChild(liStores);
    };
  };
  stores.push(this)
};

Stores.prototype.renderedTableData = function() {
  var table = document.getElementById('cookiesTable');
  var row = document.createElement('tr');
    var tableHeadCell = document.createElement('th');
    tableHeadCell.textContent = this.name;
    row.appendChild(tableHeadCell);
  table.appendChild(row);

  for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
    var table = document.getElementById('cookiesTable');
    var tableBodyCell = document.createElement('td');
      tableBodyCell.textContent = this.cookiesPurchasedPerHour[i];
    row.appendChild(tableBodyCell);

  
  };
};

Stores.prototype.renderedHeader = function() {
  var table = document.getElementById('cookiesTable');
  var tL = document.createElement('td');
  tL.textContent = '';
  table.appendChild(tL);
  for (var i = 0; i < this.hoursInDayArray.length; i++) {
    var tableHead = document.createElement('td');
      tableHead.textContent = this.hoursInDayArray[i];
    table.appendChild(tableHead);
  };
  
};

Stores.prototype.renderedFooter = function() {
  var table = document.getElementById('cookiesTable');
  var tR = document.createElement('tr');
  var tH = document.createElement('th');
  tH.textContent = 'Totals';
  tR.appendChild(tH);

  var bucket = 0;
  var perHourTotalCookies;
  var tD;
  for (var i = 0; i < this.hoursInDayArray.length; i++) {
   perHourTotalCookies = 0;
    for (var j = 0; j < stores.length; j++) {
     perHourTotalCookies += stores[j].cookiesPurchasedPerHour[i];
    };
    tD = document.createElement('td');
    tD.textContent = perHourTotalCookies;
    tR.appendChild(tD);
    bucket += perHourTotalCookies; 

  };
  tD = document.createElement('td');
  tD.textContent = bucket;
  tR.appendChild(tD);
  table.appendChild(tR);
};

//Calling functions in constructor for each store location
var seattleStore = new Stores('Seattle', 23, 65, 6.3);
seattleStore.numberOfCustomers();
seattleStore.findCookiesPerHour();
seattleStore.findTotalCookies();
//seattleStore.displaySales('seattleStand');

seattleStore.renderedHeader();
seattleStore.renderedTableData();



var tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
tokyoStore.numberOfCustomers();
tokyoStore.findCookiesPerHour();
tokyoStore.findTotalCookies();
//tokyoStore.displaySales('tokyoStand');
tokyoStore.renderedTableData();

var dubaiStore = new Stores('Dubai', 11, 38, 3.7);
dubaiStore.numberOfCustomers();
dubaiStore.findCookiesPerHour();
dubaiStore.findTotalCookies();
//dubaiStore.displaySales('dubaiStand');
dubaiStore.renderedTableData();

var parisStore = new Stores('Paris', 20, 38, 2.3);
parisStore.numberOfCustomers();
parisStore.findCookiesPerHour();
parisStore.findTotalCookies();
//parisStore.displaySales('parisStand');
parisStore.renderedTableData();

var limaStore = new Stores('Lima', 2, 16, 4.6);
limaStore.numberOfCustomers();
limaStore.findCookiesPerHour();
limaStore.findTotalCookies();
//limaStore.displaySales('limaStand');
limaStore.renderedTableData();
seattleStore.renderedFooter();


// var seattle = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiePerCust: 6.3,
//   cookiesPurchasedPerHour: [],
//   hoursInDayArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'], 

//   numberOfCustomers: function () {
//     var min = this.minCustomers;
//     var max = this.maxCustomers;
//     var randomNumber = Math.random() * (max - min) + min;
//     return Math.round(randomNumber);
//   },

//   findCookiesPerHour: function () {
//     for (var i = 0; i < 14; i++) {
//       var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
//       var puttingInArray = this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
//     };
//     return puttingInArray;
//   },

//   findTotalCookies: function () {
//     var totalCookies = 0;
//     for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       totalCookies += this.cookiesPurchasedPerHour[i];
//     };
//     this.cookiesPurchasedPerHour.push(totalCookies);
//     return totalCookies;
//   },

//   displaySales: function () {
//     for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       var ulSeattleLi = document.getElementById('seattleStand');
//       var liSeattle = document.createElement('li');
//       liSeattle.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
//       ulSeattleLi.appendChild(liSeattle);
//     }
//   },

// };

// seattle.numberOfCustomers();
// seattle.findCookiesPerHour();
// seattle.findTotalCookies();
// seattle.displaySales();

// var tokyo = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiePerCust: 1.2,
//   cookiesPurchasedPerHour: [],
//   hoursInDayArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'], 

//   numberOfCustomers: function () {
//     var min = this.minCustomers;
//     var max = this.maxCustomers;
//     var randomNumber = Math.random() * (max - min) + min;
//     return Math.round(randomNumber);
//   },

//   findCookiesPerHour: function () {
//     for (var i = 0; i < 14; i++) {
//       var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
//       var puttingInArray = this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
//     };
//     return puttingInArray;
//   },

//   findTotalCookies: function () {
//     var totalCookies = 0;
//     for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       totalCookies += this.cookiesPurchasedPerHour[i];
//     };
//     this.cookiesPurchasedPerHour.push(totalCookies);
//     return totalCookies;
//   },

//   displaySales: function () {
//     for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       var ulTokyoLi = document.getElementById('tokyoStand');
//       var liTokyo = document.createElement('li');
//       liTokyo.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
//       ulTokyoLi.appendChild(liTokyo);
//     }
//   },

// };

// tokyo.numberOfCustomers();
// tokyo.findCookiesPerHour();
// tokyo.findTotalCookies();
// tokyo.displaySales();

// var dubai = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiePerCust: 3.7,
//   cookiesPurchasedPerHour: [],
//   hoursInDayArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'], 

//   numberOfCustomers: function () {
//     var min = this.minCustomers;
//     var max = this.maxCustomers;
//     var randomNumber = Math.random() * (max - min) + min;
//     return Math.round(randomNumber);
//   },

//   findCookiesPerHour: function () {
//     for (var i = 0; i < 14; i++) {
//       var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
//       var puttingInArray = this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
//     };
//     return puttingInArray;
//   },

//   findTotalCookies: function () {
//     var totalCookies = 0;
//     for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       totalCookies += this.cookiesPurchasedPerHour[i];
//     };
//     this.cookiesPurchasedPerHour.push(totalCookies);
//     return totalCookies;
//   },

//   displaySales: function () {
//     for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
//       var ulDubaiLi = document.getElementById('dubaiStand');
//       var liDubai = document.createElement('li');
//       liDubai.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
//       ulDubaiLi.appendChild(liDubai);
//     }
//   },
  
// };

// dubai.numberOfCustomers();
// dubai.findCookiesPerHour();
// dubai.findTotalCookies();
// dubai.displaySales();