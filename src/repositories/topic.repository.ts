import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {topic} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TopicRepository extends DefaultCrudRepository<
  topic,
  typeof topic.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(topic, dataSource);
  }
}
