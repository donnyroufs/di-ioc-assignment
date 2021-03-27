// @ts-nocheck
import { Container } from './container'

class UserRepository {}

describe('Dependency Container', () => {
  let container: Container

  beforeEach(() => {
    container = new Container()
  })

  it('should have an empty object of deps', () => {
    expect(container._deps).toEqual({})
  })

  it('should cache the key when invoking the bind method', () => {
    container.bind(UserRepository.name)

    expect(container._key).toBe(UserRepository.name)
  })

  it('should return itself after invoking the bind method', () => {
    const self = container.bind(UserRepository.name)

    expect(self).toBeInstanceOf(Container)
  })

  it('should bind a dependency to the container', () => {
    container.bind(UserRepository.name).to(UserRepository)

    expect(container._deps[UserRepository.name]).toBeDefined()
  })

  it('should clear the key cache after invoking the to method', () => {
    container.bind(UserRepository.name).to(UserRepository)

    expect(container._key).toBe('')
  })

  it('should return me undefined when asking for a dependency which doesn not exist in the container', () => {
    const resolvedDep = container.get('woef')

    expect(resolvedDep).toBeUndefined()
  })

  it('should return me the dependency when it exists in the container', () => {
    container.bind(UserRepository.name).to(UserRepository)
    const resolvedDep = container.get(UserRepository.name)

    expect(resolvedDep).toBeDefined()
    expect(resolvedDep).toBeInstanceOf(UserRepository)
  })
})
