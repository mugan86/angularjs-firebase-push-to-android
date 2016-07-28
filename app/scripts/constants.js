/**********************************************************************************************
Constant values files
----------------------------


***********************************************************************************************/
angular.module('angularApp')

.constant('LOCAL_PUSH_SERVER_URL_LOCALHOST', 'http://192.168.110.131/push/receive_data.php')
.constant('PRODUCTION_PUSH_SERVER_URL_LOCALHOST', 'http://push.260mb.net/push/receive_data.php')
.constant('WIKIPEDIA_MOBILE_WIKI_URL', 'https://en.m.wikipedia.org/wiki/')
.constant('BASKETBALL_REFERENCE', 'http://www.basketball-reference.com')
.constant('F1', {
                        main_url: 'http://ergast.com/api/f1/',
                        drivers: 'drivers.json',
                        circuits: 'circuits.json'
                    })
.constant('REST_COUNTRIES', {
                        main_url: 'http://restcountries.eu',
                        all: '/rest/v1/all'
                    })
.constant('MENDIKAT', 'http://www.mendikat.net/')
;