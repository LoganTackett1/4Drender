import FOUR from "./4dRender.mjs";
import Vector from "./vectors.mjs";

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

const myCube = FOUR.create4DCube();

console.log(myCube.twoDMap);
console.log(myCube.drawLines);

const myMatrix = FOUR.createRotationMatrix(0.01);

let angle = 0;

let COS = Math.cos(angle);
let SIN = Math.sin(angle);

let rMatrix = [new Vector(COS,0,0,-SIN),
                 new Vector(0,1,0,0),
                 new Vector(0,0,1,0),
                 new Vector(SIN,0,0,COS)];

let rInverse = [new Vector(COS,0,0,SIN),
                 new Vector(0,1,0,0),
                 new Vector(0,0,1,0),
                 new Vector(-SIN,0,0,COS)];



setInterval(function () {
    FOUR.cubeRotate(myCube,rInverse);
    FOUR.cubeRotate(myCube,myMatrix);
    FOUR.cubeRotate(myCube,rMatrix);
    //FOUR.cubeToFlatProjection(myCube,3,2);
    FOUR.cubeToTwo(myCube,3,2.5,2,1);
    FOUR.drawCube(ctx,canvas,myCube);
},16);
