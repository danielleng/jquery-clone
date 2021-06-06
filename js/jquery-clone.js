import ElementCollection from './ElementCollection';
import AjaxPromise from './AjaxPromise';

function $(param) {
  if (typeof param === 'string' || param instanceof String) {
    // "..." spreads the results of querySelectorAll, meaning:
    //  ElementCollection(el1, el2, el3) instead of ElementCollection(array)
    return new ElementCollection(...document.querySelectorAll(param));
  } else {
    return new ElementCollection(param);
  }
}

$.get = function({
  url,
  data = {},
  success = () => {},
  dataType
}) {
  const queryString = Object.entries(data).map(
    ([key, value]) => {
      return `${key}=${value}`
    })
    .join('&');

    return new AjaxPromise(
      fetch(`${ url }?${ queryString }`, {
        method: 'GET',
        headers: {
          'Content-Type': dataType,
        }
      })
      
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      
      .then(data => {
        success(data);
        return data;
      })
    );
}

export default $;