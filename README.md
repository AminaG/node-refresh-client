New NPM that I just published. `refresh-client`
Browser caching of static files is big headache. You want to release a new version, but your users still get files from the older version.
This module will solve it by  redirecting the users to new virtual sub-folder every time a version is updated. When you want to release anew version, all you have to do is to change the version number.

Install:

  npm i refresh-client

Here is an example:

    // Specific Version
    app.use('/frontend',require('refresh-client')({version:5}));

    // Random Version (default)
    app.use('/frontend',require('refresh-client')({version:'random'}));

    app.use('/frontend',express.static('/'))

When using random: Every time you reload the server the client will getthe  new version.

Pull requests are welcome :)

When users for example go to your website:

  http://example.com/

They will be redirect to:

  http://example.com/v5

This way you prevent the browser from caching the files when moving between versions