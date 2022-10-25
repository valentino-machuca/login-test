export function validator(event : string, value: string){
    if(event == 'name'){
        const regexName : RegExp = /^[a-z ,.'-]+$/i;

        return regexName.test(value) ? 'Looks good!' : 'Mmm some character is not allowed, check it.'
    }

    if(event == 'email'){
        const regexEmail : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        return regexEmail.test(value) ? 'Looks good!' : 'Mmm some character is not allowed, check it.'
    }
}