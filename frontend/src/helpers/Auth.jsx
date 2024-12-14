import apiInstance from "../config/axios";

export const SignUp = async (data) => {
  try {
    const res = await apiInstance.post("/sign-up", data);
    console.log(res?.response?.data, "555");
    return res;
  } catch (error) {
    console.log(error?.response, "777");
    return error.response;
  }
};
