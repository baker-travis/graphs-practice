import Node, {NodeArray} from './node';
import Edge from './edge';
import Graph from './graph';

function getMockNodeArray() {
    let nodeArray = [];
    //for (let i = 0; i < 100; i++) {
    //    nodeArray.push(new Node(`${i}`));
    //}

    nodeArray.push(new Node('A'));
    nodeArray.push(new Node('B'));
    nodeArray.push(new Node('C'));
    nodeArray.push(new Node('D'));
    nodeArray.push(new Node('E'));
    nodeArray.push(new Node('F'));

    return nodeArray;
}

function createEdges() {
    let edgesArray = [];
    //for (let i = 0; i < 100; i++) {
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //    edgesArray.push(new Edge(`${i}`, Math.floor(Math.random() * 100), Math.random() * 20));
    //}
    edgesArray.push(new Edge('A', 'B', 3));
    edgesArray.push(new Edge('A', 'D', 3));
    edgesArray.push(new Edge('A', 'F', 6));
    edgesArray.push(new Edge('B', 'D', 1));
    edgesArray.push(new Edge('D', 'F', 2));
    edgesArray.push(new Edge('D', 'E', 1));
    edgesArray.push(new Edge('B', 'E', 3));
    edgesArray.push(new Edge('E', 'F', 5));
    edgesArray.push(new Edge('E', 'C', 2));
    edgesArray.push(new Edge('F', 'C', 3));

    return edgesArray;
}

let nodeArray = getMockNodeArray();

let edgesArray = createEdges();

let graph = new Graph(nodeArray, edgesArray);

let endNode = NodeArray.get(graph.nodes, 'A');
console.log(graph.getDistance('C', 'A'));

function printBackwards(endNode) {
    if (endNode.previous !== null) {
        printBackwards(endNode.previous);
    }
    console.log(`Node ${endNode.name} had a distance of ${endNode.distance}`);
}

printBackwards(endNode);
