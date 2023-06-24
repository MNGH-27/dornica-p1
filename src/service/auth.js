import useFetch from "./../hooks/useFetch";

export async function LoginUser(navigate, { email, password }) {
  const apiCall = await useFetch(navigate).post(
    "https://apingweb.com/api/login",
    {
      email,
      password,
    },
    {
      headers: {
        Authorization: "Basic " + btoa("admin : 12345"),
        "Content-Type": "application/json",
      },
    }
  );

  return apiCall;
}

export async function SignupUser(
  navigate,
  { name, email, phone, password, passwordConfirmation }
) {
  const apiCall = await useFetch(navigate).post(
    "https://apingweb.com/api/register",
    {
      name,
      email,
      password,
      phone,
      password_confirmation: passwordConfirmation,
    },
    {
      headers: {
        Authorization: "Basic " + btoa("admin : 12345"),
        "Content-Type": "application/json",
      },
    }
  );

  return apiCall;
}
