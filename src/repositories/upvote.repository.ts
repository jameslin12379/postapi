import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {upvote} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UpvoteRepository extends DefaultCrudRepository<
  upvote,
  typeof upvote.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(upvote, dataSource);
  }
}
