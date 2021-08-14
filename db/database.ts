import { createConnection, Connection } from 'typeorm';

const conn = async () => {
    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 3306,
        username: 'Misael',
        password: 'Mecatronica@1',
        database: 'pos',
        entities: ['User']
    });

    return connection;
}

export default conn;