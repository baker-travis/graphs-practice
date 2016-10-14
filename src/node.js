export default class Node {
    constructor(name, edges) {
        this.name = name;
        this.edges = edges;
        this.distance = Infinity;
        this.permanent = false;
    }

    addEdge(edge) {
        edges.push(edge);
    }
}

export class NodeArray {
    static get(list, name) {
        for (node in this) {
            if (node.name === name) {
                return node;
            }
        }
        return undefined;
    }

    static sortByDist(list) {
        list.sort((a, b) => {
            return a.distance - b.distance;
        });
    }

    static getShortestDistance(list) {
        if (list.length > 0) {
            return list[0];
        }
    }
}