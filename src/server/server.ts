import { Model, createServer } from 'miragejs'

import { getDataFromBD } from './db'

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema, request) => {
        const page = Number(request.queryParams.page) || 1
        const limit = 1
        const offset = (page - 1) * limit

        // @ts-ignore
        const users = schema.users.all().slice(offset, offset + limit)

        return {
          meta: {
            page,
            total: users.length,
            // @ts-ignore
            totalPages: Math.ceil(schema.users.all().length / limit),
          },
          users: users.models,
        }
      })
    },

    seeds(server) {
      for (let i = 0; i < 100; i++) {
        // @ts-ignore
        server.create('user', getDataFromBD())
      }
    },
  })
}
