import Node, {NodeArray} from './node';
import Edge from './edge';
import Graph from './graph';

let x = 5;

console.log(x);

function getMockNodeArray() {
    let nodeArray = [];
    for (let i = 0; i < 100; i++) {
        nodeArray.push(new Node(`${i}`))
        nodeArray[i].distance = Math.random() * 300;
    }
    return nodeArray;
}

function createEdges() {
    let edgesArray = [];
    for (let i = 0; i < 100; i++) {
        edgesArray.push(new Edge(Math.random() * 100, Math.random() * 100, Math.random() * 20));
    }

    return edgesArray;
}

let nodeArray = getMockNodeArray();

let edgesArray = createEdges();

let graph = new Graph(nodeArray, edgesArray);
