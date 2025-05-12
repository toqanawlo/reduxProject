const AddPrefix = (url) => '/users' + url

const auth = {
  login: AddPrefix('/login'),
  
}

export default auth