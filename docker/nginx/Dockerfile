FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /etc/entrypoint.sh
RUN chmod +x /etc/entrypoint.sh
RUN apk add --no-cache certbot
EXPOSE 80 443
ENTRYPOINT ["/etc/entrypoint.sh"]