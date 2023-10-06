class Vector {
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

export default Vector;