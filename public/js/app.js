  //Creating the App / USER STORIES
        //1. WHEN I CLICK A GET RECORDS COUNT BUTTON,
        //   I WILL SEE (Get) the number of records and 
        //   it will display it on the page
            //Look in the starter code for the World Bank Info called
            // 'wbinfoController'.
            //The first route in the controller uses the Mongoose .count()
            // and it is just like find(). but instead of returning all the records,
            // it will just retun the total number of those records.
            // You do not need to alter this route, you just need to know
            // it exists and what it does
                 // Objective: Display the count of records on the page

        //2. WHEN I CLICK A Get the country / region names BUTTON
        //   I WILL SEE them on the page displayed
            //look in the starter code in 'wbinfoController. There is
            //a route called '/uniqueRegions' that uses Mongoose .distinct()
            // query. This query will find all entries of a certain kind,
            // and exclude any duplicates. We can get a list of all regions
            // and they will be unique. You don't need to alter this route,
            // but just know that it exists and what it does.
                // Objective: Display all regions on the page.

        //3. When I click on a region name,
        //   all the separate records for that region
        //   will appear
            //In the starter code, in the wbinfoController,
            // there is a route called '/byName/:name' that uses the
            // Mongoose .find() query to retrieve all records with a
            // particular region name only. The region name is PASSED 
            // in through REQ.PARAMS. You don't need to alter this route,
            // but just know that it exists and know what it does.
                // Objective: Display all records associated with the clicked
                // region on the page.

        //4. Make a search box that will filter the region names
            //Watch a video on making a search box
            //  (the final code is at around 3:32 - 3:40, skip to that if you like):
            // https://www.youtube.com/watch?v=YFsduR7mBfY
            // Objective: Implement a search box that will filter the region names.
        
        //5. Add in a form to post new data
            //In your index.html, make a form that belongs the parent controller
            // (the form does not have its own controller)
            // Example code: 
            /*
                <form name="newRecordForm" ng-submit="ctrl.processForm()">
                    <!--Stuff-->
                    <button type="submit">Submit</button>
                </form>
            */
           // Make an empty object in your controller to store the form data:
           // app.controller('mainController', ['$http', function($http){
        //      this.formData = {};
                // lots of code here 
           // }])

           //Make the example above accept data from all the ng-model (s) in the form
           //And process that object in a function bound to ng-submit.
           //The function that processes the form should make http/ajax POST request
           // to the /wbinfo to create a new record..

        //6. Add more functionality (BONUS)
            //-List the region names alphabetically in the region list
            //-Include delete functionality (you will have to create a server route for it as well)
            //-include put functionality (you will have to create a server route for it as well)
            //-Make it so that the form clears after you submit

        //RESOURCES

        //The routes
        //You have a controller for serving wbinfo data.
        //You don't to change these or anything else in the server, this is just
        // a comprehensive list of all the given routes in the starter code.
        // The routes are:
        // -/wbinfo/count  ---- servers up a count of all records in the database
        // -/wbinfo/uniqueRegions ----- serves up all values for the key region excluding duplicates
        // -/wbinfo/byName/:name ------ will deliver all records where the region name is the same as req.params.name
        // -/wbinfo (INDEX ROUTE for testing to see if data is there)
        // -POST ROUTE to /wbinfo for creating a new record.

        //Useful Angular Directives (for the html)
            //ng-app (you only need one, usually)
            //ng-controller (You only need one)
            //ng-repeat
            //ng-model
            //ng-click
            //ng-submit
            //ng-if
            //ng-show
            //ng-hide
            // | filter: