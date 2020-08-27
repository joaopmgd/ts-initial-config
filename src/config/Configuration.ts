import dotenv from "dotenv";

dotenv.config();

export class Configuration {

    public static port: number = parseInt(process.env.PORT || '3000')

}
