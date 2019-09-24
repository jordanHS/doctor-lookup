export  class LookupService {
    constructor(queries, doctors) {
        this.practices = this.practices;
        this.doctors - doctors;
    }
    
    
    
    getDoctorByPractice(practice) {
        return New Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `https://api.betterdoctor.com/2016-03-01/practices?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&fields=Internal%20medicine&skip=0&limit=10&apikey8882649c832a2b5e91873e77aa80b644`
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
}
        
