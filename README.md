# Local development

1. clone repo
2. Loopback is a global depencency so we need to run `npm i -g loopback`. This
gives us access to the `slc` command. Check the docs for more details.
3. `cd [repo-dir]`
4. Install the local dependencies `npm install`
5. Make sure that you have installed postgres and know your credentials, if you
have not installed it check this out
6. For local development, we need to create a configuration file with the
credentials for the datasources. `cp server/datasources.sample.json
server/datasources.development.json`. Change the values to the appropriate
details. _NOTE:_ In this case, 'development' is your NODE_ENV (`echo $NODE_ENV`)
7. `node .` site will be available at http://0.0.0.0:3000/ .


## DB Installation

_Assuming that you are on OSX and that you have brew installed_

1. brew update
2. brew install postgres
3. read the running instructions. If you would like to launch postgres on demand
just run `postgres -D /usr/local/var/postgres`.
4. create a database with your username ``createdb `whoami```, you can always
verify your username with ``echo `whoami```.
5. login to postgres: `psql`.
6. lets set up your password. In the new shell type `\password [your username]`.
 Follow the prompt and you should be set.
