import { NextFunction, Request, Response } from "express";
import UserService from "./users.service";
import RegisterDto from "./dtos/register.dto";
import { TokenData } from "@modules/auth";

class UserController {
    private userService = new UserService();
    public register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const model: RegisterDto = req.body;
            const tokenData: TokenData = await this.userService.createUser(model)
        } catch (err) {
            next(err);
        }
    }
}
export default UserController;