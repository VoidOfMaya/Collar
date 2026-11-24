export class ApiError extends Error {
    status: number;
    message: string;
    details: string | null | undefined ;
    log: boolean | string;
    constructor(status: number = 500, message: string = '', details = null,log = false) {
        super(message);
        this.status = status;
        this.message = message;
        this.details = details;
        this.log = log;
    }
}