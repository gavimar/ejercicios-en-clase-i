const get = () => {
  return fetch('http://api.tvmaze.com/search/shows?q=dexter')
    .then(response => response.json())
    .then(showsItems => {
      const result = [];
      for (const item of showsItems) {
        let image;
        if (item.show.image === null) {
          image = 'https://i.picsum.photos/id/593/200/300.jpg';
        } else {
          image = item.show.image.medium;
        }
        // const image = item.show.image === null ? 'https://i.picsum.photos/id/593/200/300.jpg' : item.show.image.medium;
        result.push({
          id: item.show.id,
          name: item.show.name,
          image: image
        });
      }
      return result;
    });
};

const post = data => {
  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      // aquí podemos limpiar
      return data;
    })
    .catch(err => {
      return {
        error: 'Unknown error',
        success: false
      };
    });
};

export default {
  get: get,
  post: post
};
