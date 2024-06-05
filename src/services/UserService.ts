export class UserService {
    static async login(email: string, password: string) {
        return await fetch('http://localhost:3000/login', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                'email': email,
                'password': password,
            })
        })
    }
}