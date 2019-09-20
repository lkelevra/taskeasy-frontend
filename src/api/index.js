import config from './config'

const { server } = config

export default function getDisponibility(){
  return fetch(`${server}`)
          .then(res => res.json())
          .catch(error => { errors })
  }


