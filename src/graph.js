import {NodeArray} from './node';
import Edge from './edge';

export default class Graph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
        this.buildGraph();
    }

    getDistance(start, end) {
        let currentNode = NodeArray.get(this.nodes, start);

        currentNode.distance = 0;

        while (currentNode.name !== end && currentNode.name !== undefined && currentNode.distance !== Infinity && !currentNode.permanent) {
            this.processNode(currentNode);
            NodeArray.sortByDist(this.nodes);
            currentNode = this.nodes[0];
        }

        return NodeArray.get(this.nodes, end).distance
    }

    processNode(node) {
        let edges = node.edges;
        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];
            //let endNode = NodeArray.get(this.nodes, edge.end);

            if (!edge.end.permanent && edge.weight + node.distance < edge.end.distance) {
                edge.end.distance = node.distance + edge.weight;
                edge.end.previous = node;
            }
        }
        node.permanent = true;
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