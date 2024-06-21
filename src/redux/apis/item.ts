import { API_URL } from "../../service/url";

const itemApis = {
  getAll: () => fetch(API_URL).then((resp) => resp.json()),
};

export { itemApis };
