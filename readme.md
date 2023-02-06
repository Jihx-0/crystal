# README

## General
This web app was created as part of the interview process for Crystal D and fulfills the requirements as described in the project overview.

## Challenges of this project
The biggest challenge for the project itself was working with the Javascript to dynamically determine cell locations after the row sorting had been changed. I was initially overthinking this, and really had to drill down to accessing the information. By accessing the event target of the added handlers and traversing through, I was able to pull the information I needed to determine where each cell would be after sorting in order to accurately replace the text for the hobby.

## Design Approach 
My approach was primarily to demonstrate my capabilities of being able to develop in a PHP/Javascript/MYSQL environment in an organized way. I added some CSS to provide some depth and interface to the table but did not go out of the way to over design. I opted to allow my localhost server to process PHP through the index.html page as a production server would allow, and included the PHP in the HTML. By doing this I was able to dynamically generate the table in the PHP by looping through the queried data.

## Potential Improvements
I feel that there is room for improvement in terms of code reuseability in the Javascript file. Some of the XHR request stuff was not cooperating for me as reuseable, and I think that there can be some repeated code eliminated. I would also change the SQL statements to use bound parameters where appropriate.