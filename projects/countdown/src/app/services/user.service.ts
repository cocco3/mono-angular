import { Injectable } from '@angular/core';

type UserInfo = {
  name: string;
  email: string;
  photo: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _data: UserInfo | undefined;

  public get name() {
    return this._data?.name || '';
  }

  public get email() {
    return this._data?.email;
  }

  public get photo() {
    return this._data?.photo;
  }

  public setUser(data: UserInfo) {
    this._data = data;
  }
}
