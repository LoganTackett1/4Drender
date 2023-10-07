import { Vector } from "./vectors.mjs";
import { Matrix } from "./vectors.mjs";

const FOUR = {};

FOUR.create4DCube = function () {
    const options = [-1,1];

    const cube = {};

    cube.points = [];

    for (let op1 of options) {
        for (let op2 of options) {
            for (let op3 of options) {
                for (let op4 of options) {
                    cube.points.push(new Vector(op1,op2,op3,op4));
                }
            }
        }
    }

    const map = {};
    cube.drawLines = [];

    function adjCheck (p1,p2) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
            if (p1[`x${i}`] === p2[`x${i}`]) {
                count += 1;
            }
        }
        if (count === 3) {
            return true;
        }
        return false;
    }

    for (let i = 0; i < cube.points.length; i++) {
        for (let j = 0; j < cube.points.length; j++) {
            if (!(i === j || `${i},${j}` in map || `${j},${i}` in map)) {
                if (adjCheck(cube.points[i],cube.points[j])) {
                    cube.drawLines.push([i,j]);
                    map[`${i},${j}`] = null;
                } 
            }
        }
    }

    cube.center = new Vector(0,0,0,0);

    cube.twoDMap = [[0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0]];

    return cube;
}

FOUR.create4DTetrahedron = function () {

    const cube = {};

    cube.points = [new Vector(-1.5),new Vector(1.5)];

    let currDim = 1;
    for (let i = 2; i <=4; i++) {
        let sum = 0;
        for (let j = 0; j < currDim; j++) {
            sum += (cube.points[0][`x${j}`])**2;
        }
        const xNew = Math.sqrt(9-sum);
        for (let point of cube.points) {
            point.extendDim(0);
        }
        currDim += 1;
        const inpArr = [];
        for (let j = 0; j < currDim-1; j++) {
            inpArr.push(0);
        }
        inpArr.push(xNew);
        cube.points.push(new Vector(...inpArr));

        const dupe = new Vector(...cube.points[0].toArray());
        for (let j = 1; j < cube.points.length; j++) {
            dupe.add(cube.points[j]);
        }
        dupe.scale(-1/cube.points.length);
        for (let point of cube.points) {
            point.add(dupe);
        }
    }

    cube.drawLines = [];

    for (let i = 0; i < cube.points.length; i++) {
        for (let j = i+1; j < cube.points.length; j++) {
                    cube.drawLines.push([i,j]);
            }
        }

    cube.center = new Vector(0,0,0,0);

    cube.twoDMap = [[0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0]];

    return cube;
}

FOUR.cubeShift = function (cube,vect) {
    for (let point of cube.points) {
        point.add(vect);
    }
    cube.center.add(vect);
}

FOUR.createRotationMatrix = function (angle) {
    const arr = [];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle)
    arr.push(new Vector(cos,-sin,0,0));
    arr.push(new Vector(sin,cos,0,0));
    arr.push(new Vector(0,0,cos,-sin));
    arr.push(new Vector(0,0,sin,cos));

    return new Matrix(...arr);
}

FOUR.rotatePoint = function (point,matrix) {
    const arr = [];
    for (let vect of matrix.array) {
        arr.push(vect.dotProduct(point));
    }
    return new Vector(...arr);
}

FOUR.cubeRotate = function (cube,matrix) {
    for (let point of cube.points) {
        point.subtract(cube.center);
        const newPoint = this.rotatePoint(point,matrix);
        point.x0 = newPoint.x0;
        point.x1 = newPoint.x1;
        point.x2 = newPoint.x2;
        point.x3 = newPoint.x3;
        point.add(cube.center);
    }
}

FOUR.projectToThree = function (point,wc,wv) {
    const x = point.x0*((wv-wc)/(point.x3-wc));
    const y = point.x1*((wv-wc)/(point.x3-wc));
    const z = point.x2*((wv-wc)/(point.x3-wc));
    return new Vector(x,y,z);
}

FOUR.projectToTwo = function (point,zc,zv) {
    const x = point.x0*((zv-zc)/(point.x2-zc));
    const y = point.x1*((zv-zc)/(point.x2-zc));
    return new Vector(x,y);
}

FOUR.cubeToTwo = function (cube,wc,wv,zc,zv) {
    for (let i = 0; i < cube.points.length; i++) {
        const two = this.projectToTwo(this.projectToThree(cube.points[i],wc,wv),zc,zv);
        cube.twoDMap[i][0] = two.x0;
        cube.twoDMap[i][1] = two.x1;
    }
}

FOUR.cubeToFlatProjection = function (cube,wc,wv) {
    for (let i = 0; i < cube.points.length; i++) {
        const two = this.projectToThree(cube.points[i],wc,wv);
        cube.twoDMap[i][0] = two.x0;
        cube.twoDMap[i][1] = two.x1;
    }
}
/*
const drawLine = function (ctx, x1, y1, z1, x2, y2, z2, n) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
*/
const drawLine = function (ctx, x1, y1, z1, x2, y2, z2, n) {
    const deltaX = (x2-x1)/n;
    const deltaY = (y2-y1)/n;
    const initThick = 5+(3*((z1-2)/4));
    const deltaThick = (5+(3*((z2-2)/4))-initThick)/n;
    for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(x1+(i*deltaX), y1+(i*deltaY));
        ctx.lineTo(x1+((i+1)*deltaX), y1+((i+1)*deltaY));
        ctx.strokeStyle = 'black';
        ctx.lineWidth = initThick+(i*deltaThick);
        ctx.stroke();
        ctx.closePath();
    }
}

FOUR.drawCube = function (ctx,canvas,cube) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let link of cube.drawLines) {
        const p1 = cube.twoDMap[link[0]];
        const p1Z = cube.points[link[0]][`x2`];
        const p2 = cube.twoDMap[link[1]];
        const p2Z = cube.points[link[1]][`x2`];
        drawLine(ctx,p1[0]*1000+350,p1[1]*1000+350,p1Z,p2[0]*1000+350,p2[1]*1000+350,p2Z,5);
    }
}

export default FOUR;