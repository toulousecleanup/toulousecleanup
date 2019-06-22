# toulousecleanup

A simple frontend to display the level (latest measurement) of the ToulouseCleanUp garbage collector tank.
It is also possible to manage a mail list for alerts on tank level > 75%.

A demo of this frontend can be found live at:

https://toulousecleanup.github.io/toulousecleanup/

## How To Test

In your Linux machine, simply do:

git clone https://github.com/toulousecleanup/toulousecleanup.git;     # Login / PWD are the same that login/password for github.com (for toulousecleanup)
cd toulousecleanup/;
npm i;
ng build;
ng run;

## How to deploy some modifications

After you have edited a file, just commit/push it to master (Nothing new ^^).

Then, to deploy your latest code to github pages at https://toulousecleanup.github.io/toulousecleanup, do:

cd toulousecleanup/;
ng build;
ngh; # the remote is set in the ng build command (see package.json)

## The website explained

The page **MyData** allows you see the latest level for each Sigfox device of your network.
The page **Mail list** allows you to manage your Alerts recipients. An alert is trggered when a device has a level > 95 %.
The page **Contact** does not need explanations :)

## What about the backend ?

The backend for this website is running on http://toulousecleanup.pythonanywhere.com/
The source code is at: https://github.com/toulousecleanup/backend

Ask Alexis Eskenazi for the login / password.

## What about the Sigfox devices ?

The devices are managable on the SigFox backend: https://backend.sigfox.com/device/list
Ask Alexis Eskenazi for the login / password.

Devices source code is available at: https://github.com/toulousecleanup/sigfoxDevices
