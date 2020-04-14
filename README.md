# Core API

## Get Started

### git
```sh
git clone https://github.com/HarishRMaryada/node_core_api.git
```
It will create a directory called node_core_api_gateway inside the current folder.

```bash
> cd node_core_api
```
Inside that directory, project structure is as.,
```
node_core_api
├── config
│   ├── custom-environment-variables.json
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── test.json
├── controllers
│   └── index.js
├── logs
│   ├── combined.logs
│   └── error.logs
├── middleware
│   ├── error.js
│   └── logger.js
├── node_modules
├── startup
│   ├── config.js
│   ├── db.js
│   ├── logs.js
│   └── production.js
├── tests
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── app.js
├── Dockerfile
├── Jenkinsfile
├── package-lock.json
├── package.json
└── README.md
```

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install core-api and follow along the repos for respective installations.

```bash 
> npm install 
```

## Start

```bash
> npm start 
```

## Test

```bash
> npm test 
```

## Dependencies

```bash
None
```

## Environment Variables

```bash

NODE_ENV = 'String' => enum['production','development']
PORT ='String' => Number['0000','0001',....,'3000',....,'8080'] 
```

## Technologies

```bash

Development
NodeJS (ExpressJS FrameWork)

Deployment
Docker
Jenkins

```

## Contributing
Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)