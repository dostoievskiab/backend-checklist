# Simple Backend
Application using:
- Express
- Sequelize
- PostgreSQL

### Running Docker Postgres
The first step is to download the image from Docker HUB
> docker pull postgres

Then you need run it with the configuration
>> docker run --name bd_dev -e "POSTGRES_PASSWORD=Teste123*" -p 5432:5432 -d postgres

Now the Postgres is accessible from port 5432, if needed you can access the cli of the container with:
>> docker exec -it bd_dev bash
