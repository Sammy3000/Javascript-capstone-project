const getMeal = async () => {
  const result = await fetch(
    "https://www.themealdb.com/api/json/v1//1/categories.php"
  );
  const data = await result.json();
  return data;
};
export default getMeal;
