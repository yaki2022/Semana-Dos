import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Persona} from './persona.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_producto: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'number',
    required: true,
  })
  Estado: number;

  @property({
    type: 'string',
    required: true,
  })
  id_persona: string;

  @belongsTo(() => Persona)
  personaId: string;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
