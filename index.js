import FOUR from "./4dRender.mjs";
import { Vector } from "./vectors.mjs";
import { Matrix } from "./vectors.mjs";

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

const myCube = FOUR.create4DCube();
//const myCube = FOUR.create4DTetrahedron();

console.log(myCube.twoDMap);
console.log(myCube.drawLines);

const myMatrix = FOUR.createRotationMatrix(0.0025);


//angle pi/2 for tesseract!
let angle = Math.PI/2;

let COS = Math.cos(angle);
let SIN = Math.sin(angle);

let rMatrix = new Matrix(...[new Vector(COS,0,0,-SIN),
                            new Vector(0,1,0,0),
                            new Vector(0,0,1,0),
                            new Vector(SIN,0,0,COS)]);

let rInverse = new Matrix(...[new Vector(COS,0,0,SIN),
                            new Vector(0,1,0,0),
                            new Vector(0,0,1,0),
                            new Vector(-SIN,0,0,COS)]);

const totalMatrix = (rInverse.leftMultBy(myMatrix)).leftMultBy(rMatrix);

window.addEventListener('resize', () => {
    const length = Math.min(window.innerHeight,window.innerWidth);
    canvas.width = length;
    canvas.height = length;
});

setInterval(function () {
    FOUR.cubeRotate(myCube,totalMatrix);
    FOUR.cubeToTwo(myCube,3,2.5,2,1);
    FOUR.drawCube(ctx,canvas,myCube);
},10);
