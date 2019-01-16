import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {topicfollowing} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TopicfollowingRepository extends DefaultCrudRepository<
  topicfollowing,
  typeof topicfollowing.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(topicfollowing, dataSource);
  }
}
