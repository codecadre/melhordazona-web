FROM clojure:lein-2.9.1

RUN apt update
RUN apt install --no-install-recommends -yy curl unzip build-essential zlib1g-dev

WORKDIR "/opt"

RUN curl -sLO https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-20.3.0/graalvm-ce-java11-linux-amd64-20.3.0.tar.gz
RUN tar -xzf graalvm-ce-java11-linux-amd64-20.3.0.tar.gz

RUN apt install -yy apache2

RUN a2enmod rewrite
RUN a2enmod cgi
RUN a2enmod headers

COPY ./conf/apache2.conf /etc/apache2/apache2.conf
COPY ./conf/conf-available/serve-cgi-bin.conf /etc/apache2/conf-available/serve-cgi-bin.conf
COPY ./conf/mods-available/mime.conf /etc/apache2/mods-available/mime.conf
COPY ./conf/sites-available /etc/apache2/sites-available

WORKDIR /

RUN curl -s https://raw.githubusercontent.com/babashka/babashka/master/install  > ./install \
    && chmod +x ./install \
    && ./install --dir /usr/home/codecan/bin/ #--version "1.0.169"

# repl with history
RUN apt install rlwrap

# load-pods writes and reads from the env var bellow
ENV BABASHKA_PODS_DIR /usr/home/codecan/.babashka/pods
RUN /usr/home/codecan/bin/bb "(babashka.pods/load-pod 'tzzh/mail \"0.0.2\")"
RUN chown -R www-data /usr/home/codecan/.babashka/pods

EXPOSE 80
VOLUME /var/www/public_html
WORKDIR /var/www/public_html
CMD /usr/sbin/apache2ctl -D FOREGROUND
