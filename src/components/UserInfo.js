export class UserInfo{
    constructor({profileName,profileAbout}){
        this._profileName = document.querySelector(profileName);
        this._profileAbout = document.querySelector(profileAbout);
    }

    getUserInfo(){
        return {
            name: this._profileName.textContent,
            about: this._profileAbout.textContent
        }
    }

    setUserInfo(data){
        this._profileName.textContent = data.profileName;
        this._profileAbout.textContent = data.profileAbout;
    }
}

// this._info = {};
//         this._info.name = this._name.textContent;
//         this._info.about = this._about.textContent;
//         return this._info;