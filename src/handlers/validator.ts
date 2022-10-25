export function validator(event : string, value: string){
    if(event === 'name'){
        const regexName : RegExp = /^[a-z ,.'-]{3,}$/i;

        if(!value) return 'Required';
        return regexName.test(value) ? 'Nice name' : 'Mmm nope, check it...'
    }

    if(event === 'email'){
        const regexEmail : RegExp = /^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if(!value) return 'Required';
        return regexEmail.test(value) ? 'Ok, looks good' : 'Mmm nope, check it...'
    }
}


