'use strict';

var stores = [];

function Locations (name, minCustomers, maxCustomers, avgCookiePerCust) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiesPurchasedPerHour = [];
  this.hoursInDayArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
  stores.push(this);
};

Locations.prototype.numberOfCustomers = function() {
  var min = this.minCustomers;
  var max = this.maxCustomers;
  var randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
};

Locations.prototype.findCookiesPerHour = function() {
  for (var i = 0; i < 14; i++) {
    var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
    this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
  };
};

Locations.prototype.findTotalCookies = function() {
  var totalCookies = 0;
  for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
    totalCookies += this.cookiesPurchasedPerHour[i];
  };
  this.cookiesPurchasedPerHour.push(totalCookies);
  return totalCookies;
};

Locations.prototype.displaySales = function(id) {
  var liStoreName = document.createElement('li');
    liStoreName.textContent = this.name;
    var ulStoresLi = document.getElementById(id);
  ulStoresLi.appendChild(liStoreName);
  for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
    var liStores = document.createElement('li');
    liStores.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
    ulStoresLi.appendChild(liStores);
  };
};

Locations.prototype.renderedTableData = function() {
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

Locations.prototype.renderedHeader = function() {
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

Locations.prototype.renderedFooter = function() {
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
  tR.appendChild(tD);
  table.appendChild(tR);
};

var seattleStore = new Locations('Seattle', 23, 65, 6.3);
var tokyoStore = new Locations('Tokyo', 3, 24, 1.2);
var dubaiStore = new Locations('Dubai', 11, 38, 3.7);
var parisStore = new Locations('Paris', 20, 38, 2.3);
var limaStore = new Locations('Lima', 2, 16, 4.6);

stores[0].renderedHeader();

for (var i = 0; i < stores.length; i++) {
  stores[i].findCookiesPerHour();
  stores[i].findTotalCookies();
  stores[i].displaySales('salesData');
  stores[i].renderedTableData();
};

stores[0].renderedFooter();

// ==================== Form Section ====================

var locationForm = document.getElementById('newLocation');

locationForm.addEventListener('submit', makeALocation);

function makeALocation(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var avgCookiePerCust = event.target.avgCookiesPerCust.value;

  var newLocation = new Locations(name, minCustomers, maxCustomers, avgCookiePerCust);
  newLocation.findCookiesPerHour();
  newLocation.findTotalCookies();
  newLocation.displaySales('salesData');
  newLocation.renderedTableData();
};