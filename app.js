'use strict';

var seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCust: 6.3,
  cookiesPurchasedPerHour: [],

  numberOfCustomers: function () {
    var min = this.minCustomers;
    var max = this.maxCustomers;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  },

  findCookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var amountOfCookies = this.numberOfCustomers() * this.avgCookiePerCust;
      this.cookiesPurchasedPerHour.push(Math.round(amountOfCookies));
    };
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
    for (var i = 0; i < this.cookiesPurchasedPerHour.length; i++){
      var ulSeattleLi = document.getElementById('seattleStand');
      var liSeattle = document.createElement('li');
      liSeattle.textContent = this.cookiesPurchasedPerHour[i];
      ulSeattleLi.appendChild(liSeattle);
    };
  },

  


  //   renderLikes: function(){
//     for(var i = 0; i < this.thingsSheLikes.length; i++){
//       // one time starts
//       //1. find target
//       var tofuLikesList = document.getElementById('tofu-likes');
//       //2.
//       var tofuLikesItem = document.createElement('li');
//       // 2.5
//       tofuLikesItem.textContent = this.thingsSheLikes[i];
//       // 3.
//       tofuLikesList.appendChild(tofuLikesItem);
//     //one time ends
//     }


};

seattle.numberOfCustomers();
seattle.findCookiesPerHour();
seattle.findTotalCookies();
seattle.displaySales();

// var tofu = {
//   name: 'tofu',
//   color: 'brown',
//   pretty: true,
//   age: 10,
//   thingsSheLikes :['eating food', 'sniffing fresh air', 'loafing', 'be the alpha'],
//   wakeUp: function () {
//     // put an li on the page with details about snowdrop waking me up
//     var parent = document.getElementById('alarms');
//     var child = document.createElement('li');
//     child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
//     parent.appendChild(child);
//   },
//   renderLikes: function(){
//     for(var i = 0; i < this.thingsSheLikes.length; i++){
//       // one time starts
//       //1. find target
//       var tofuLikesList = document.getElementById('tofu-likes');
//       //2.
//       var tofuLikesItem = document.createElement('li');
//       // 2.5
//       tofuLikesItem.textContent = this.thingsSheLikes[i];
//       // 3.
//       tofuLikesList.appendChild(tofuLikesItem);
//     //one time ends
//     }

//   }
// };

// tofu.wakeUp();
// tofu.renderLikes();




// var tokyo = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiePerCust: 1.2,
//   numberOfCustomers: function () {
//     return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers
//   },
// };

// var dubia = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiePerCust: 3.7,
//   numberOfCustomers: function () {
//     return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers
//   },
// };

// var paris = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiePerCust: 2.3,
//   numberOfCustomers: function () {
//     return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers
//   },
// };

// var lima = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiePerCust: 4.6,
//   numberOfCustomers: function () {
//     return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers
//   },
// };




// // ========== DOM Manipulation ================

// /*
//   1. find a target - find a element on the page that already exists for us to add to
//     - we will use document.getElementById
//   2. Create a new element - make a new element so it can exist
//     2.5 - give the new element appropriate content
//   3. put the new element on the parent - append it to the target
//     - method of DOM ELEMENTS, `appendChild`
// */

// // put a p tag on the page

// // 1. find a target - we needed to put an element with an id into the html file
// var kittenStorage = document.getElementById('kittenPlace');
// console.log(kittenStorage);
// // 2. create element
// var aNewPTag = document.createElement('p');
// // 2.5 appropriate content - TEXT since it is a p tag
// aNewPTag.textContent = 'snowdrop was here';
// //3. put it on the parent
// kittenStorage.appendChild(aNewPTag);


// // add a new task to the list `feed the cat`
// // 1. find the target
// var taskList = document.getElementById('tasks');
// // 2. create new element
// var newTask = document.createElement('li');
// //2.5 - content
// newTask.textContent = 'feed the cat';
// // 3. append to parent
// taskList.appendChild(newTask);


// var cats = ['avery', 'tofu', 'ragnar'];

// for(var i = 0; i < 3; i++){

//   // add a new task to the list `feed the cat`
//   // 1. find the target
//   var taskList = document.getElementById('tasks');
//   // 2. create new element
//   var newTask = document.createElement('li');
//   //2.5 - content
//   newTask.textContent = 'feed ' + cats[i];
//   // 3. append to parent
//   taskList.appendChild(newTask);
// }


// var snowdrop = {
//   name: 'snowdrop',
//   color: 'white',
//   pretty: true,
//   age : 12,
//   wakeUp : function(){
//     // put an li on the page with details about snowdrop waking me up
//     var parent = document.getElementById('alarms');
//     var child = document.createElement('li');
//     child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
//     parent.appendChild(child);
//   }
// };

// snowdrop.wakeUp();


// var ragnar = {
//   name: 'ragnar',
//   color: 'black',
//   pretty: true,
//   age: 6,
//   wakeUp: function () {
//     // put an li on the page with details about snowdrop waking me up
//     var parent = document.getElementById('alarms');
//     var child = document.createElement('li');
//     child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
//     parent.appendChild(child);
//   }
// };

// ragnar.wakeUp();

// var tofu = {
//   name: 'tofu',
//   color: 'brown',
//   pretty: true,
//   age: 10,
//   thingsSheLikes :['eating food', 'sniffing fresh air', 'loafing', 'be the alpha'],
//   wakeUp: function () {
//     // put an li on the page with details about snowdrop waking me up
//     var parent = document.getElementById('alarms');
//     var child = document.createElement('li');
//     child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
//     parent.appendChild(child);
//   },
//   renderLikes: function(){
//     for(var i = 0; i < this.thingsSheLikes.length; i++){
//       // one time starts
//       //1. find target
//       var tofuLikesList = document.getElementById('tofu-likes');
//       //2.
//       var tofuLikesItem = document.createElement('li');
//       // 2.5
//       tofuLikesItem.textContent = this.thingsSheLikes[i];
//       // 3.
//       tofuLikesList.appendChild(tofuLikesItem);
//     //one time ends
//     }

//   }
// };

// tofu.wakeUp();
// tofu.renderLikes();