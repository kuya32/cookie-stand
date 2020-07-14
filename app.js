'use strict';

var seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCust: 6.3,
  cookiesPurchasedPerHour: [],
  hoursInDayArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'], 

  numberOfCustomers: function () {
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  },

  findCookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
      var puttingInArray = this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
    };
    return puttingInArray;
  },

  findTotalCookies: function () {
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      totalCookies += this.cookiesPurchasedPerHour[i];
    };
    this.cookiesPurchasedPerHour.push(totalCookies);
    return totalCookies;
  },

  displaySales: function () {
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var ulSeattleLi = document.getElementById('seattleStand');
      var liSeattle = document.createElement('li');
      liSeattle.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulSeattleLi.appendChild(liSeattle);
    }
  },

};

seattle.numberOfCustomers();
seattle.findCookiesPerHour();
seattle.findTotalCookies();
seattle.displaySales();

var tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerCust: 1.2,
  cookiesPurchasedPerHour: [],
  hoursInDayArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'], 

  numberOfCustomers: function () {
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  },

  findCookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
      var puttingInArray = this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
    };
    return puttingInArray;
  },

  findTotalCookies: function () {
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      totalCookies += this.cookiesPurchasedPerHour[i];
    };
    this.cookiesPurchasedPerHour.push(totalCookies);
    return totalCookies;
  },

  displaySales: function () {
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var ulTokyoLi = document.getElementById('tokyoStand');
      var liTokyo = document.createElement('li');
      liTokyo.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulTokyoLi.appendChild(liTokyo);
    }
  },

};

tokyo.numberOfCustomers();
tokyo.findCookiesPerHour();
tokyo.findTotalCookies();
tokyo.displaySales();

var dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerCust: 3.7,
  cookiesPurchasedPerHour: [],
  hoursInDayArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'], 

  numberOfCustomers: function () {
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  },

  findCookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
      var puttingInArray = this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
    };
    return puttingInArray;
  },

  findTotalCookies: function () {
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      totalCookies += this.cookiesPurchasedPerHour[i];
    };
    this.cookiesPurchasedPerHour.push(totalCookies);
    return totalCookies;
  },

  displaySales: function () {
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
      var ulDubaiLi = document.getElementById('dubaiStand');
      var liDubai = document.createElement('li');
      liDubai.textContent = this.hoursInDayArray[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      ulDubaiLi.appendChild(liDubai);
    }
  },
  
};

dubai.numberOfCustomers();
dubai.findCookiesPerHour();
dubai.findTotalCookies();
dubai.displaySales();