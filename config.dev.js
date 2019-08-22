import { declareRuntimeEnv } from 'resolve-scripts';

const devConfig = {
  target: 'local',
  port: declareRuntimeEnv('PORT', '3000'),
  polyfills: ['@babel/polyfill'],
  mode: 'development',
  redux: {
    enhancers: ['client/enhancers/redux-devtools.js']
  },
  readModelConnectors: {
    default: {
      module: 'resolve-readmodel-mysql',
      options: {
        host: declareRuntimeEnv('RESOLVE_READMODEL_SQL_HOST'),
        database: declareRuntimeEnv('RESOLVE_READMODEL_SQL_DATABASE'),
        user: declareRuntimeEnv('RESOLVE_READMODEL_SQL_USER'),
        password: declareRuntimeEnv('RESOLVE_READMODEL_SQL_PASSWORD'),
        port: declareRuntimeEnv('RESOLVE_READMODEL_SQL_PORT')
      }
    }
  },
  storageAdapter: {
    module: 'resolve-storage-mysql',
    options: {
        host: declareRuntimeEnv('RESOLVE_EVENT_STORE_SQL_HOST'),
        database: declareRuntimeEnv('RESOLVE_EVENT_STORE_SQL_DATABASE'),
        tableName: declareRuntimeEnv('RESOLVE_EVENT_STORE_TABLE'),
        user: declareRuntimeEnv('RESOLVE_EVENT_STORE_SQL_USER'),
        password: declareRuntimeEnv('RESOLVE_EVENT_STORE_SQL_PASSWORD'),
        port: declareRuntimeEnv('RESOLVE_EVENT_STORE_SQL_PORT')
    }
  },
  eventBroker: {
    databaseFile: 'data/local-bus-broker.db'
  }
}

export default devConfig
