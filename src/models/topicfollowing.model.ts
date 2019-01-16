import {Entity, model, property} from '@loopback/repository';

@model()
export class topicfollowing extends Entity {
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
  following: number;

  @property({
    type: 'number',
    required: true,
  })
  followed: number;

  constructor(data?: Partial<topicfollowing>) {
    super(data);
  }
}
