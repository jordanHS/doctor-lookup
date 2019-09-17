export default class LookupService {
    constructor(queries, doctors=10) {
        this.queries = queries;
        this.doctors - doctors;
    }
    
    
    
    getDoctorByCity(city) {
        return New Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=Matthew%20Noell&first_name=matthew&last_name=noell&query=Check-up&specialty_uid=Internal%20Medicine&insurance_uid=Aetna&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=8882649c832a2b5e91873e77aa80b644`
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
        
