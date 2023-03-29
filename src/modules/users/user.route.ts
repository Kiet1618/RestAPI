import { Route } from "@core/interface";
import { Router } from "express";
import RegisterDto from "./dtos/register.dto";
import UsersController from "./users.controller";
import ValidationMiddleware from '@core/middleware/validation.middleware'
class UsersRoute implements Route {
    public path = '/api/users';
    public router = Router();
    public usersController = new UsersController();

    constructor() {
        this.initializeRoute();
    }

    private initializeRoute() {
        this.router.post(this.path, ValidationMiddleware(RegisterDto, true), this.usersController.register)
    }
}

export default UsersRoute;