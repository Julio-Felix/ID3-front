import logo from './logo.svg';

import { Graphviz } from 'graphviz-react';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [diagraph, setDiagraph] = useState('')
  const [graph, setGraph] = useState('')
  const [divida, setDivida] = useState('')
  const [renda, setRenda] = useState('')
  const [garantia, setGarantia] = useState('')
  const [credito, setCredito] = useState('')

  useEffect(() => {
    let arvDia = toDot(rootArv, "");
    // console.log("Teste || ", arvDia)
    setDiagraph('graph {node [style="filled"] \n'+arvDia+" \n}")
    setGraph(arvDia)
  }, [])

  // useEffect(() => {
  //   if(graph != "")animateTheDiagraph(returnedJson);
  // }, [graph])

  function toDot(node, father) {
    let root="";
    let valorBase;
    if(node.valorClasseFolha){
      root = '"'+node.valorClasseFolha +'-'+ node.id+'"[shape=rect];\n';
      valorBase='"'+node.valorClasseFolha +'-'+ node.id+'"'
      return root;
    }
    if(node.nomePropNoh){
      root = '"'+node.nomePropNoh +'-'+ node.id + '";\n';
      valorBase='"'+node.nomePropNoh +'-'+ node.id+'"'
    }

    if(node.valorPropRamo) {
      //root = node.valorPropRamo + ";\n";

      node.filhos.forEach(element => {
        let returnedNode = toDot(element,'');
        root+=returnedNode;
        if(element.valorClasseFolha){
          root+= father + ' -- "' + element.valorClasseFolha +'-'+ element.id + '" [label="' +node.valorPropRamo+ '"]'+ ';\n'
        }
        if(element.nomePropNoh){
          root+= father + ' -- "' + element.nomePropNoh +'-'+ element.id + '" [label="' +node.valorPropRamo+ '"]'+ ';\n'
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
  let returnedJson = {
    "idCaminho": [
        1,
        2,
        28,
        4,
        6
    ],
    "nohFinal": {
        "classeNome": "risco",
        "nomePropNoh": "Garantia",
        "valorPropRamo": null,
        "valorClasseFolha": null,
        "filhos": [
            {
                "classeNome": "risco",
                "nomePropNoh": null,
                "valorPropRamo": "nenhuma",
                "valorClasseFolha": null,
                "filhos": [
                    {
                        "classeNome": "risco",
                        "nomePropNoh": "Renda",
                        "valorPropRamo": null,
                        "valorClasseFolha": null,
                        "filhos": [
                            {
                                "classeNome": "risco",
                                "nomePropNoh": null,
                                "valorPropRamo": "0 a 15",
                                "valorClasseFolha": null,
                                "filhos": [
                                    {
                                        "classeNome": "risco",
                                        "nomePropNoh": null,
                                        "valorPropRamo": null,
                                        "valorClasseFolha": "Risco alto",
                                        "filhos": [],
                                        "id": 6
                                    }
                                ],
                                "id": 4
                            },
                            {
                                "classeNome": "risco",
                                "nomePropNoh": null,
                                "valorPropRamo": "15 a 35",
                                "valorClasseFolha": null,
                                "filhos": [
                                    {
                                        "classeNome": "risco",
                                        "nomePropNoh": "História de Crédito",
                                        "valorPropRamo": null,
                                        "valorClasseFolha": null,
                                        "filhos": [
                                            {
                                                "classeNome": "risco",
                                                "nomePropNoh": null,
                                                "valorPropRamo": "desconhecida",
                                                "valorClasseFolha": null,
                                                "filhos": [
                                                    {
                                                        "classeNome": "risco",
                                                        "nomePropNoh": "Dívida",
                                                        "valorPropRamo": null,
                                                        "valorClasseFolha": null,
                                                        "filhos": [
                                                            {
                                                                "classeNome": "risco",
                                                                "nomePropNoh": null,
                                                                "valorPropRamo": "alta",
                                                                "valorClasseFolha": null,
                                                                "filhos": [
                                                                    {
                                                                        "classeNome": "risco",
                                                                        "nomePropNoh": null,
                                                                        "valorPropRamo": null,
                                                                        "valorClasseFolha": "Risco alto",
                                                                        "filhos": [],
                                                                        "id": 13
                                                                    }
                                                                ],
                                                                "id": 11
                                                            },
                                                            {
                                                                "classeNome": "risco",
                                                                "nomePropNoh": null,
                                                                "valorPropRamo": "baixa",
                                                                "valorClasseFolha": null,
                                                                "filhos": [
                                                                    {
                                                                        "classeNome": "risco",
                                                                        "nomePropNoh": null,
                                                                        "valorPropRamo": null,
                                                                        "valorClasseFolha": "Risco moderado",
                                                                        "filhos": [],
                                                                        "id": 16
                                                                    }
                                                                ],
                                                                "id": 14
                                                            }
                                                        ],
                                                        "id": 17
                                                    }
                                                ],
                                                "id": 9
                                            },
                                            {
                                                "classeNome": "risco",
                                                "nomePropNoh": null,
                                                "valorPropRamo": "boa",
                                                "valorClasseFolha": null,
                                                "filhos": [
                                                    {
                                                        "classeNome": "risco",
                                                        "nomePropNoh": null,
                                                        "valorPropRamo": null,
                                                        "valorClasseFolha": "Risco moderado",
                                                        "filhos": [],
                                                        "id": 20
                                                    }
                                                ],
                                                "id": 18
                                            },
                                            {
                                                "classeNome": "risco",
                                                "nomePropNoh": null,
                                                "valorPropRamo": "ruim",
                                                "valorClasseFolha": null,
                                                "filhos": [
                                                    {
                                                        "classeNome": "risco",
                                                        "nomePropNoh": null,
                                                        "valorPropRamo": null,
                                                        "valorClasseFolha": "Risco alto",
                                                        "filhos": [],
                                                        "id": 23
                                                    }
                                                ],
                                                "id": 21
                                            }
                                        ],
                                        "id": 24
                                    }
                                ],
                                "id": 7
                            },
                            {
                                "classeNome": "risco",
                                "nomePropNoh": null,
                                "valorPropRamo": "> 35",
                                "valorClasseFolha": null,
                                "filhos": [
                                    {
                                        "classeNome": "risco",
                                        "nomePropNoh": null,
                                        "valorPropRamo": null,
                                        "valorClasseFolha": "Risco baixo",
                                        "filhos": [],
                                        "id": 27
                                    }
                                ],
                                "id": 25
                            }
                        ],
                        "id": 28
                    }
                ],
                "id": 2
            },
            {
                "classeNome": "risco",
                "nomePropNoh": null,
                "valorPropRamo": "adequada",
                "valorClasseFolha": null,
                "filhos": [
                    {
                        "classeNome": "risco",
                        "nomePropNoh": "Renda",
                        "valorPropRamo": null,
                        "valorClasseFolha": null,
                        "filhos": [
                            {
                                "classeNome": "risco",
                                "nomePropNoh": null,
                                "valorPropRamo": "> 35",
                                "valorClasseFolha": null,
                                "filhos": [
                                    {
                                        "classeNome": "risco",
                                        "nomePropNoh": "História de Crédito",
                                        "valorPropRamo": null,
                                        "valorClasseFolha": null,
                                        "filhos": [
                                            {
                                                "classeNome": "risco",
                                                "nomePropNoh": null,
                                                "valorPropRamo": "desconhecida",
                                                "valorClasseFolha": null,
                                                "filhos": [
                                                    {
                                                        "classeNome": "risco",
                                                        "nomePropNoh": null,
                                                        "valorPropRamo": null,
                                                        "valorClasseFolha": "Risco baixo",
                                                        "filhos": [],
                                                        "id": 35
                                                    }
                                                ],
                                                "id": 33
                                            },
                                            {
                                                "classeNome": "risco",
                                                "nomePropNoh": null,
                                                "valorPropRamo": "ruim",
                                                "valorClasseFolha": null,
                                                "filhos": [
                                                    {
                                                        "classeNome": "risco",
                                                        "nomePropNoh": null,
                                                        "valorPropRamo": null,
                                                        "valorClasseFolha": "Risco moderado",
                                                        "filhos": [],
                                                        "id": 38
                                                    }
                                                ],
                                                "id": 36
                                            },
                                            {
                                                "classeNome": "risco",
                                                "nomePropNoh": null,
                                                "valorPropRamo": "boa",
                                                "valorClasseFolha": null,
                                                "filhos": [
                                                    {
                                                        "classeNome": "risco",
                                                        "nomePropNoh": null,
                                                        "valorPropRamo": null,
                                                        "valorClasseFolha": "Risco baixo",
                                                        "filhos": [],
                                                        "id": 41
                                                    }
                                                ],
                                                "id": 39
                                            }
                                        ],
                                        "id": 42
                                    }
                                ],
                                "id": 31
                            }
                        ],
                        "id": 43
                    }
                ],
                "id": 29
            }
        ],
        "id": 1
    },
    "riscoFinal": "Risco Risco alto"
}
  function animateTheDiagraph(data){
    let newgraph = graph.split(';');
    newgraph.pop()
    data.idCaminho.map((item,index) => {
      // fillcolor="red"

      if((index+1) % 2 != 0){
        let found = newgraph.find((element) => {
          return element.search('-'+item+'"') >= 0
        })
        let indexfrom = newgraph.indexOf(found);
        if(found.includes("shape")){
          found = found.replace("]", ' fillcolor="red" ]')
        }else {
          found = found.replace('-'+item+'"', '-'+item+'"'+' [ fillcolor="red" ]')
        }
          
        
        newgraph[indexfrom]=found;
      }
    })
    let finalGraph = ''
    newgraph.map((item) => {
      finalGraph=finalGraph.concat(item + ';')
    })
    console.log("Novo Graph || ", finalGraph)
    setDiagraph('graph {node [style="filled"] \n'+finalGraph+" \n}")
    setGraph(finalGraph)
  }

  const rootArv = {
    "classeNome": "risco",
    "nomePropNoh": "Garantia",
    "valorPropRamo": null,
    "valorClasseFolha": null,
    "filhos": [
        {
            "classeNome": "risco",
            "nomePropNoh": null,
            "valorPropRamo": "nenhuma",
            "valorClasseFolha": null,
            "filhos": [
                {
                    "classeNome": "risco",
                    "nomePropNoh": "Renda",
                    "valorPropRamo": null,
                    "valorClasseFolha": null,
                    "filhos": [
                        {
                            "classeNome": "risco",
                            "nomePropNoh": null,
                            "valorPropRamo": "0 a 15",
                            "valorClasseFolha": null,
                            "filhos": [
                                {
                                    "classeNome": "risco",
                                    "nomePropNoh": null,
                                    "valorPropRamo": null,
                                    "valorClasseFolha": "Risco alto",
                                    "filhos": [],
                                    "id": 6
                                }
                            ],
                            "id": 4
                        },
                        {
                            "classeNome": "risco",
                            "nomePropNoh": null,
                            "valorPropRamo": "15 a 35",
                            "valorClasseFolha": null,
                            "filhos": [
                                {
                                    "classeNome": "risco",
                                    "nomePropNoh": "História de Crédito",
                                    "valorPropRamo": null,
                                    "valorClasseFolha": null,
                                    "filhos": [
                                        {
                                            "classeNome": "risco",
                                            "nomePropNoh": null,
                                            "valorPropRamo": "desconhecida",
                                            "valorClasseFolha": null,
                                            "filhos": [
                                                {
                                                    "classeNome": "risco",
                                                    "nomePropNoh": "Dívida",
                                                    "valorPropRamo": null,
                                                    "valorClasseFolha": null,
                                                    "filhos": [
                                                        {
                                                            "classeNome": "risco",
                                                            "nomePropNoh": null,
                                                            "valorPropRamo": "alta",
                                                            "valorClasseFolha": null,
                                                            "filhos": [
                                                                {
                                                                    "classeNome": "risco",
                                                                    "nomePropNoh": null,
                                                                    "valorPropRamo": null,
                                                                    "valorClasseFolha": "Risco alto",
                                                                    "filhos": [],
                                                                    "id": 13
                                                                }
                                                            ],
                                                            "id": 11
                                                        },
                                                        {
                                                            "classeNome": "risco",
                                                            "nomePropNoh": null,
                                                            "valorPropRamo": "baixa",
                                                            "valorClasseFolha": null,
                                                            "filhos": [
                                                                {
                                                                    "classeNome": "risco",
                                                                    "nomePropNoh": null,
                                                                    "valorPropRamo": null,
                                                                    "valorClasseFolha": "Risco moderado",
                                                                    "filhos": [],
                                                                    "id": 16
                                                                }
                                                            ],
                                                            "id": 14
                                                        }
                                                    ],
                                                    "id": 17
                                                }
                                            ],
                                            "id": 9
                                        },
                                        {
                                            "classeNome": "risco",
                                            "nomePropNoh": null,
                                            "valorPropRamo": "boa",
                                            "valorClasseFolha": null,
                                            "filhos": [
                                                {
                                                    "classeNome": "risco",
                                                    "nomePropNoh": null,
                                                    "valorPropRamo": null,
                                                    "valorClasseFolha": "Risco moderado",
                                                    "filhos": [],
                                                    "id": 20
                                                }
                                            ],
                                            "id": 18
                                        },
                                        {
                                            "classeNome": "risco",
                                            "nomePropNoh": null,
                                            "valorPropRamo": "ruim",
                                            "valorClasseFolha": null,
                                            "filhos": [
                                                {
                                                    "classeNome": "risco",
                                                    "nomePropNoh": null,
                                                    "valorPropRamo": null,
                                                    "valorClasseFolha": "Risco alto",
                                                    "filhos": [],
                                                    "id": 23
                                                }
                                            ],
                                            "id": 21
                                        }
                                    ],
                                    "id": 24
                                }
                            ],
                            "id": 7
                        },
                        {
                            "classeNome": "risco",
                            "nomePropNoh": null,
                            "valorPropRamo": "> 35",
                            "valorClasseFolha": null,
                            "filhos": [
                                {
                                    "classeNome": "risco",
                                    "nomePropNoh": null,
                                    "valorPropRamo": null,
                                    "valorClasseFolha": "Risco baixo",
                                    "filhos": [],
                                    "id": 27
                                }
                            ],
                            "id": 25
                        }
                    ],
                    "id": 28
                }
            ],
            "id": 2
        },
        {
            "classeNome": "risco",
            "nomePropNoh": null,
            "valorPropRamo": "adequada",
            "valorClasseFolha": null,
            "filhos": [
                {
                    "classeNome": "risco",
                    "nomePropNoh": "Renda",
                    "valorPropRamo": null,
                    "valorClasseFolha": null,
                    "filhos": [
                        {
                            "classeNome": "risco",
                            "nomePropNoh": null,
                            "valorPropRamo": "> 35",
                            "valorClasseFolha": null,
                            "filhos": [
                                {
                                    "classeNome": "risco",
                                    "nomePropNoh": "História de Crédito",
                                    "valorPropRamo": null,
                                    "valorClasseFolha": null,
                                    "filhos": [
                                        {
                                            "classeNome": "risco",
                                            "nomePropNoh": null,
                                            "valorPropRamo": "desconhecida",
                                            "valorClasseFolha": null,
                                            "filhos": [
                                                {
                                                    "classeNome": "risco",
                                                    "nomePropNoh": null,
                                                    "valorPropRamo": null,
                                                    "valorClasseFolha": "Risco baixo",
                                                    "filhos": [],
                                                    "id": 35
                                                }
                                            ],
                                            "id": 33
                                        },
                                        {
                                            "classeNome": "risco",
                                            "nomePropNoh": null,
                                            "valorPropRamo": "ruim",
                                            "valorClasseFolha": null,
                                            "filhos": [
                                                {
                                                    "classeNome": "risco",
                                                    "nomePropNoh": null,
                                                    "valorPropRamo": null,
                                                    "valorClasseFolha": "Risco moderado",
                                                    "filhos": [],
                                                    "id": 38
                                                }
                                            ],
                                            "id": 36
                                        },
                                        {
                                            "classeNome": "risco",
                                            "nomePropNoh": null,
                                            "valorPropRamo": "boa",
                                            "valorClasseFolha": null,
                                            "filhos": [
                                                {
                                                    "classeNome": "risco",
                                                    "nomePropNoh": null,
                                                    "valorPropRamo": null,
                                                    "valorClasseFolha": "Risco baixo",
                                                    "filhos": [],
                                                    "id": 41
                                                }
                                            ],
                                            "id": 39
                                        }
                                    ],
                                    "id": 42
                                }
                            ],
                            "id": 31
                        }
                    ],
                    "id": 43
                }
            ],
            "id": 29
        }
    ],
    "id": 1
}
  const optionsDivida = ['alta', 'baixa'];
  const optionsRenda = ['0 a 15', '15 a 35', '>35'];
  const optionsGarantia = ['nenhuma', 'adequada'];
  const optionsCredito = ['ruim', 'desconhecido', 'boa'];
  return (
    <div className="App">

    <div className="row">
        <div className="column">
          {diagraph != "" ? <Graphviz dot={diagraph}
            options={{height: 750,
              width: 750,
              zoom:true
              }}
          /> : null}
        </div>
        <div className="column">
          <table style={{width:'100%'}}>
            <tr><th>Divida</th><th>Renda</th><th>Garantia</th><th>Historico de Credito</th></tr>
            <tr>
              <td>
              <select value={divida} onChange={(option ) => {setDivida(option.target.value)}}>
                {optionsDivida.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
              
              </td>
              <td>
              <select value={renda} onChange={(option ) => {setRenda(option.target.value)}}>
                {optionsRenda.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
              
              </td>
              <td>
              <select value={garantia} onChange={(option ) => {setGarantia(option.target.value)}}>
                {optionsGarantia.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
              
              </td>
              <td>
              <select value={credito} onChange={(option ) => {setCredito(option.target.value)}}>
                {optionsCredito.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
              
              </td>
            </tr>
            <tr>
              <th>
              <button onClick={() => animateTheDiagraph(returnedJson)}>
                Ativar lasers
              </button>
              </th>
            </tr>
            {/* <td></td> */}
            {/* <td */}
          </table>
            <h2>Column 2</h2>
            <p>Data..</p>
        </div>
    </div>

        {/* <Graphviz dot={`graph {
          "Garantia";
          "Renda";
          "Risco alto" [shape=rect];
          "Renda" -- "Risco alto" [label="0 a 15"];
          "História de Crédito";
          "Dívida";
          "Risco alto" [shape=rect];
          "Dívida" -- "Risco alto" [label="alta"];
          "Risco moderado" [shape=rect];
          "Dívida" -- "Risco moderado" [label="baixa"];
          "História de Crédito" -- "Dívida" [label="desconhecida"];
          "Risco moderado" [shape=rect];
          "História de Crédito" -- "Risco moderado" [label="boa"];
          "Risco alto" [shape=rect];
          "História de Crédito" -- "Risco alto" [label="ruim"];
          "Renda" -- "História de Crédito" [label="15 a 35"];
          "Risco baixo" [shape=rect];
          "Renda" -- "Risco baixo" [label="> 35"];
          "Garantia" -- "Renda" [label="nenhuma"];
          "Renda";
          "História de Crédito";
          "Risco baixo" [shape=rect];
          "História de Crédito" -- "Risco baixo" [label="desconhecida"];
          "Risco moderado" [shape=rect];
          "História de Crédito" -- "Risco moderado" [label="ruim"];
          "Risco baixo" [shape=rect];
          "História de Crédito" -- "Risco baixo" [label="boa"];
          "Renda" -- "História de Crédito" [label="> 35"];
          "Garantia" -- "Renda" [label="adequada"];
}`} /> */}
    </div>
  );
}

export default App;
