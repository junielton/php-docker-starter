# install PHP + apache
FROM php:7.4-apache

RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && apt-get -y install curl git npm nodejs 
RUN npm install -g yarn

WORKDIR /var/www/html

COPY . /var/www/html

# CMD ["yarn", "run", "watch"]

EXPOSE 3000
EXPOSE 3001
