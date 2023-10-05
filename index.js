import FOUR from "./4dRender.mjs";

const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

const myCube = FOUR.create4DCube();
FOUR.cubeToTwo(myCube,3,2,1,0.5);
console.log(myCube.twoDMap);
console.log(myCube.drawLines);
FOUR.drawCube(ctx,canvas,myCube);

