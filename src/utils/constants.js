export const lOGO =
  "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940";

export const USER_AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIMPL79VXeGD6xOtEMoGoeU5J6HeKM7vSxQ&s";

  export const API = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+ process.env.REACT_APP_TMBD_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


export const BG_URL ="https://dqae.org/wp-content/uploads/2022/09/234234-1140x641.jpg"

export const Supported_Languages = [{identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"},
  {identifier:"chinese", name:"Chinese"}];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;