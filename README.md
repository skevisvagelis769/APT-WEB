This is a basic post-get image server.
The main goal of this project is the interaction between Frontend - API and backend.
The web app has 3 directories:
1) the root directory which prints out all the images stored in the mongodb database
2) the /store directory that posts the image you specify in the search bar to the database (Note: the image must be contained within the IMAGES folder)
3) the /srch directory that posts a query for a specific image you wish to search either via directory or date

How to run this app:
STEP 1: sudo apt install npm
STEP 2: npm i -g typescript
STEP 3: npm install  -D typescript ts-node-dev @types/express @types/cors  
STEP 4: npm install express 
STEP 5: sudo npm i -g @types/node
STEP 6:(if step 4 didnt work): npm i -d @types/node
STEP 7: npm run start , to run & compile
STEP 8: profit
