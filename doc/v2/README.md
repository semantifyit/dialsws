# Schema.org Actions Web API Description Vocabulary with SHACL support

The aim of this documentation to draw a roadmap for implementing SHACL within action definitions, in order to represent complex constraints.

---

## Roadmap

- [ ]  extend existing editor with external vocabulary support

- [ ] add a way to represent shacl shapes that apply constraints on a specific action definition (ActiveActionStatus).

- [ ] think about the implications of the new changes towards dialogue generation.



Below there is an example for the annotation (work in progress, to be discussed on monday)

```json
{
    "@context": "http://schema.org/",
    "@type": "SearchAction",
    "name": "Search connection",
    "sh:shapesGraph": "https://actions.semantify.it/vao/shapes/123",
    "object": {
        "@type": "Trip",
        "itinerary": {
            "sh:shapesGraph":"https://actions.semantify.it/vao/shapes/123#Itinerary",
            "@type": "vao:Itinerary",
            "vao:start": {
                "@type": "Place",
                "url-input": "required"
            },
            "vao:end": {
                "@type": "Place",
                "url-input": "required",
                "modality-input": {"@id": "Vehicle", "sh:shapesGraph": "https://actions.semantify.it/vao/shapes/123#Modality" }
            },
            "vao:station":
            {
                "@type":"Place",
                "url-input": "required",
                "modality-input": "required"
            }
            
        }
        
    }
}
```
