export const signUp = async (username, email, password, setter) => {
  try {
    const res = await fetch("http://localhost:5001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    console.log(res);
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhotos = async (setter) => {
  try {
    const res = await fetch(process.env.REACT_APP_LOREM_PICSUM);
    const data = await res.json();
    setter(data);
  } catch (error) {
    console.log(error);
  }
};
