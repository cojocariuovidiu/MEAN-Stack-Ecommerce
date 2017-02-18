@echo off
set "CURRENT_DIR=%cd%"
set "CATALINA_HOME=%CURRENT_DIR%"
START startMongodb.lnk
START npm start
cd dev/
START npm start

:END
exit