export class RouteInfo {
    canDelete: boolean
    canEdit: boolean
    canPrint: boolean
    canView: boolean
    caption: string
    icon: string
    isSuperAdmin: boolean
    name:string
    redirectTo: string
    route: string
    subMenu: RouteInfo[]
}
export interface MenuWithScreens {
    menu: RouteInfo[];
    screens: ScreenPermissions[];
}

export class ScreenPermissions {
    canAdd:boolean
    canDelete: boolean
    canEdit: boolean
    canPrint: boolean
    canView: boolean
    caption: string
    icon: string
    isSuperAdmin: boolean
    name:string
    redirectTo: string
    route: string
    subMenu: ScreenPermissions[]
}