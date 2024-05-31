FROM ubuntu:22.04 as setup

RUN apt update \
    && apt upgrade -y \
    && apt install -y libpcre3 libpcre3-dev zlib1g zlib1g-dev openssl libssl-dev wget git gcc make libbrotli-dev

WORKDIR /app

RUN wget https://nginx.org/download/nginx-1.25.5.tar.gz && tar -zxf nginx-1.25.5.tar.gz
RUN git clone --recurse-submodules -j8 https://github.com/google/ngx_brotli
RUN cd nginx-1.25.5 && ./configure --with-compat --add-dynamic-module=../ngx_brotli \
    && make modules

FROM nginx:1.25.5

COPY --from=setup /app/nginx-1.25.5/objs/ngx_http_brotli_static_module.so /etc/nginx/modules/
COPY --from=setup /app/nginx-1.25.5/objs/ngx_http_brotli_filter_module.so /etc/nginx/modules/

RUN echo "load_module modules/ngx_http_brotli_filter_module.so;\nload_module modules/ngx_http_brotli_static_module.so;\n$(cat /etc/nginx/nginx.conf)" > /etc/nginx/nginx.conf

COPY nginx-conf/default.conf  /etc/nginx/conf.d/default.conf
COPY nginx-conf/proxy.conf    /etc/nginx/conf.d/proxy.conf 
COPY nginx-conf/nginx.conf    /etc/nginx/nginx.conf 

COPY dist/  /usr/share/nginx/html

EXPOSE 80
