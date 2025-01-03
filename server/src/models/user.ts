import { DataTypes,Sequelize,Model,Optional } from "sequelize";
// import bcrypt from "bcrypt";

interface UserAttributes{
    id: number;
    username: string;
    email: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes,"id">{}

export class User
extends Model<UserAttributes,UserCreationAttributes>
implements UserAttributes
{
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAT!: Date;
}

export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'user',
        }
    );
    return User;
}