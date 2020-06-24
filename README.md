# Case Study - OMDB Movie Search 
### Özgür Çimen (derozgur@gmail.com)

### Prerequisites
- Docker v18.x
- docker-compose version 1.24.

###  How to run server and client 
```sh
docker-compose up
```

Open the url  "http://localhost:8080/" in your browser

###Configuration

Edit environment params in docker-compose.yml file 

```
  omdbsearch-server:
    environment:
      - NODE_ENV=development
      - PORT=3001
      - OMDB_API_URL=http://www.omdbapi.com/
      - OMDB_API_KEY=d6c04646
    ports:
      - 3001:3001
  omdbsearch-frontend:
    container_name: omdbsearch-frontend
    build:
      args:
        - REACT_APP_API_URL=http://localhost:3001
```

##Case Study Explanations

###Solitions

####Server Side
* Caching: I used simple mem-cache method for nodejs in terms of fast development. 
* In the search controller, a key is created using request.url origin and used for cache. With that key memcache checked if there is cached data. If request is cached before data send automaticlaly form cache. If not data is cached before response. 
* Get 20 movies for one request: I used pagination options of omdb api. For the first request it claims page first than checks the result total if there would be more it claims the second page.
 

####FrontEnd
* Typing Search Listener: I created a component and named it SearchBox. In the component after every update a timer is started that checks the inputbox whether it is ininactive. If is inactive (it is not being typed) it invoke the onchange method to say the parent component to make a search api call (bouncing implemented)

* Responsive Grid: I made use of modern css flex-box method.

