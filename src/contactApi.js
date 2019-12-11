class ContactApi {

    static API_BASE_URL = "/api/v1";

    static requestHeaders(token) {
        console.log(token);
        if (token)
            return {
                Authorization: `Bearer ${token}`
            }
            
        return {};
    }

    static getAllContacts(token) {
        const headers = this.requestHeaders(token);
        const request = new Request(ContactApi.API_BASE_URL + "/contacts", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

}

export default ContactApi