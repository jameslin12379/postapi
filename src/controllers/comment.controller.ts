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
import {comment} from '../models';
import {CommentRepository} from '../repositories';

export class CommentController {
  constructor(
    @repository(CommentRepository)
    public commentRepository : CommentRepository,
  ) {}
/*
  @post('/comments', {
    responses: {
      '200': {
        description: 'Comment model instance',
        content: {'application/json': {schema: {'x-ts-type': Comment}}},
      },
    },
  })
  async create(@requestBody() comment: Comment): Promise<Comment> {
    return await this.commentRepository.create(comment);
  }
*/
  @get('/comments/count', {
    responses: {
      '200': {
        description: 'Comment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(comment)) where?: Where,
  ): Promise<Count> {
    return await this.commentRepository.count(where);
  }

  @get('/comments', {
    responses: {
      '200': {
        description: 'Array of Comment model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': comment}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(comment)) filter?: Filter,
  ): Promise<comment[]> {
    return await this.commentRepository.find(filter);
  }
/*
  @patch('/comments', {
    responses: {
      '200': {
        description: 'Comment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() comment: Comment,
    @param.query.object('where', getWhereSchemaFor(Comment)) where?: Where,
  ): Promise<Count> {
    return await this.commentRepository.updateAll(comment, where);
  }
*/
  @get('/comments/{id}', {
    responses: {
      '200': {
        description: 'Comment model instance',
        content: {'application/json': {schema: {'x-ts-type': comment}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<comment> {
    return await this.commentRepository.findById(id);
  }
/*
  @patch('/comments/{id}', {
    responses: {
      '204': {
        description: 'Comment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() comment: Comment,
  ): Promise<void> {
    await this.commentRepository.updateById(id, comment);
  }

  @put('/comments/{id}', {
    responses: {
      '204': {
        description: 'Comment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() comment: Comment,
  ): Promise<void> {
    await this.commentRepository.replaceById(id, comment);
  }

  @del('/comments/{id}', {
    responses: {
      '204': {
        description: 'Comment DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.commentRepository.deleteById(id);
  }
*/
}
