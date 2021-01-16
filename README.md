![](/ga_cog.png)

# World Bank Loan Records Finder

**Lesson Objective:**
- Using Angular.js to make ajax calls with the $http module

**Prerequsites:**
- JavaScript / Node.js
- Express
- Mongo / Mongoose
- Angular.js

---

## The World Bank App

You will be provided with working server code that delivers an API of World Bank Loan data in JSON format. Your mission is to build a single-page Angular front-end that makes use of the data. You will _not change the server code_ in any way: you are _writing Angular_ to suit.

### Your Angular page should display:
- The number of records in the database.
- A clickable list of each unique `region` name in the database.
- When the `region` name is clicked, a list of all the records associated with that region should appear.
- A search bar / filter box to narrow down the list of regions.
- A working form to add a new record to the database.
	- When the data is submitted and processed, the page should immediately reflect the changes

### Mockup

![main](https://i.imgur.com/u9Hf6KZ.png)

##### The mockup shown above contains...

- **Top:** the number of records is displayed.   
- **Right**: All region names in the database, duplicates excluded. A search bar / filter box.  
- **Left:** All the records for a given region once the region name is clicked.

![newrecord](https://i.imgur.com/4wdv1yl.png)

##### Same mockup, but when you scroll down you should also see on the...

- **Right:** A form to submit a new record.</br></br>

![filter](https://i.imgur.com/jYs7yBS.png)

##### Same mockup, but notice on the...

- **Right:** Putting input into the search/filter box changes the region list

![filter](https://i.imgur.com/jYs7yBS.png)

##### Just a closer look at the number of records and search/filter box

![filterclose](https://i.imgur.com/pYmkL3p.png)

---

### Getting Started

#### Set up and seed db
* `npm install` your dependencies.
* If you run `nodemon` and go to localhost:3000 at the root, you should get a blank page. This is because there is not yet a public folder or anything attributed to the root. You can check out a JSON service routes by going to `/wbinfo/count`. This route gives a count of all records in the database, and should currently read 0 because the database has not been seeded.
* There's a seed route within a seed controller. Seed your database with all the World Bank records by going to `/seed` in your browser **once**. The app will redirect to the `wbinfo` JSON index for verification purposes.


#### Set up Angular
* Create your static assets. Your `index.html` and `app.js` will work together with two-way data binding.
* Create your Angular module (call it whatever you like). For example:

	**In index.html**

	```
	<html ng-app="worldbank">
	```
	**In app.js**

	```
	const app = angular.module('worldbank', []);
	```

* Create a controller (you just need _one_) to work with your data. You can call it whatever you like. Give your controller `$http` so that it can make ajax requests.

	**In index.html**
	```
	<body ng-controller="mainController as ctrl">
	```
	**In app.js**
	```
	app.controller('mainController', ['$http', function($http) {
		//stuff
	}]);
	```

### Creating the app

#### Get the number of records and display it on the page
* Look in the starter code: there is a controller for the World Bank info called `wbinfoController`.
  * The first route in the controller uses the Mongoose `.count()` query. `.count()` is just like `.find()` but instead of returning all the records, it just returns the total number of those records. You don't need to alter this route, just know that it exists and what it does.
* When the page loads, make an ajax request to `/wbinfo/count`.
* Display a count of all records in the database.

#### Get the country / region names and display them on the page
* Look in the starter code-- in the `wbinfoController` there is a route called `'/uniqueRegions'` that uses the Mongoose `.distinct()` query. This query will find all entries of a certain kind, and exclude duplicates. We can get a list of all regions and they will be unique. You don't need to alter this route, just know that it exists and what it does.
* When the page loads, make an ajax request to `/wbinfo/uniqueRegions`.
* Display all the regions on the page.

#### When you click on a region name, all the separate records for that region will appear
* In the starter code, in the `wbinfoController` there is a route called `'/byName/:name'` that uses the Mongoose `.find()` query to retrieve all records _with a particular region name only_. The region name is passed in through `req.params`. You don't need to alter this route, just know that it exists and what it does.
* When the user clicks on a region name from the list, make an ajax request to `'/wbinfo/byName/' + (some variable name)`.
* Display all records associated with the clicked region on the page.

> ##### MODEL REFERENCE   
> ###### A `wbinfo` record has five strings    
> * `region`  
> * `projectabstract`  
> * `projectname`  
> * `year`  
> * `loanamnt`  

#### Make a search box that will filter the region names

* Watch this video on making a search box (the final code is at around `3:32 - 3:40`, skip to that if you like): https://www.youtube.com/watch?v=YFsduR7mBfY
* Implement a search box that will filter the region names.


#### Add in a form to post new data

* In your `index.html`, Make a form that belongs to the parent controller (the form does not have its own controller).

Example code:

```
<form name="newRecordForm" ng-submit="ctrl.processForm()">
	<!-- stuff -->
	<button type="submit">SUBMIT</button>
</form>
```

* Make an empty object in your controller to store form data:

```
app.controller('mainController', ['$http', function($http) {

  this.formdata = {};

  // lots of stuff

}]);
```

* Make `this.formdata = {}` accept data from all the `ng-model`s in the form, and process that object in a function bound to `ng-submit`.

* The function that processes the form should make an ajax POST request to `'/wbinfo'` to create a new record.

Example POST request syntax:

```
   $http({
      method  : 'POST',
      url     : '/wbinfo',
      data    : this.formdata
   }).then((data)=> { });
```


### Add more functionality

- List the region names alphabetically in the region list
- Include `delete` functionality (you will have to create a server route for it as well)
- Include `put` functionality (you will have to create a server route for it as well)
- Make it so that the form clears after you submit

---

### Resources

#### The routes
You have a controller for serving wbinfo data. You don't need to change these or anything else in the server, this is just a comprehensive list of all the given routes in the starter code. The routes are:

- `/wbinfo/count`.
Serves up a count of all records in the database.

- `/wbinfo/uniqueRegions`
Serves up all values for the key `region` excluding duplicates.

- `/wbinfo/byName/:name`
Will deliver all records where the region name is the same as `req.params.name`

- There is also an index route `/wbinfo` for testing to see if all the data is there.

- And `POST /wbinfo` for creating a new record.

Use the information served by these routes in your Angular by using `$http` to get the information.

There is no front-end code given to you, you are building the entirety of the static component of the app in the `public` folder. Your front-end doesn't have to look anything like the examples given above, just as long as the information from the routes is used and the program flow works.

#### Some useful Angular directives

- `ng-app`
- `ng-controller` you only need one
- `ng-repeat`
- `ng-model`
- `ng-click`
- `ng-submit` within a form element
- `| filter:`

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
