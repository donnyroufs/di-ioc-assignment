import 'dotenv/config'

import { Container } from './container'

/*
  REMEMBER: Controller -> Service -> Repository
  make sure to export the instance of the container here.
*/

// Don't touch the repository!
//#region Infrastructure
export class UserRepository {
  public getUsers() {
    return []
  }
}

export class UserService {
  constructor(
    private readonly _userRepository: UserRepository = container.get(
      UserRepository.name
    )
  ) {}

  public getUsers() {
    return this._userRepository.getUsers()
  }
}

export class UserController {
  constructor(
    private readonly _userService: UserService = container.get(UserService.name)
  ) {}

  public index() {
    return this._userService.getUsers()
  }
}

//#endregion

export const container = new Container()

container.bind(UserRepository.name).to(UserRepository)
container.bind(UserService.name).to(UserService)
