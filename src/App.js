import logo from './logo.svg';

import { Graphviz } from 'graphviz-react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [diagraph, setDiagraph] = useState('')
  useEffect(() => {
    let arvDia = toDot(rootArv, "");
    console.log("Teste || ", arvDia)
    setDiagraph("graph {\n"+arvDia+" \n}")
  }, [])

  function toDot(node, father) {
    let root="";
    let valorBase;
    if(node.valorClasseFolha){
      root = '"'+node.valorClasseFolha + '" [shape=rect];\n';
      valorBase='"'+node.valorClasseFolha+'"'
      return root;
    }
    if(node.nomePropNoh){
      root = '"'+node.nomePropNoh + '";\n';
      valorBase='"'+node.nomePropNoh+'"'
    }

    if(node.valorPropRamo) {
      //root = node.valorPropRamo + ";\n";

      node.filhos.forEach(element => {
        let returnedNode = toDot(element,'');
        root+=returnedNode;
        if(element.valorClasseFolha){
          root+= father + ' -- "' + element.valorClasseFolha + '" [label=' +node.valorPropRamo+ ']'+ ';\n'
        }
        if(element.nomePropNoh){
          root+= father + ' -- "' + element.nomePropNoh + '" [label=' +node.valorPropRamo+ ']'+ ';\n'
        }
        
      });

    } else {
      node.filhos.forEach(element => {
        let returnedNode = toDot(element,valorBase);
        root+=returnedNode;
      });
    }
    return root
  }

  const rootArv = {
    classenome:null,
    nomePropNoh:"Historico de Credito",
    valorClasseFolha:null,
    valorPropRamo:null,
    filhos:[
      {
        classenome:null,
        nomePropNoh:null,
        valorClasseFolha:null,
        valorPropRamo:"ruim",
        filhos:[
          {
            classenome:null,
            nomePropNoh:null,
            valorClasseFolha:"Baixo",
            valorPropRamo:null,
            filhos:[]
          }
        ]
      },
      {
        classenome:null,
        nomePropNoh:null,
        valorClasseFolha:null,
        valorPropRamo:"desconhecida",
        filhos:[
          {
            classenome:null,
            nomePropNoh:"Divida",
            valorClasseFolha:null,
            valorPropRamo:null,
            filhos:[
              {
                classenome:null,
                nomePropNoh:null,
                valorClasseFolha:null,
                valorPropRamo:"Baixa",
                filhos:[
                  {
                    classenome:null,
                    nomePropNoh:null,
                    valorClasseFolha:"Risco Alto",
                    valorPropRamo:null,
                    filhos:[]
                  }
                ]
              }
            ]
          },
        ]
      },
    ]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {""}
        <Graphviz dot={`graph {
          "Historico de Credito";
          "Baixo" [shape=rect];
          "Historico de Credito" -- "Baixo" [label=ruim];
          "Divida";
          "Risco Alto" [shape=rect];
          "Divida" -- "Risco Alto" [label=Baixa];
          "Historico de Credito" -- "Divida" [label=desconhecida];
}`} />
      </header>
    </div>
  );
}

export default App;
