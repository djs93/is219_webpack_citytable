# JWT Authentication and Authorization:
## Login:
Login Success:
![Login Success](images/Auth%20service%20request.png)
Login Failure:
![Login Failure](images/Auth%20service%20request%20fail.png)
## Logout:
Logout:
![Logout](images/Logout%20Success.png)
## Refresh Tokens:
Refresh Token to Token:
![Refresh Token](images/Refresh%20Token.png)
## City API Integration
Get all, auth failure:
![Get all, auth failure](images/City%20service%20auth%20unsuccessful.png)
Get all, auth success:
![Get all, auth success](images/City%20service%20auth%20successful.png)
Attempt to change data without admin permissions/not logged in:
![Attempt to change data without admin permissions](images/POST%20response%20unauth.png)
*All other data-changing requests behave the same way and return the same data as below when user has proper permissions*
---
# CRUD Update:
## Create:
Response to POST:
![Create image](images/POST%20response.png)
Proof of addition:
![Create image verification](images/POST%20proof%20of%20change.png)
## Read:
Response to GET (all entries):
![Read all image](images/GET%20all.png)
Response to GET (single entry):
![Read one image](images/GET%20single.png)
## Update:
Response to PUT:
![Create image](images/PUT%20response.png)
Proof of change:
![Create image verification](images/PUT%20proof%20of%20change.png)
## Delete:
Response to DELETE:
![Create image](images/DELETE%20response.png)
Proof of change:
![Create image verification](images/DELETE%20proof%20of%20change.png)
___
Prerequisites:
Install Node:
https://nodejs.org/en/download/


Install Webpack Globally by running this command on your terminal / command prompt

npm install --global webpack

Webpack Documentation: https://webpack.js.org/

To Use:

1.  Clone the Repo
2.  Run npm install
3.  Run webpack serve to live reload your project, so you can see changes without refreshing the browser
4.  Once it's running you can go to the dev server and see your changes: http://localhost:9000/
5.  **run "webpack build" to bundle your code and put it in the docs folder so github pages can serve it**

Press Control C to stop the server or the builder

Turn on github pages and put a link to your site in the readme when you turn in the github repo link.

Working site here:

http://www.webizly.com/BasicWebPack/
