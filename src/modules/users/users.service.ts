import { DataStoredInToken, TokenData } from '@modules/auth';
import UserSchema from './users.model'
import RegisterDto from './dtos/register.dto';
import { isEmptyObject } from '@core/utils';
import { HttpException } from '@core/exceptions';
import gravatar from 'gravatar';
import bcryptjs from 'bcryptjs'
import IUser from './users.interface';
import jwt from 'jsonwebtoken';
class UserService {
    public UserSchema = UserSchema;

    public async createUser(model: RegisterDto): Promise<TokenData> {
        if (isEmptyObject(model)) {
            throw new HttpException(400, 'Model is empty');
        }
        const user = await this.UserSchema.findOne({ email: model.email });
        if (user) {
            throw new HttpException(409, `Your email ${user.email} already exists.`);
        }
        const avatar = gravatar.url(model.email!, {
            size: '200',
            rating: 'g',
            default: 'mm'
        });
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(model.password!, salt);
        const createdUser: IUser = await this.UserSchema.create({
            ...model,
            password: hashedPassword,
            avatar: avatar,
            date: Date.now()
        });
        return this.createToken(createdUser);

    }
    private createToken(user: IUser): TokenData {
        const dataInToken: DataStoredInToken = { id: user._id };
        const secret: string = process.env.JWT_TOKEN_SECRET!;
        const exporesIn: number = 3600;
        return {
            token: jwt.sign(dataInToken, secret, { expiresIn: exporesIn })
        }
    }
}

export default UserService;