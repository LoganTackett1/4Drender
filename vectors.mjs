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
    scale (constant) {
        for (let i = 0; i < this.dim; i++) {
                this[`x${i}`] *= constant;
            }
    }
    dotProduct (vector) {
        if (vector.dim !== this.dim) {
            throw new Error("Cannot sum vectors of different dimension.");
        } else {
            result = 0;
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
    mutateR2 () {
        const x = 2*Math.random()-1;
        const y = 2*Math.random()-1;
        if (x**2+y**2<=1) {
            this.x0 = x;
            this.x1 = y;
        } else {
            return this.mutateR2();
        }
    }
}

export default Vector;