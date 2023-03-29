import { Route } from "@core/interface";
import { Router } from "express";
import AuthController from "./auth.controller";
class AuthRoute implements Route {
    public path = '/api/auth';
    public router = Router();
    public authController = new AuthController();

    constructor() {
        this.initializeRoute();
    }

    private initializeRoute() {
        this.router.post(this.path, this.authController.login)
    }
}

export default AuthRoute;