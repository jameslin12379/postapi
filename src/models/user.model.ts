import {Entity, model, property} from '@loopback/repository';

@model()
export class user extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  imageurl: string;

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

  constructor(data?: Partial<user>) {
    super(data);
  }
}
