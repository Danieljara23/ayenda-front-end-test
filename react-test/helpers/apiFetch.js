export const apiFetch = async (url) => {
  try {
    const data = 
      await fetch(url)
        .then(response => response.json())
  
    return data;
  } catch (error) {
    return {}
  }
}