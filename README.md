# meetup-stockholm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Build image local
```
docker build -t registry.heroku.com/meetup-stockholm/web
```
### Push image 
```
docker push registry.heroku.com/meetup-stockholm/web
```

### deploy image
```
heroku container:release --app meetup-stockholm web
```
