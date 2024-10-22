import { UserRepository } from "./../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("error creating user in user service " + error.message);
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      console.log("error in getting user from user service " + error.message);
    }
  }

  async signin(data) {
    try {
        const user = await this.getUserByEmail(data.email);
        if (!user) {
            throw { message: "User not found", success: false };
        }

        if (!user.comparePassword(data.password)) {
            throw { message: "Invalid password", success: false };
        }

        const token = await user.genJwt();

        return token;
    } catch (error) {
        throw {
            message: error.message,
            success: false,
        };
    }
  }
}

export default UserService;
