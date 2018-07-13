### Create Express project
```bash
mkdir express_project_name # Create directory for new project.
npm init -y   # Set up empty package.json file.
```
install necessary packages using npm:
  yourcommandline> npm install express --save
  yourcommandline> npm install ejs --save
  yourcommandline> npm install body-parser --save
  yourcommandline> npm install mongoose --save

Set up server section of project:
```bash
touch server.js
```

### Set up Angular (client portion):
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
mongod # Start mongoDB daemon.
mongo  # Start mongoDB shell.
nodemon server.js  # Start project server.
```

### Create Angular Service
From Angular app directory:
```bash
ng g s name_of_service
```
Add to `app/app.module.ts`
```javascript
import { Name_of_serviceService } from ./name_of_service.service;
Name_of_serviceService // providers array.
HttpClientModule // imports
```

Add to `name_of_service.service.ts`
```javascript
import HttpClient from '@angular/common/http';
constructor(private _http: HttpClient) {} // Set up private attribute to use HttpClient. Added to Name_of_serviceService class.
```

Add to `app.component.ts`:
```javascript
import { Name_of_serviceService } from './name_of_service.service'
constructor(private _name_of_serviceService: Name_of_serviceService) {}
```
### Create, and subscribe to, Angular Observable
Add this method to `Name_of_serviceService` class in `name_of_service.service.ts`
```javascript
getSomeThing() {
  let someObservable = this._http.get('some_route/'); // Create Observable
  someObservable.subscribe(data => `functionality here`); // Subscribe to Observable
}
```

Now we need to make sure that method is run when the Service is created. We will do this in the Service's constructor in `name_of_service.service.ts`.
```javascript
this.getSomeThing();
```
