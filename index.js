
var stmtTypes = { select : 's', insert: 'insert' };

function Statement(){
    if(!(this instanceof Statement)) return new Statement();

    this.expr = "";
    
    this.toString = function () {
        return this.expr;
    };

    this.select = function () {
        
        this.expr = "SELECT ";

        var fnArgs = arguments;
        Object.keys(arguments).forEach(function (val) {
            this.expr += fnArgs[val] + ", ";
        });

        //Remove last 2 chars

        return this;
    };
}

exports.select = function(){
    var res = new Statement();
    
    return res.select.bind(res, arguments)();
}

function from(stmt, tbl){
    stmt.tables.push(tbl);

    return { 
        join : join.bind(this, stmt), 
        from : from.bind(this, stmt),
        stmt : stmt 
    };
}

function join(stmt, tbl) {
    return {
        on: function (onExpr) {
            stmt.joins.push({ tbl: tbl, on: onExpr });

            return {
                join: join.bind(this, stmt),
                where: where.bind(this, stmt)
            }
        }
    };
}

function where(stmt) {

}

exports.insert = function(){

}
