import knex from 'knex';
import path from 'path'; //Facilita caminhar nos diretorios
                         //da aplicação

const db = knex({
    client: 'sqlite3',
    connection: {
        //Informa aonde vai ficar armazenado o BD
        //Nesse caso ele irá criar um arquivo database.sqlite
        //na pasta database!
        filename:  path.resolve(__dirname, 'database.sqlite')
    },
    //Responsavel para utilizar nulo se ele não souber
    //o tipo de valor no campo do BD
    useNullAsDefault: true,
});

export default db;