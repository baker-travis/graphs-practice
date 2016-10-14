import {NodeArray} from './node';
import Edge from './edge';

export default class Graph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
        this.buildGraph();
    }

    getDistance(start, end) {

    }

    buildGraph() {
        for (edge in this.edges) {
            let vert1 = NodeArray.get(nodes, edge.start);
            let vert2 = NodeArray.get(nodes, edge.end);

            vert1.addEdge(new Edge(null, vert2, edge.weight));
            vert2.addEdge(new Edge(null, vert1, edge.weight));
        }
    }
}