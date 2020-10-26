# nutrition

ANTRAC Project, Food Composition Database

## Run with Docker

Docker is required to run the project
How to install Docker: <a href="https://docs.docker.com/get-docker/" target="_blank">https://docs.docker.com/get-docker/</a>

```
docker-compose build
docker-compose up -d
```

## Configure with data

<img src="important-icon.png" width="14px"> **_Important:_**  
Following data is not public hence not available on this github repo.

### Backup & Restore data from the DB

```
# Backup
docker exec gppa_db /usr/bin/mysqldump -u gppa_user --password=gppa > nutrition.sql

# Restore
cat nutrition.sql | docker exec -i gppa_db /usr/bin/mysql -u gppa_user --password=gppa gppa
```

### Deploy images from the archive

```
docker cp images.zip gppa_php:/var/www/html/nutrition/public/
docker exec -u 0 -i gppa_php unzip /var/www/html/nutrition/public/images.zip -d /var/www/html/nutrition/public/
docker exec -u 0 -it gppa_php chown -R www-data:www-data /var/www/html/nutrition/public
```

### Remove the app

```
docker rm gppa_webserver
docker rm gppa_php
docker rm gppa_db
docker volume rm nutrition_app-volume
docker volume rm nutrition_dbdata
docker rmi nutrition_gppa_php
```
