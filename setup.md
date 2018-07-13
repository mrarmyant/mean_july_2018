```bash
mkdir express_project_name # create directory for new project
npm init -y   # set up empty package.json file
```
install necessary packages using npm

Set up server section of project:
```bash
touch server.js
```

Set up Angular (client portion):
```bash
ng new angular-app
cd angluar-app
ng build --watch # LEAVE THIS RUNNING!
```

Tell Express where to find static files (this should be in server.js)
```javascript
app.use(express.static(path.join(__dirname, 'angular-app', 'dist', 'angular-app')));
```

```bash
mongod # start mongoDB daemon
mongo  # start mongoDB shell
nodemon server.js  # start project server
```
