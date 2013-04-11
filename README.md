sql-chain
=========

A simplistick chainable SQL creator

The idea is to have a library that generates unflavoured SQL, by letting you chain methods together like so:

```Javascript
select('fldA','fldB',...,'fldN').from('tbl').where('fldA="FOO"')
```

The idea is not new at all, it has been done already by williamwicks: https://github.com/williamwicks/sqlbits
The point here is to make it prettier, and not using the with statements(even though they are pretty handy I see).
