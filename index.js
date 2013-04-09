
var stmtTypes = { select : 's', insert: 'insert' };

function Statement(){
    if(!(this instanceof Statement)) return new Statement();

    this.type = null;

    this.fields = [];
    this.tables = [];

    this.joins = [];

    this.toString = function(){
        if(this.type == stmtTypes.select){
            var res = "SELECT " + this.fields[0];

            for(var i = 1; i < this.fields.length; i++)
                res += ", "+this.fields[i];

            res += " FROM "+ this.tables[0];

            for(var i = 1; i < this.tables.length; i++)
                res += ", "+this.tables[i];

            return res;
        }
        return "SELECT 'NOT SUPPORTED';";
    }
}

exports.select = function(){
    var res = new Statement();
    res.type = stmtTypes.select;

    var fnArgs = arguments;
    Object.keys(arguments).forEach(function(val){
        res.fields.push(fnArgs[val]); //Hack
    });

    return {from : from.bind(this, res)};
}

function from(stmt, tbl){
    stmt.tables.push(tbl);

    return { 
        join : join.bind(this, stmt), 
        from : from.bind(this, stmt),
        stmt : stmt 
    };
}

function join(stmt, tbl){}

exports.insert = function(){

}
