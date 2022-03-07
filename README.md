<div align="center">
  
<img src="frontend/src/assets/icons/logo.png" width="50%">

https://kexplx.github.io/covid

</div>

# COVID-19 Metrics for Germany and Districts

- 7-Day-Incidence
- New cases
- Deaths
- Vaccinations
- 8-Day History

|                                                     Districts                                                     |                                                      History                                                      |                                                 Top 10 Districts                                                  |
| :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/29175032/153708507-e29847b3-8d8e-4815-a22c-71fa468c4c1e.png"> | <img src="https://user-images.githubusercontent.com/29175032/153708458-f5fd2291-af56-49fe-afdf-c57aa31839c2.png"> | <img src="https://user-images.githubusercontent.com/29175032/153708465-e2910fa1-04f6-45b4-8549-da1c83135862.png"> |

## Architecture

<div align="center">

![asda](docs/covidad-component-diagram.svg)

</div>

## Develop Frontend

Using **npm** in the project root:

```
cd frontend
npm install
npm start
```

_By default, the frontend will use dummy data so starting the backend isn't necessary._

## Develop Backend

1. Create a `.env` file and fill it with the API keys as implied in `.env.example`. You will need:

   - A Google Cloud Account with payment information
   - A MongoDB Account and a cluster at https://www.mongodb.com/atlas/database
   - Gmail E-Mail

2. Run `npm start` inside `/backend` to start the webserver.
