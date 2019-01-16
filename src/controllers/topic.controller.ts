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
import {topic} from '../models';
import {TopicRepository} from '../repositories';

export class TopicController {
  constructor(
    @repository(TopicRepository)
    public topicRepository : TopicRepository,
  ) {}
/*
  @post('/topics', {
    responses: {
      '200': {
        description: 'Topic model instance',
        content: {'application/json': {schema: {'x-ts-type': Topic}}},
      },
    },
  })
  async create(@requestBody() topic: Topic): Promise<Topic> {
    return await this.topicRepository.create(topic);
  }
*/
  @get('/topics/count', {
    responses: {
      '200': {
        description: 'Topic model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(topic)) where?: Where,
  ): Promise<Count> {
    return await this.topicRepository.count(where);
  }

  @get('/topics', {
    responses: {
      '200': {
        description: 'Array of Topic model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': topic}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(topic)) filter?: Filter,
  ): Promise<topic[]> {
    return await this.topicRepository.find(filter);
  }
/*
  @patch('/topics', {
    responses: {
      '200': {
        description: 'Topic PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() topic: Topic,
    @param.query.object('where', getWhereSchemaFor(Topic)) where?: Where,
  ): Promise<Count> {
    return await this.topicRepository.updateAll(topic, where);
  }
*/
  @get('/topics/{id}', {
    responses: {
      '200': {
        description: 'Topic model instance',
        content: {'application/json': {schema: {'x-ts-type': topic}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<topic> {
    return await this.topicRepository.findById(id);
  }
/*
  @patch('/topics/{id}', {
    responses: {
      '204': {
        description: 'Topic PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() topic: Topic,
  ): Promise<void> {
    await this.topicRepository.updateById(id, topic);
  }

  @put('/topics/{id}', {
    responses: {
      '204': {
        description: 'Topic PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() topic: Topic,
  ): Promise<void> {
    await this.topicRepository.replaceById(id, topic);
  }

  @del('/topics/{id}', {
    responses: {
      '204': {
        description: 'Topic DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.topicRepository.deleteById(id);
  }
*/
}
