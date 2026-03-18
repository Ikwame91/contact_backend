import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: string;
  MONGODB_URI: string;
  JWT_SECRET: string;
}

const getEnvConfig = (): EnvConfig => {
  const { PORT, MONGODB_URI, JWT_SECRET } = process.env;
  if (!PORT || !MONGODB_URI || !JWT_SECRET) {
    throw new Error("One or more required environment variables are not set");
  }
  return {
    PORT,
    MONGODB_URI,
    JWT_SECRET,
  };
};

const envConfig = getEnvConfig();
export default envConfig;
