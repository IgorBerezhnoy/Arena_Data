import { Model, createServer } from 'miragejs'

import { data } from './bd/bd.ts'

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema: any) => {
        return schema.users.all()
      })
    },

    seeds(server) {
      // @ts-ignore
      server.create('user', { users: data })
    },
  })
}
