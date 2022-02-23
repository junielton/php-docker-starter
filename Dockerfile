# install PHP + apache
FROM php:7.4-apache

# apache2 rewrite
RUN a2enmod rewrite
RUN service apache2 restart

RUN apt-get update && apt-get -y install curl git npm nodejs tar file xz-utils build-essential libzip-dev zip && docker-php-ext-install zip 

RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install yarn
RUN npm install -g yarn

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . /var/www/html

# WORKDIR /var/www/html/wp-content/themes/vstart

# CMD ["yarn", "yarn watch"]

EXPOSE 3000
EXPOSE 3001
