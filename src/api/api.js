import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "3e7e2450-44ca-4eee-9245-fe585e1368b3",
        // "API-KEY": "730ee8cf-1156-477e-a6e6-3890644c3e79",
    }
})

export const usersAPI = {
    async getUsers(usersPerLoad, currentPage, isSubscribedOn, searchTerm) {
        let searchTermLocal = searchTerm ? searchTerm : '';
        let response = await instance.get(`users?count=${usersPerLoad}&page=${currentPage}&friend=${isSubscribedOn}&term=${searchTermLocal}`)
        return response.data;
    },
    async getIsFollowed(userId) {
        let response = await instance.get(`follow/${userId}`)
        return response.data;
    },
    async follow(userId) {
        let response = await instance.post(`follow/${userId}`)
        return response.data;
    },
    async unfollow(userId) {
        let response = await instance.delete(`follow/${userId}`)
        return response.data;
    }
}

export const profileAPI = {
    async getProfileInfo(userId) {
        let response = await instance.get(`profile/${userId}`)
        return response.data;
    },
    async setProfileInfo(userId, fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts) {
        let response = await instance.put(`profile`, {
            aboutMe, userId, lookingForAJob, lookingForAJobDescription, fullName, contacts
        })
        return response.data;
    },
    async setPhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        let response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    },
    async getStatus(userId) {
        let response = await instance.get(`profile/status/${userId}`)
        return response.data;
    },
    async updateStatus(status) {
        let response = await instance.put(`profile/status`, { status: status })
        return response.data;
    }
}

export const authAPI = {
    async getUserData() {
        let response = await instance.get(`auth/me`)
        return response.data;
    },
    async logIn(authData) {
        let response = await instance.post(`auth/login`, { email: authData.login, password: authData.password, rememberMe: authData.rememberMe })
        return response.data;
    },
    async logOut() {
        let response = await instance.delete(`auth/login`)
        return response.data;
    }
}

export const chatAPI = {
    async startChat(userId) {
        let response = await instance.put(`dialogs/${userId}`)
        return response.data;
    },
    async getDialogs() {
        return await instance.get(`dialogs`)
    },
    async getDialog(userId, page, count = 10) {
        let response = await instance.get(`dialogs/${userId}/messages?page=${page}&count=${count}`)
        return response;
    },
    async sendMessage(userId, message) { //!!
        let response = await instance.post(`dialogs/${userId}/messages`, { body: message })
        return response.data;
    },
    async isMessageViewed(messageId) {
        let response = await instance.get(`dialogs/messages/${messageId}/viewed`)
        debugger;
        return response.data;
    },
    async messageToSpam(messageId) {
        let response = await instance.post(`dialogs/messages/${messageId}/spam`)
        debugger;
        return response.data;
    },
    async deleteMessage(messageId) {
        let response = await instance.delete(`dialogs/messages/${messageId}`)
        debugger;
        return response.data;
    },
    async restoreMessage(messageId) { //restore from deleted messages/spam
        let response = await instance.put(`dialogs/messages/${messageId}/restore`)
        debugger;
        return response.data;
    },
    async getNewMessages() {
        let response = await instance.get(`dialogs/messages/new/count`)
        return response.data;
    },
    async getMessagesNewerThanDate(userId, date) {
        let response = await instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
        return response.data;
    },
}