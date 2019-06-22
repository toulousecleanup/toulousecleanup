# toulousecleanup

A simple frontend to display the level (latest measurement) of the ToulouseCleanUp garbage collector tank.
It is also possible to manage a mail list for alerts on tank level > 75%.

A demo of this frontend can be found live at:

https://toulousecleanup.github.io/toulousecleanup/

## How To Test
In your Linux machine, simply do:

git clone https://github.com/toulousecleanup/toulousecleanup.git;     # Login / PWD can be asked to Alexis Eskenazi
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

