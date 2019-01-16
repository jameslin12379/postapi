import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {topicfollowing} from '../models';
import {TopicfollowingRepository} from '../repositories';

export class TopicfollowingController {
  constructor(
    @repository(TopicfollowingRepository)
    public topicfollowingRepository : TopicfollowingRepository,
  ) {}
/*
  @post('/topicfollowings', {
    responses: {
      '200': {
        description: 'Topicfollowing model instance',
        content: {'application/json': {schema: {'x-ts-type': Topicfollowing}}},
      },
    },
  })
  async create(@requestBody() topicfollowing: Topicfollowing): Promise<Topicfollowing> {
    return await this.topicfollowingRepository.create(topicfollowing);
  }
*/
  @get('/topicfollowings/count', {
    responses: {
      '200': {
        description: 'Topicfollowing model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(topicfollowing)) where?: Where,
  ): Promise<Count> {
    return await this.topicfollowingRepository.count(where);
  }

  @get('/topicfollowings', {
    responses: {
      '200': {
        description: 'Array of Topicfollowing model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': topicfollowing}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(topicfollowing)) filter?: Filter,
  ): Promise<topicfollowing[]> {
    return await this.topicfollowingRepository.find(filter);
  }
/*
  @patch('/topicfollowings', {
    responses: {
      '200': {
        description: 'Topicfollowing PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() topicfollowing: Topicfollowing,
    @param.query.object('where', getWhereSchemaFor(Topicfollowing)) where?: Where,
  ): Promise<Count> {
    return await this.topicfollowingRepository.updateAll(topicfollowing, where);
  }
*/
  @get('/topicfollowings/{id}', {
    responses: {
      '200': {
        description: 'Topicfollowing model instance',
        content: {'application/json': {schema: {'x-ts-type': topicfollowing}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<topicfollowing> {
    return await this.topicfollowingRepository.findById(id);
  }
/*
  @patch('/topicfollowings/{id}', {
    responses: {
      '204': {
        description: 'Topicfollowing PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() topicfollowing: Topicfollowing,
  ): Promise<void> {
    await this.topicfollowingRepository.updateById(id, topicfollowing);
  }

  @put('/topicfollowings/{id}', {
    responses: {
      '204': {
        description: 'Topicfollowing PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() topicfollowing: Topicfollowing,
  ): Promise<void> {
    await this.topicfollowingRepository.replaceById(id, topicfollowing);
  }

  @del('/topicfollowings/{id}', {
    responses: {
      '204': {
        description: 'Topicfollowing DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.topicfollowingRepository.deleteById(id);
  }
*/
}
