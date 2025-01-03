import { User } from "../models/user.js";

export const seedUsers = async ()=>{
    await User.bulkCreate(
        [
            {username:"KirosFateWeaver", email:"Oracle@changerofways.org",password:"testtest"},
            {username:"PappaNurgle", email:"NurgleisLove@deathanddecay.org",password:"testtest2"},
            {username:"Scarbrand", email:"kornesexiled@blood4blood.org",password:"testtest3"}
        ],
        {individualHooks: true}
    );
};