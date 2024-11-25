export interface TRoutePolicy {
  path: string;
  accessLevel?: string;
}

export interface TSessionMiddlewareConstructor {
  protectedRoutes?: string[];
}

export class SessionMiddleware {}
