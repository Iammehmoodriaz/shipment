import { Action } from '@ngrx/store';
import { MenuWithScreens } from 'src/app/interfaces/PayLoad';

export const menu = 'Menu';

export class Menu implements Action {
    readonly type = menu;
    constructor(public payload: MenuWithScreens[]) { }
}

export type HRMSAction = Menu;

export class ActionTypes {
    static LOGOUT = "[App] logout";
}

export class Logout implements Action {
    readonly type = ActionTypes.LOGOUT;
}