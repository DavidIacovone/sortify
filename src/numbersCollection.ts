export class NumbersCollection {

    constructor(public data: number[]) { }

    get length(): number {
        return this.data.length;
    }

    compare(index: number): boolean {
        return this.data[index] > this.data[index + 1];
    }

    swap(index: number) {
        const leftHand = this.data[index];
        this.data[index] = this.data[index + 1];
        this.data[index + 1] = leftHand;
    }
}