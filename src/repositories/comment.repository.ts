import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {comment} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommentRepository extends DefaultCrudRepository<
  comment,
  typeof comment.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(comment, dataSource);
  }
}
