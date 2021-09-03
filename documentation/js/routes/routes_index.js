var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"HomeComponent","canActivate":["AuthGuard"]},{"path":"admin","component":"AdminComponent","canActivate":["AuthGuard"],"data":{"roles":["Admin"]}},{"path":"user","component":"UserComponent","canActivate":["AuthGuard"],"data":{"roles":["User"]}},{"path":"login","component":"LoginComponent"},{"path":"**","redirectTo":""}],"kind":"module"}]}