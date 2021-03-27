//@ts-nocheck
import { UserController, UserService } from './bootstrap'

describe('user controller', () => {
  const userController = new UserController()

  it('should have a user service', () => {
    expect(userController._userService).toBeDefined()
    expect(userController._userService).toBeInstanceOf(UserService)
  })

  it('should return an empty array of users when invoking index', () => {
    const users = userController.index()

    expect(users).toStrictEqual([])
  })

  it('should call the _userService.getUsers method when invoking index', () => {
    const spy = jest.spyOn(userController._userService, 'getUsers')
    userController.index()

    expect(spy).toHaveBeenCalled()
  })

  it('should call the _userRepository.getUsers method when invoking index', () => {
    const spy = jest.spyOn(
      userController._userService._userRepository,
      'getUsers'
    )
    userController.index()

    expect(spy).toHaveBeenCalled()
  })
})
