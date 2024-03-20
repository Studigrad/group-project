FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y wget curl unzip
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g npm@latest
RUN npm install -g playwright
RUN playwright install-deps
RUN playwright install
USER jenkins
