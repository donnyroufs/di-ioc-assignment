import 'dotenv/config'

import { Container } from './container'

/*
  REMEMBER: Controller -> Service -> Repository
  make sure to export the instance of the container here.
*/

// Don't touch the repository!
export class UserRepository {
  public getUsers() {
    return []
  }
}

export class UserService {}
export class UserController {}
