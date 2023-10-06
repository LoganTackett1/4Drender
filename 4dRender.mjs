import Vector from "./vectors.mjs";

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

    return arr;
}

FOUR.rotatePoint = function (point,matrix) {
    const arr = [];
    for (let vect of matrix) {
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

const drawLine = function (ctx, x1, y1, x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

FOUR.drawCube = function (ctx,canvas,cube) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let link of cube.drawLines) {
        const p1 = cube.twoDMap[link[0]];
        const p2 = cube.twoDMap[link[1]];
        drawLine(ctx,p1[0]*1000+350,p1[1]*1000+350,p2[0]*1000+350,p2[1]*1000+350);
    }
}

export default FOUR;