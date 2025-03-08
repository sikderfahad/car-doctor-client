const fetchUserGender = async (name) => {
  if (!name || typeof name !== "string") return;
  const url = `https://api.genderize.io/?name=${name}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.gender;
};

export default fetchUserGender;
