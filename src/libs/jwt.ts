import { expressjwt } from "express-jwt"
import jsonWebToken from 'jsonwebtoken'

class Jwt {
    public createToken(username: string, password: string, email: string) {
        const secret: string | any = process.env.JWT_SECRET

        const tokenResponse: string | undefined = jsonWebToken.sign({username, password, email}, secret)

        return tokenResponse
    }
}

export const jwt = new Jwt();