import { param, route } from "typesafe-react-router"

export const Routes = {
    raid: {
        list: route("raids"),
        new: route("raid", "new"),
        show: route("raid", "show", param("raidId")),
        edit: route("raid", "edit", param("raidId"))
    },
    user: {
        list: route("users"),
        show: route("user", param("userId"))
    },
    profile: route("profile")
}
