import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "3e7e2450-44ca-4eee-9245-fe585e1368b3",
    }
})

export const usersAPI = {
    getUsers(usersPerLoad, currentPage) {
        return instance.get(`users?count=${usersPerLoad}&page=${currentPage}`)
            .then(response => response.data)
    },
    getIsFollowed(userId) {
        return instance.get(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

//!fix userId
export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId ? userId : "22988"}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId ? userId : "22988"}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data);
    }
}

export const authAPI = {
    getUserData() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}