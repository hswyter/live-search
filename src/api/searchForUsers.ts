import axios from "axios";
import { User } from "../interfaces/User";

const searchForUsers = async (searchTerm: string): Promise<Array<User>> => {
  try {
    const { data: { users } } = await axios.get(`https://dummyjson.com/users/search?q=${searchTerm}`);
    return users as Array<User>;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default searchForUsers;