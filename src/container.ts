export class Container {
  private readonly _deps: Record<string, any> = {}
  private _key: string = ''

  public bind(key: string) {
    this._key = key
    return this
  }

  public to(dep: any) {
    this._deps[this._key] = new dep()
    this._key = ''
  }

  public get<T>(key: string) {
    return this._deps[key] as T
  }
}
