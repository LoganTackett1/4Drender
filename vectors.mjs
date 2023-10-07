export class Vector {
    constructor (...args) {
        for (let i = 0; i < args.length; i++) {
            this[`x${i}`] = args[i];
        }
        this.dim = args.length;
    }
    add (vector) {
        if (vector.dim !== this.dim) {
            throw new Error("Cannot sum vectors of different dimension.");
        } else {
            for (let i = 0; i < this.dim; i++) {
                this[`x${i}`] += vector[`x${i}`];
            }
        }
    }
    subtract (vector) {
        if (vector.dim !== this.dim) {
            throw new Error("Cannot sum vectors of different dimension.");
        } else {
            for (let i = 0; i < this.dim; i++) {
                this[`x${i}`] -= vector[`x${i}`];
            }
        }
    }
    scale (constant) {
        for (let i = 0; i < this.dim; i++) {
                this[`x${i}`] *= constant;
            }
    }
    dotProduct (vector) {
        if (vector.dim !== this.dim) {
            throw new Error("Cannot sum vectors of different dimension.");
        } else {
            let result = 0;
            for (let i = 0; i < this.dim; i++) {
                result += this[`x${i}`]*vector[`x${i}`];
            }
            return result;
        }
    }
    map (func) {
        for (let i = 0; i < this.dim; i++) {
                this[`x${i}`] = func(this[`x${i}`]);
            }
    }
    toArray () {
        const result = [];
        for (let i = 0; i < this.dim; i++) {
                result.push(this[`x${i}`]);
            }
            return result;
    }
    distSquared (vector = false) {
        if (vector == false) {
            let result = 0;
            for (let i = 0; i < this.dim; i++) {
                result += this[`x${i}`]**2;
            }
            return result;
        } else {
            let result = 0;
            for (let i = 0; i < this.dim; i++) {
                result += (this[`x${i}`]-vector[`x${i}`])**2;
            }
            return result;
        }
    }
}

export class Matrix {
    constructor (...vects) {
        this.array = [];
        for (let i = 0; i < vects.length; i++) {
            this.array.push(vects[i]);
        }
        this.rows = vects.length;
        this.cols = vects[0].dim;
    }
    transpose () {
        const vectors = [];
        for (let i = 0; i < this.cols; i++) {
            const arr = [];
            for (let j = 0; j < this.rows; j++) {
                arr.push(this.array[j][`x${i}`]);
            }
            vectors.push(new Vector(...arr));
        }
        return new Matrix(...vectors);
    }
    leftMultBy (leftMatrix) {
        const transposed = this.transpose();
        const vectors = [];
        for (let i = 0; i < leftMatrix.array.length; i++) {
            const arr = [];
            for (let j = 0; j < transposed.array.length; j++) {
                arr.push(leftMatrix.array[i].dotProduct(transposed.array[j]));
            }
            vectors.push(new Vector(...arr));
        }
        return new Matrix(...vectors);
    }
}

