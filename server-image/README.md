
## Deploy

pm2 delete server-image
pm2 start npm --name "server-image" -- start