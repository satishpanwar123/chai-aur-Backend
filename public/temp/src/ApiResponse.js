class Apiresponse {
    constructor(status, message = "success") {
        this.status = status;
        this.message = message;
        
        this.success = statuscode < 400; 
    }
}
