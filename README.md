New NPM that I just published. `refresh-client`
Browser caching of static files is big headache. You want to release a new version, but your users still get files from the older version.
This module will solve it by  redirecting the users to new virtual sub-folder every time a version is updated. When you want to release anew version, all you have to do is to change the version number.

Here is an example:

    // Specific Version
    app.use('/frontend',require('./index.js')({version:5}));

    // Random Version (default)
    app.use('/frontend',require('./index.js')({version:'random'}));

    app.use('/frontend',express.static('/'))

When using random: Every time you reload the server the client will getthe  new version.

Pull requests are welcome :)