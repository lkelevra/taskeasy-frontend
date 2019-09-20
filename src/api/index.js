import config from './config'

const { server } = config

export default function getDisponibility(){
  return fetch(`${server}/users/disponibility`)
          .then(res => res.json())
          .catch(error => { errors })
  }


