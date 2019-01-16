import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {user} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  user,
  typeof user.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(user, dataSource);
  }
}
