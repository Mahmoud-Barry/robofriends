import {CHANGE_SEARCH_FIELD} from "./constants"

export const searchRobots = (text)=>{
    return({
        type: CHANGE_SEARCH_FIELD,
        payload: text
    })
}