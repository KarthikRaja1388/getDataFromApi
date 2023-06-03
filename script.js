function getData() {
  let apiResponse = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      console.log(response.json());
    }
  );
}

getData();
