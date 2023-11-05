import axios from "axios";

const getTodoItems = async () => {
    try{
        const response = await axios.get("../users.json")
        const todoItems = response.data
        console.log(todoItems);
        return todoItems
    } catch (errors) {
        console.error(errors);
    }}
    async function getUser() {
        try {
          const response = await axios.get("../users.json");
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    