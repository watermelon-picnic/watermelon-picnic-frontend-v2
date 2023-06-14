import request from "../.."

export const PutUserRegion = async({region}: {
    region: string
}) => {
    await request({
        method:'PUT',
        url: `/user/region?region=${region}`
    })
}