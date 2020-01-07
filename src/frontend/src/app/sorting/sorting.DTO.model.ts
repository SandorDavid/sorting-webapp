export class SortingRequest {
    constructor(public toSort: String, public algorithm: String){}
}

export class SortingResponse {
    constructor(public sortedOutput: Array<any>, public executionTime: number){}
}