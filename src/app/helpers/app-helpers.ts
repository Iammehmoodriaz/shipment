import { Renderer2 } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormGroup } from "@angular/forms";
/* import { DAYS_OF_WEEK } from "calendar-utils"; */

export function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return "";
    }
}

export function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

export class Helpers {
    constructor(private renderer: Renderer2) { }

    public static trimObject(item: any) {
        if (item)
            for (var key in item) {
                if ((typeof item[key] === 'string' || item[key] instanceof String) && (item[key] != null && item[key]) && (key != 'currentPassword'))
                    item[key] = item[key].trim();
                else if (item[key] instanceof Array && item[key] != null && item[key]) {
                    var arr = item[key];
                    for (var key1 in arr) {
                        var obj = arr[key1];
                        if (obj instanceof Object) {
                            for (var key2 in obj) {
                                if ((typeof obj[key2] === 'string' || obj[key2] instanceof String) && (obj[key2] != null && obj[key2]) && (key != 'currentPassword'))
                                    obj[key2] = obj[key2].trim();
                            }
                        }
                    }
                }
            }
        return item;
    }

    
    public static newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static isDefaultAvatar(image: string) {
        let img: string = '../../../../../../../assets/img/logos/avatar.png';
        if (image != null && image != "null" && image != "" && image != undefined && image != "undefined")
            img = image
        return img;
    }

    public static validateExtension(fileName, allowedFileTypes) {
        allowedFileTypes = allowedFileTypes.replace(/\s+/g, '');
        if (allowedFileTypes != "*") {
            var allowedFiles = allowedFileTypes.split(',');
            var regex = new RegExp("(^.*\.)+(" + allowedFiles.join('|') + ")$");
            if (!regex.test(fileName.toLowerCase())) {
              //  Alerts.showErrorMessage("Please upload files having extensions: " + allowedFiles.join(', ') + " only.");
                return false;
            }
        }
        return true;
    }

    public static formatBytes(bytes, limit) {
        let mb = (Math.round(((bytes / 1024) / 1024) * 100) / 100);
        if (mb > limit) {
            //Alerts.showErrorMessage("Image size can not be more than " + limit + " MB.");
            return false;
        }
        return true;
    };

    public static textEllipsis(value, limit) {
        if (value.length > limit)
            return value.substring(0, limit) + '...';
        else
            return value;
    };

    public static playAudio() {
        let audio = document.getElementById("chatAudio") as HTMLAudioElement;
        audio.play();
    }

    public static searchParams(model: any) {
        let arr = [];
        for (let key in model)
            if (model[key])
                arr.push(key + '*' + model[key]);
        return arr.join('+');
    }

    public static enumToArray(e): Object[] {
        return Object.keys(e).filter(key => typeof e[key] === 'number')
            .map(key => ({ id: e[key], name: key.replace(/_/g, ' ') }))
    }

    public static currencyFormat(value) {
        if (value) {
            return parseInt(value.replace(/,/g, ""))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parseFloat(value.replace(/,/g, ""))
            //     .toFixed(2)
            //     .toString()
            //     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else
            return ''

    }

      public static removeValidators(form: FormGroup, controlArr) {
        for (var value of controlArr) {
            form.controls[value.controlName].clearValidators();
            form.controls[value.controlName].updateValueAndValidity();
        }
    }

    public static addValidators(form: FormGroup, controlArr) {
        for (var value of controlArr) {
            form.controls[value.controlName].setValidators(value.controlValidatoion);
            form.controls[value.controlName].updateValueAndValidity();
        }
    }

}


