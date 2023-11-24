import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default new class AuthenticationMiddlewares {
  Authentication(req: Request, res: Response, next: NextFunction) : Response {
    try {
      const Authorization = req.headers.authorization

      // if with token = "Bearer sdfasdfdasfasfasfwerdsaf"

      if(!Authorization || !Authorization.startsWith("Bearer ")) {
        return res.status(401).json({ Error: "Unauthorized" })
      }

      // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmdWxsbmFtZSI6ImRldmVsb3BtZW50In0sImlhdCI6MTcwMDU1MDUyNSwiZXhwIjoxNzAwNTU0MTI1fQ.cQv8ES35PAU-PfjxzUp_YH2Z1oDINjLY1gA0MtF0YgE
      // ["Bearer", "this is token"]

      const token = Authorization.split(" ")[1]

      try {
        const loginSession = jwt.verify(token, 'SECRET_KEY')
        res.locals.loginSession = loginSession
        next()
      } catch (err) {
        return res.status(401).json({ Error: "Token verification failed" })
      }
    } catch (err) {
      return res.status(500).json({ Error: "Error while authenticating" })
    }
  }
}