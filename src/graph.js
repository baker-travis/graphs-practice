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
        for (let i = 0; i < this.edges.length; i++) {
            let vert1 = NodeArray.get(this.nodes, this.edges[i].start);
            let vert2 = NodeArray.get(this.nodes, this.edges[i].end);

            vert1.addEdge(new Edge(null, vert2, this.edges[i].weight));
            vert2.addEdge(new Edge(null, vert1, this.edges[i].weight));
        }
    }
}