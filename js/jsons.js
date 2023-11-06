const getTodoItems = async () => {
    try{
        // const response = await axios.get("https://console.firebase.google.com/project/webproj-429b0/database/webproj-429b0-default-rtdb/data/~2F")
        // const todoItems = response.data
        // console.log(todoItems);
        // return todoItems
        axios({
          method: 'get',
          url: 'https://console.firebase.google.com/project/webproj-429b0/database/webproj-429b0-default-rtdb/data/~2F',
          responseType: 'stream'
        })
          .then(function (response) {
            const inst = response.data
            console.log(inst);
          });
    } catch (errors) {
        console.error(errors);
    }}
    async function getUser() {
        try {
          const response = await axios.get("https://console.firebase.google.com/project/webproj-429b0/database/webproj-429b0-default-rtdb/data/~2F");
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    