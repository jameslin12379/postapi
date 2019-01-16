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
import {upvote} from '../models';
import {UpvoteRepository} from '../repositories';

export class UpvoteController {
  constructor(
    @repository(UpvoteRepository)
    public upvoteRepository : UpvoteRepository,
  ) {}
/*
  @post('/upvotes', {
    responses: {
      '200': {
        description: 'Upvote model instance',
        content: {'application/json': {schema: {'x-ts-type': Upvote}}},
      },
    },
  })
  async create(@requestBody() upvote: Upvote): Promise<Upvote> {
    return await this.upvoteRepository.create(upvote);
  }
*/
  @get('/upvotes/count', {
    responses: {
      '200': {
        description: 'Upvote model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(upvote)) where?: Where,
  ): Promise<Count> {
    return await this.upvoteRepository.count(where);
  }

  @get('/upvotes', {
    responses: {
      '200': {
        description: 'Array of Upvote model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': upvote}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(upvote)) filter?: Filter,
  ): Promise<upvote[]> {
    return await this.upvoteRepository.find(filter);
  }
/*
  @patch('/upvotes', {
    responses: {
      '200': {
        description: 'Upvote PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() upvote: Upvote,
    @param.query.object('where', getWhereSchemaFor(Upvote)) where?: Where,
  ): Promise<Count> {
    return await this.upvoteRepository.updateAll(upvote, where);
  }
*/
  @get('/upvotes/{id}', {
    responses: {
      '200': {
        description: 'Upvote model instance',
        content: {'application/json': {schema: {'x-ts-type': upvote}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<upvote> {
    return await this.upvoteRepository.findById(id);
  }
/*
  @patch('/upvotes/{id}', {
    responses: {
      '204': {
        description: 'Upvote PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() upvote: Upvote,
  ): Promise<void> {
    await this.upvoteRepository.updateById(id, upvote);
  }

  @put('/upvotes/{id}', {
    responses: {
      '204': {
        description: 'Upvote PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() upvote: Upvote,
  ): Promise<void> {
    await this.upvoteRepository.replaceById(id, upvote);
  }

  @del('/upvotes/{id}', {
    responses: {
      '204': {
        description: 'Upvote DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.upvoteRepository.deleteById(id);
  }
*/
}
