# README

## General
This web app was created as part of the interview process for Crystal D and fulfills the requirements as described in the project overview.

## Instructions
I opted to allow my localhost server to process PHP through the index.html page as a production server would allow, and included the PHP in the HTML. While this is not necessarily conventional, without using a template framework of some sort I wanted to keep the original file extensions while being able to dynamically generate the table in the PHP by looping through the queried data. Instead of renaming the file to index.php and echo'ing out the table, I kept it as index.html and added the following in the relevant spot.
I used XAMPP as a local server to do this, so I added mine into the apache httpd conf file.
If making changes, all services must be restarted.
![image](https://user-images.githubusercontent.com/96219624/217136976-387939c0-110f-4b31-a2b4-dce235bb888c.png)

If this is not completed in some form or another, the project will not run properly and errors will occur.

![image](https://user-images.githubusercontent.com/96219624/217137986-35cba3f4-ffc0-4b30-bce4-406d454602c9.png)


## Challenges of this project
The biggest challenge for the project itself was working with the Javascript to dynamically determine cell locations after the row sorting had been changed. I was initially overthinking this, and really had to drill down to accessing the information. By accessing the event target of the added handlers and traversing through, I was able to pull the information I needed to determine where each cell would be after sorting in order to accurately replace the text for the hobby.

## Design Approach 
My approach was primarily to demonstrate my capabilities of being able to develop in a PHP/Javascript/MYSQL environment in an organized way. I added some CSS to provide some depth and interface to the table but did not go out of the way to over design. I opted to allow my localhost server to process PHP through the index.html page as a production server would allow, and included the PHP in the HTML. By doing this I was able to dynamically generate the table in the PHP by looping through the queried data.
![Preview Image](https://github.com/Jihx-0/crystal-d-test/blob/main/crystaldtable.png)

## Potential Improvements
I feel that there is room for improvement in terms of code reuseability in the Javascript file. Some of the XHR request stuff was not cooperating for me as reuseable, and I think that there can be some repeated code eliminated. I would also change the SQL statements to use bound parameters where appropriate.

## Sources
https://stackoverflow.com/questions/4687208/using-htaccess-to-make-all-html-pages-to-run-as-php-files
