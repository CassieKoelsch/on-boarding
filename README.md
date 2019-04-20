# On Boarding

This app was built with React and will send an email with the on-boarding information.  It's purpose is to help new empolyees to select the type of computer they would like as well as give some information about the company.

[DEMO](https://on-boarding-98207.firebaseapp.com/)

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

---

## Install

    $ git clone https://github.com/CassieKoelsch/On-Boarding.git
    $ cd On-Boarding
    $ npm install

## Start & watch

    $ npm run start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull
