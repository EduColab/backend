import { expressjwt } from "express-jwt"
import jsonWebToken from 'jsonwebtoken'

class Jwt {
    public createToken(username: string, password: string, email: string, universidadId: number) {
        const secret: string | any = process.env.JWT_SECRET

        let tokenResponse: string | undefined = ''

        jsonWebToken.sign({username, password, email, universidadId}, secret, (err: any, token: string | undefined) => {
            console.log(token)
            tokenResponse = token
        })

        return tokenResponse
    }
}

export const jwt = new Jwt();