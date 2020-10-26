FROM php:7.4-fpm

# Set working directory
WORKDIR /var/www/html

# Arguments defined in docker-compose.yml
ARG user=www-data
ARG uid=1000

# Install system dependencies
RUN apt-get update && apt-get install -y \
    sudo \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install composer
# COPY ./install_composer.sh .
# RUN chmod +x install_composer.sh
# RUN ./install_composer.sh

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user || echo "User already exists."
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

RUN usermod -aG sudo $user

# Init Laravel project
RUN composer create-project --prefer-dist laravel/laravel="6.*" nutrition

# Copy code with directory permissions
COPY --chown=${user}:www-data . /var/www/html/nutrition/
RUN chown -R ${user}:www-data /var/www/html

RUN cd /var/www/html/nutrition && php artisan --version

USER $user

# Start php-fpm server
CMD ["php-fpm"]
