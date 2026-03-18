#!/bin/bash
(crontab -l | grep -v "/usr/bin/php /home/u280657402/domains/greenfix.in/public_html/home/artisan email:subscription-time-end-mail") | crontab -
(crontab -l; echo "0 0 * * * /usr/bin/php /home/u280657402/domains/greenfix.in/public_html/home/artisan email:subscription-time-end-mail") | crontab -
