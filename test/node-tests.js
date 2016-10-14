import {assert} from 'mocha';
import Node, {NodeArray} from '../src/node';

function getMockNodeArray() {
    let nodeArray = new NodeArray();
    for (let i = 0; i < 100; i++) {
        nodeArray.push(new Node(`${i}`))
        nodeArray[i].distance = Math.random() * 300;
    }
    return nodeArray;
}

describe('Node', function() {
    describe('NodeArray', function() {
        it('should sort array values', function() {
            let nodeArray = getMockNodeArray();
            //console.log(nodeArray);
            console.log(NodeArray);
            nodeArray.sortByDist();
            for (let i = 0; i < nodeArray.length; i++) {
                console.log(nodeArray[i].distance);
            }
            //console.log(nodeArray);
        })
    })
})