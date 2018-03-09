export class ApiConstant {
    apiConstant: string;
    production: boolean = false;

    constructor() {
        this.apiConstant = 'http://deverp:8022/api';
        this.production = true;
    }
}
