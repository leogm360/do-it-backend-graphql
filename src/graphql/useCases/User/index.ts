import * as userResolvers from './resolvers';

export default [...Object.values(userResolvers)];

export * from './args';
export * from './enums';
export * from './inputs';
export * from './models';
export * from './resolvers';
