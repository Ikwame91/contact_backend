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

  const parsedPort = Number(PORT);
  if(!Number.isInteger(parsedPort)|| parsedPort<=0 || parsedPort > 65535){
    throw new Error("Invalid PORT number. It must be an integer between 1 and 65535.");
  }
  return {
    PORT,
    MONGODB_URI,
    JWT_SECRET,
  };
};

const envConfig = getEnvConfig();
export default envConfig;
