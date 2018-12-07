| **Schema.org Concept**                           | **SmartAPI Concept**            | **Hydra Concept** | **Description** |
| :----------------------------------------------- | :------------------------------ | :---------------- | :-------------- |
|                                                  |                                 |                   |                 |
| WebAPI                                           | \-                              | \-                | Schema.org has a pending WebAPI type to describe a Web API as a service           |
| CreativeWork                                     | OpenAPI Object                  | ApiDocumentation  | For schema.org, a web api can have multiple documentations, both machine readable and human readable. The distinction is made by the encoding format. A documentation is attached to a WebAPI instance with the documentation property. A SmartAPI documentation consists of various objects. A Hydra ApiDocumentation can be connected to any resource with apiDocumentation property.        |
| encodingFormat                                   | \-                              | \-                | Schema.org allows multiple encoding formats to be used with the documentation. This way an API publisher can create reference documentations for both machines (e.g. JSON-LD) and humans (e.g HTML, Markdown). The property takes a MIME type as value.              |
| name                                             | title                           | title             | Name or title of the API. Takes string values.             |
| description                                      | description                     | description       | Description of the API. Takes string values.          |
| termsOfService                                   | termsOfService                  | \-                | Schema.org can have string or URL values for this property, smartAPI only accepts URL            |
| author, contributor, accountablePerson, provider | contacts                        | \-                | Schema.org provides several properties for different kinds of roles of persons or organizations involved with the API. SmartAPI uses the x-role and x-id properties to identify contacts and their roles.        |
| license                                          | license                         | \-                | Dlicense        |
| version                                          | version                         | \-                | Dversion        |
|                                                  |                                 |                   |                 |
| Action                                           | Operation Object                | Operation         | Daction         |
| urlTemplate                                      | path                            | Link, target      | DurlTemp        |
| httpMethod                                       | http request methods            | method            | DhttpMethod     |
| object                                           | requestBody, schema, parameters | Link, expects     | Dobject         |
| result                                           | responses, schema               | returns           | Dresult         |
| contentType                                      | media type                      | JSON-LD           | DcontentType    |
| encodingType                                     | media type                      | JSON-LD           | DencodingType   |

Comparison between Schema.org, SmartAPI and Hydra Concepts for Web API
description<span label="tab:comparison"></span>