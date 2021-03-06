import logo from './logo.svg';

import { Graphviz } from 'graphviz-react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
    const [diagraph, setDiagraph] = useState('')
    const [graph, setGraph] = useState('')
    const [divida, setDivida] = useState('')
    const [renda, setRenda] = useState('')
    const [garantia, setGarantia] = useState('')
    const [credito, setCredito] = useState('')
    const [i, setI] = useState(1)

    useEffect(() => {
        axios.get("http://localhost:8998/v1/induzir").then((response) => {
            let arvDia = toDot(response.data, "");
            // console.log("Teste || ", arvDia)
            setDiagraph('graph {node [style="filled"] \n'+arvDia+" \n}")
            setGraph(arvDia)
        }).catch((err) => {
            console.log("Erro Request || ", err);
            let arvDia = toDot(rootArv, "");
            // console.log("Teste || ", arvDia)
            setDiagraph('graph {node [style="filled"] \n'+arvDia+" \n}")
            setGraph(arvDia)
        })

    }, [])

  // useEffect(() => {
  //   if(graph != "")animateTheDiagraph(returnedJson);
  // }, [graph])


    function submit() {
        axios.get("http://localhost:8998/v1/induzir").then((response) => {
            let arvDia = toDot(response.data, "");
            // console.log("Teste || ", arvDia)
            // setDiagraph('graph {node [style="filled"] \n'+arvDia+" \n}")
            // setGraph(arvDia)
            animateTheDiagraph(arvDia)
        }).catch((err) => {
            console.log("Erro Request || ", err)
            
            let arvDia = toDot(rootArv, "");
            // console.log("Teste || ", arvDia)
            // setDiagraph('graph {node [style="filled"] \n'+arvDia+" \n}")
            // setGraph(arvDia)
            animateTheDiagraph(arvDia)

            
        })
    }
    let returnedJson = {
        "idCaminho": [
            1,
            2,
            28,
            4,
            27
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
                                            "nomePropNoh": "Hist??ria de Cr??dito",
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
                                                            "nomePropNoh": "D??vida",
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
                                            "nomePropNoh": "Hist??ria de Cr??dito",
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
    function animateTheDiagraph(graphbyParameter){
        let body= {
            divida:divida,
            garantia:garantia,
            historia:credito,
            renda:renda,
        }
        axios.post("http://localhost:8998/v1/Predizer",body).then((res) => {
            let newgraph = graphbyParameter.split(';');
            newgraph.pop()
            let data = res.data
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
        }).catch((err) => {
            console.log("Erro Request || ", err)
            
            let newgraph = graphbyParameter.split(';');
            newgraph.pop()
            let data = returnedJson;
            if(i > 1){
                data.idCaminho= [
                    1,
                    2,
                    28,
                    4,
                    6
                ]
            } else{
                setI(i+1)
            }
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
            setGraph(finalGraph);
        })
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
                                    "nomePropNoh": "Hist??ria de Cr??dito",
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
                                                    "nomePropNoh": "D??vida",
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
                                    "nomePropNoh": "Hist??ria de Cr??dito",
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
  const optionsRenda = ['0 a 15', '15 a 35', '> 35'];
  const optionsGarantia = ['nenhuma', 'adequada'];
  const optionsCredito = ['ruim', 'desconhecida', 'boa'];
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
            <tr><th>Renda</th><th>Hist??ria de Credito</th><th>D??vida</th><th>Garantia</th></tr>
            <tr>
              <td>
              <select value={renda} onChange={(option ) => {setRenda(option.target.value)}}>
                <option value={""}></option>
                {optionsRenda.map((option) => (
                  <option value={option}>{option.toUpperCase()}</option>
                ))}
              </select>
              
              </td>
              <td>
              <select value={credito} onChange={(option ) => {setCredito(option.target.value)}}>
                <option value={""}></option>
                {optionsCredito.map((option) => (
                  <option value={option}>{option.toUpperCase()}</option>
                ))}
              </select>
              
              </td>
              <td>
              <select value={divida} onChange={(option ) => {setDivida(option.target.value)}}>
                <option value={""}></option>
                {optionsDivida.map((option) => (
                  <option value={option}>{option.toUpperCase()}</option>
                ))}
              </select>
              
              
              </td>
              <td>
              <select value={garantia} onChange={(option ) => {setGarantia(option.target.value)}}>
                <option value={""}></option>
                {optionsGarantia.map((option) => (
                  <option value={option}>{option.toUpperCase()}</option>
                ))}
              </select>
              
              </td>
            </tr>
            <tr>
              <th>
              <button onClick={() => submit()}>
                PREDIZER
              </button>
              </th>
            </tr>
            {/* <td></td> */}
            {/* <td */}
          </table>
        </div>
    </div>

        {/* <Graphviz dot={`graph {
          "Garantia";
          "Renda";
          "Risco alto" [shape=rect];
          "Renda" -- "Risco alto" [label="0 a 15"];
          "Hist??ria de Cr??dito";
          "D??vida";
          "Risco alto" [shape=rect];
          "D??vida" -- "Risco alto" [label="alta"];
          "Risco moderado" [shape=rect];
          "D??vida" -- "Risco moderado" [label="baixa"];
          "Hist??ria de Cr??dito" -- "D??vida" [label="desconhecida"];
          "Risco moderado" [shape=rect];
          "Hist??ria de Cr??dito" -- "Risco moderado" [label="boa"];
          "Risco alto" [shape=rect];
          "Hist??ria de Cr??dito" -- "Risco alto" [label="ruim"];
          "Renda" -- "Hist??ria de Cr??dito" [label="15 a 35"];
          "Risco baixo" [shape=rect];
          "Renda" -- "Risco baixo" [label="> 35"];
          "Garantia" -- "Renda" [label="nenhuma"];
          "Renda";
          "Hist??ria de Cr??dito";
          "Risco baixo" [shape=rect];
          "Hist??ria de Cr??dito" -- "Risco baixo" [label="desconhecida"];
          "Risco moderado" [shape=rect];
          "Hist??ria de Cr??dito" -- "Risco moderado" [label="ruim"];
          "Risco baixo" [shape=rect];
          "Hist??ria de Cr??dito" -- "Risco baixo" [label="boa"];
          "Renda" -- "Hist??ria de Cr??dito" [label="> 35"];
          "Garantia" -- "Renda" [label="adequada"];
}`} /> */}
    </div>
  );
}

export default App;
