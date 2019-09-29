export  class LookupService {
    constructor( doctors) {
        this.doctors = doctors;
    }
    
    
    
    getDoctorByPractice(practice) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `hhttps://api.betterdoctor.com/2016-03-01/practices?name=Matthew%20Noell&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key={exports.apiKey}`
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
        
