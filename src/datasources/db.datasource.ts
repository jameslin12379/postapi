import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
    "host": process.env.DB_HOSTNAME,
    "user": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "port": process.env.DB_PORT,
    "database": process.env.DB_NAME,
    "name": process.env.DB_INAME,
    "connector": process.env.DB_CONNECTOR,
    "url": ""
}

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

