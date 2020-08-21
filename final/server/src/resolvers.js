const { paginateResults } = require('./utils');


module.exports = {

  ZoneInt: {
    __resolveType(zoneInt, context, info){
      if(zoneInt.propA){
        return 'ZoneA';
      }
      if(zoneInt.propB){
        return 'ZoneB';
      }
      return null;
    },
  },
  Query: {
    zoneSearch: async (_, {name, dictionary},{dataSources})  =>
      dataSources.zoneAPI.zoneData(name, dictionary),
  },
  // Mutation: {
  //   bookTrips: async (_, { launchIds }, { dataSources }) => {
  //     const results = await dataSources.userAPI.bookTrips({ launchIds });
  //     const launches = await dataSources.launchAPI.getLaunchesByIds({
  //       launchIds,
  //     });
  //
  //     return {
  //       success: results && results.length === launchIds.length,
  //       message:
  //         results.length === launchIds.length
  //           ? 'trips booked successfully'
  //           : `the following launches couldn't be booked: ${launchIds.filter(
  //               id => !results.includes(id),
  //             )}`,
  //       launches,
  //     };
  //   },
  //   cancelTrip: async (_, { launchId }, { dataSources }) => {
  //     const result = dataSources.userAPI.cancelTrip({ launchId });
  //
  //     if (!result)
  //       return {
  //         success: false,
  //         message: 'failed to cancel trip',
  //       };
  //
  //     const launch = await dataSources.launchAPI.getLaunchById({ launchId });
  //     return {
  //       success: true,
  //       message: 'trip cancelled',
  //       launches: [launch],
  //     };
  //   },
  //   login: async (_, { email }, { dataSources }) => {
  //     const user = await dataSources.userAPI.findOrCreateUser({ email });
  //     if (user) {
  //       user.token = new Buffer(email).toString('base64');
  //       return user;
  //     }
  //   },
  //   uploadProfileImage: async(_, { file }, { dataSources }) =>
  //     dataSources.userAPI.uploadProfileImage({ file }),
  // },
};
