#Comparison between Schema.org, SmartAPI and Hydra Concepts for Web API Description

| **Schema.org Concept**                           | **SmartAPI Concept**            | **Hydra Concept** | **Description** |
| :----------------------------------------------- | :------------------------------ | :---------------- | :-------------- |
|                                                  |                                 |                   |                 |
**Non-functional** |
| WebAPI                                           | \-                              | \-                | Schema.org has a pending WebAPI type to describe a Web API as a service           |
| CreativeWork                                     | OpenAPI Object                  | ApiDocumentation  | For schema.org, a web api can have multiple documentations, both machine readable and human readable. The distinction is made by the encoding format. A documentation is attached to a WebAPI instance with the documentation property. A SmartAPI documentation consists of various objects. A Hydra ApiDocumentation can be connected to any resource with apiDocumentation property.        |
| encodingFormat                                   | \-                              | \-                | Schema.org allows multiple encoding formats to be used with the documentation. This way an API publisher can create reference documentations for both machines (e.g. JSON-LD) and humans (e.g HTML, Markdown). The property takes a MIME type as value.              |
| name                                             | title                           | title             | Name or title of the API. Takes string values.             |
| description                                      | description                     | description       | Description of the API. Takes string values.          |
| termsOfService                                   | termsOfService                  | \-                | Schema.org can have string or URL values for this property, smartAPI only accepts URL            |
| author, contributor, accountablePerson, provider | contacts                        | \-                | Schema.org provides several properties for different kinds of roles of persons or organizations involved with the API. SmartAPI uses the x-role and x-id properties to identify contacts and their roles.        |
| license                                          | license                         | \-                | License of the described API. SmartAPI supports name and url properties. For the case schema.org, license is an instance of CreativeWork whose subject is identified with an IRI and has at least a name.         |
| version                                          | version                         | \-                | For smart API this means the version of the documentation. For schema.org actions, documentation is the interface of the API, therefore it is the version of both.                          |
|                                                  |                                 |                   |                 |
**Functional** |
| Action                                           | Operation Object                | Operation         | schema.org Action type allows the definition of high level operations and consists of HTTP method, target URL, request and response descriptions, as well as media types. SmartAPI does not annotate high-level operations semantically, only allows http methods          |
| urlTemplate                                      | path                            | Link, target      | The resource identifier.       |
| httpMethod                                       | http request methods            | method            | HTTP methods according to RFC 7231     |
| object                                           | requestBody, schema, parameters | Link, expects     | The properties for defining the request body         |
| result                                           | responses, schema               | returns           | The properties for defining the response body         |
| contentType                                      | media type                      | JSON-LD           | Consumed media type by the API. Hydra allows only JSON-LD    |
| encodingType                                     | media type                      | JSON-LD           | Response media type of the API. Hydra allows only JSON-LD   |

