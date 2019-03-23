# Environment 

```
cd env
docker-compose up
docker-compose run vue
```
## For Develop

```
docker-compose run -p 8080:8080 vue
```

## For Demo
```
docker-compose run -p 8080:8080 vue -c "npm run serve"
```


# vuetify

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
