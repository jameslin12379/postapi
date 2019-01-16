import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {post} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostRepository extends DefaultCrudRepository<
  post,
  typeof post.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(post, dataSource);
  }
}
