FROM nginx:1.25.5

COPY configs/default.conf  /etc/nginx/conf.d/default.conf
COPY configs/proxy.conf    /etc/nginx/conf.d/proxy.conf 
COPY configs/nginx.conf    /etc/nginx/nginx.conf 

COPY dist/  /usr/share/nginx/html

EXPOSE 80
