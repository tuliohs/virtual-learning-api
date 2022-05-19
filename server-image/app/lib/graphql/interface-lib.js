const graphql = require("graphql");
const crud = require('./crud')

const mongoose = require('mongoose')
const mongooseToGraphql = require('mongoose-schema-to-graphql')

function MongooseSechemaToGraphqlType(Collection, operation, newInstanceSchema) {

    let config = {
        description: 'Automatic Generate',
        schema: newInstanceSchema,
    }

    switch (operation) {
        case 'update':
            config = {
                ...config,
                class: 'GraphQLInputObjectType',
                name: Collection.collection.collectionName + 'UpdateInput',
                exclude: ['_id'],
                extend: {
                    id: { type: graphql.GraphQLString },
                }
            }
            break;
        case 'select':
            config = {
                ...config,
                class: 'GraphQLObjectType',
                name: Collection.collection.collectionName,
                exclude: ['_id'],
                extend: {
                    id: { type: graphql.GraphQLString },
                }
            }
            break;
    }
    let model = mongooseToGraphql(config)
    model.fields = model._fields()
    return model
}

module.exports = (Collection,   params = { modelField: null, reqField: null }) => {

    //instancia da model que será convertida
    const newInstanceSchema = new mongoose.Schema(Collection.schema.obj);
    return {
        //para consultas
        queries: {
            [`get${Collection.collection.collectionName}`]: {
                type: new graphql.GraphQLList(MongooseSechemaToGraphqlType(Collection, 'select', newInstanceSchema)),
                args: {
                    offset: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
                    },
                    searchText: {
                        type: graphql.GraphQLString,
                    },
                },
                resolve: (root, { offset, searchText }, context) =>
                    crud.search(Collection, offset, context, searchText,params),
            }
        },
        //para mudanças no banco
        mutations: {
            [`update${Collection.collection.collectionName}`]: {
                type: MongooseSechemaToGraphqlType(Collection, 'select', newInstanceSchema),
                args: {
                    mediaData: {
                        type: MongooseSechemaToGraphqlType(Collection, 'update', newInstanceSchema),
                    },
                },
                resolve: async (root, { mediaData }, context) =>
                    crud.update(Collection, null, mediaData, context),
            },
            [`create${Collection.collection.collectionName}`]: {
                type: MongooseSechemaToGraphqlType(Collection, 'select', newInstanceSchema),
                args: {
                    mediaData: {
                        type: MongooseSechemaToGraphqlType(Collection, 'update', newInstanceSchema),
                    },
                },
                resolve: async (root, { mediaData }, context) =>
                    crud.create(Collection, null, mediaData, context),
            },
        }
    }
}


