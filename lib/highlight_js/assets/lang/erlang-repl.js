hljs.registerLanguage("erlang-repl",function(e){return{k:{built_in:"spawn spawn_link self",keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},c:[{cN:"meta",b:"^[0-9]+> ",r:10},e.C("%","$"),{cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0},e.ASM,e.QSM,{b:"\\?(::)?([A-Z]\\w*(::)?)+"},{b:"->"},{b:"ok"},{b:"!"},{b:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",r:0},{b:"[A-Z][a-zA-Z0-9_']*",r:0}]}});