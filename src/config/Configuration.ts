import dotenv from "dotenv";

dotenv.config();

export const Configs = {
    port: Number(process.env.PORT || '3000')
}
