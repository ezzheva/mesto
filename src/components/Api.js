export class Api{
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
    }

    /**проверка статуса ошибки*/
    _checkError(res){
        if (res.ok){
            return res.json();
        } else {
        return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    /**загрука карточек с сервера */
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers
        })
        .then((res) => this._checkError(res));
    }

    /**добавление карточек на страницу */
    addNewCard(cardData) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ 
                name: cardData["element-name"], 
                link: cardData["element-link"]
            })
        })
            .then((res) => this._checkError(res))
    }

    /**получение с сервера данных */
    getUserInfo() {
		return fetch(`${this._url}/users/me`, {
            method: "GET",
			headers: this._headers
		})
        .then((res) => this._checkError(res));
	}

    /**изменение данных с сервера */
    patchUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: data["user-name"],
            about: data["about"]
            })
        })
        .then((res) => this._checkError(res));
    }
    
    /**добавление лайка */
    getLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
          method: "PUT",
          headers: this._headers,
        })
        .then((res) => this._checkError(res));
    }
    
    /**удаление лайка */
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
          method: "DELETE",
          headers: this._headers,
        })
        .then((res) => this._checkError(res));
    }
    
    /**удаление карточек */
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => this._checkError(res));
    }

    /**изменение аватара */
    patchAvatarInfo(data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify(data),
        })
        .then((res) => this._checkError(res));
    }
}