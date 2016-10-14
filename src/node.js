export default class Node {
    constructor(name, edges) {
        this.name = name;
        this.edges = edges || [];
        this.distance = Infinity;
        this.permanent = false;
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}

export class NodeArray {
    static get(list, name) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].name == name) {
                return list[i];
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