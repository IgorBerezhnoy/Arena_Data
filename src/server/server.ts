import { Model, createServer } from 'miragejs'

import { getDataFromBD } from './bd/bd.ts'

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
      for (let i = 0; i < 10; i++) {
        // @ts-ignore
        server.create('user', getDataFromBD())
      }
    },
  })
}

// import { Model, createServer } from 'miragejs'
//
// import { getDataFromBD } from './bd/bd.ts'
//
// export function makeServer({ environment = 'test' } = {}) {
//   return createServer({
//     environment,
//
//     models: {
//       user: Model,
//     },
//
//     routes() {
//       this.namespace = 'api'
//
//       this.get('/users', (schema: any) => {
//         return schema.users.all()
//       })
//     },
//
//     seeds(server) {
//       // @ts-ignore
//       server.create('user', { users: getDataFromBD() })
//     },
//   })
// }
