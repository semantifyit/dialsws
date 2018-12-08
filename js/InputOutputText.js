function validateInputOutputText($this) {
    TermFactory.registerNamespace("schema", "http://schema.org/");
    var results = [];
    
    if (!$this.toString().endswith("-input") && !$this.toString().endswith("-output"))
        return results;
    
    var s = TermFactory.blankNode();
    var p = $this;
	var o = $data.find(s, p, null);
	for(var t = o.next(); o; t = o.next()) {
        var object = t.object;
        
        if (isPVSInstance(object))
            continue;

        var pvsProps = object.getLiteralLexicalForm().split(" ");
        
        for (var i = 0; i<pvsProps.length; i++)
        {
            if (pvsProps[i] == "required" || pvsProps[i] == "optional")
                continue;
            
            pvsPropKV = pvsProps[i].split("=");
            
            if (pvsPropKV[0] == "max" || pvsPropKV[0] == "min" || pvsPropKV[0] == "maxlength" || pvsPropKV[0] == "step" || pvsPropKV[0] == "minlength" )
            {
                if (!(isNaN(parseFloat(pvsPropKV[1])) && isFinite(pvsPropKV[1])))
                {
                    results.push({
                        value : object
                    });
                 }
            }else if (pvsPropKV[0] == "multiple" || pvsPropKV[0] == "readonly")
            {
                if (! (pvsPropKV[1] == "true" || pvsPropKV[1] == "false"))
                {
                    results.push({
                        value : object
                    });
                 }
            }else if (!(pvsPropKV[0] == "value" || pvsPropKV[0] == "name" || pvsPropKV[0] == "pattern"))
            {
                    results.push({
                        value : object
                    });
            }
            else
            {
                results.push({
                    value : object
                });
            }
            
        }

	}
	return results;
}

function isPVSInstance (object)
{
    var p = TermFactory.namedNode("rdf:type");
    var pvs = TermFactory.namedNode("schema:PropertyValueSpecification");
    var list = $data.find(object, p, pvs);

    return list.length > 0;
}

