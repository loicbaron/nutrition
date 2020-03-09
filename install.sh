# Requirements for Ubuntu 18.04 LTS
sudo apt-get update && sudo apt upgrade
sudo apt-get install -y php7.2-common php7.2-cli php7.2-gd php7.2-mysql php7.2-curl php7.2-intl php7.2-mbstring php7.2-bcmath php7.2-imap php7.2-xml php7.2-zip
sudo apt-get install -y nginx
sudo apt-get install -y php7.2-fpm

# Install Composer
exec ./install_composer.sh

# Create an empty Laravel project
cd ~
composer create-project --prefer-dist laravel/laravel nutrition
cp -R nutrition /var/www/

# Copy code from github: Model, View, Controller
git clone git@github.com:loicbaron/nutrition.git ./diff
cp -R diff/* /var/www/nutrition/

# Deploy images from the archive
sudo unzip images.zip -d /var/www/nutrition/public/

# Install MySQL
sudo apt-get install -y mysql-server
mysql -e "CREATE DATABASE nutrition DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;"
mysql -e "GRANT ALL ON nutrition.* TO 'laraveluser'@'localhost' IDENTIFIED BY 'password';"
mysql -e "FLUSH PRIVILEGES;"

# Import existing data
mysql -u laraveluser -p database_name < nutrition.sql

# Configure Laravel access to Database 
# /var/www/nutrition/.env
# DB_DATABASE=nutrition
# DB_USERNAME=laraveluser
# DB_PASSWORD=password

# Configure NGINX to serve the website
sudo chown -R www-data:www-data /var/www/nutrition/storage
sudo chown -R www-data:www-data /var/www/nutrition/bootstrap/cache
sudo cp nginx.nutrition.cfg /etc/nginx/sites-available/nutrition
sudo ln -s /etc/nginx/sites-available/nutrition /etc/nginx/sites-enabled/
sudo service nginx restart
sudo service php7.2-fpm restart

# Docs:
# https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-lemp-on-ubuntu-18-04#step-5-%E2%80%94-setting-up-nginx
# https://stackoverflow.com/questions/51158830/nginx-connect-to-unix-var-run-php7-2-fpm-sock-failed-2-no-such-file-or-dir
# https://linuxize.com/post/how-to-install-laravel-on-ubuntu-18-04/
