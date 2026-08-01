import { User } from "lucide-react";

export enum InvitationLevel {
  RECEPTION = 0,
  RING = 1,
  SEALING = 2,
}

export class UserProfile {
  id: number;
  private _invite: InvitationLevel;
  private _rsvp: boolean;

  constructor(
    id: number = 0,
    lvl: InvitationLevel = InvitationLevel.RECEPTION,
    rsvp: boolean = false,
  ) {
    this.id = id;
    this._invite = lvl;
    this._rsvp = rsvp;
  }

  get invite(): InvitationLevel {
    return this._invite;
  }

  set invite(value: InvitationLevel) {
    this._invite = value;
    this.save();
    // console.log("SETTINGGN")
  }

  get rsvp(): boolean {
    return this._rsvp;
  }
  set rsvp(value: boolean) {
    this._rsvp = value;
    this.save();
  }

  load(): any {
    const savedString = localStorage.getItem("user");
    const userObj = savedString ? JSON.parse(savedString) : null;
    const userclass = new UserProfile(
      userObj.id,
      userObj["_invite"],
      userObj["_rsvp"],
    );
    return userclass;
  }

  save(): void {
    console.log("save called");
    localStorage.setItem("user", JSON.stringify(this));
  }

  check(): boolean {
    const savedString = localStorage.getItem("user");
    const userObj = savedString ? JSON.parse(savedString) : null;
    console.log(userObj?.id);
    return userObj !== null;
  }

  static initLoad(): any {
    var user = new UserProfile();
    if (user.check()) {
      user = user.load();
      console.log(user);
    } else {
      user.save();
    }
    return user;
  }
}
