import {Entity, model, property} from '@loopback/repository';

@model()
export class upvote extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
    required: true,
  })
  datecreated: string;

  @property({
    type: 'date',
    required: true,
  })
  dateedited: string;

  @property({
    type: 'number',
    required: true,
  })
  upvote: number;

  @property({
    type: 'number',
    required: true,
  })
  upvoted: number;

  constructor(data?: Partial<upvote>) {
    super(data);
  }
}
