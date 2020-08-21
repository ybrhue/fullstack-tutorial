const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        zoneSearch(
            name: String!,
            dictionary: [DictionaryInput],
        ): ZoneInt
    }

    interface ZoneInt{
        name:String!
    }
    
    type ZoneA implements ZoneInt{
        name:String!
        propA:String!
    }
    type ZoneB implements ZoneInt{
        name:String!
        propB:String!
    }
    
    input DictionaryInput{
        key: String!
        value: ZoneInput!
    }    
    
    input ZoneInput{
        name:String!
        property:String!
    }
    
#    input ZoneBInput{
#        name:String!
#        propB:String!
#    }
    
    
    #    type Mutation {
    # if false, signup failed -- check errors
    #        bookTrips(launchIds: [ID]!): TripUpdateResponse!
    #
    #        # if false, cancellation failed -- check errors
    #        cancelTrip(launchId: ID!): TripUpdateResponse!
    #
    #        login(email: String): User!
    #
    #        # for use with the iOS tutorial
    #        uploadProfileImage(file: Upload!): User        
    #    }

`;

module.exports = typeDefs;
