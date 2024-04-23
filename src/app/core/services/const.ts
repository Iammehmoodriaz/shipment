
export const apiPath = {
    accessTokenKey: 'SSAuth',

    authLogin:'auth/Login',

    getShipments:'PitneyBowes/GetAllShipments',
    getShipmentbyID:'PitneyBowes/GetShipmentById',
    createShipment:'PitneyBowes/CreateShipmentDomestic'
}


export const MessageTypes = {
    error: "Error",
    info: "Info",
    failure: "Failure",
    success: "Success",
    warning: "Warning",
}

export const ResultMessages = {
    serverError: "Internal Server Error",
    requiredAllField: "Please fill all feilds",
    fileSizeLimit: "File size can not be more than 1 MB.",
    fileExtension: "File Format not supported",
    fileNotFound: "Sorry, we are unable to download this file for you.",
}
