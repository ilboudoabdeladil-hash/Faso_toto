package com.AbdelAdil.myapplication.data.models

data class User(
    val id: Int,
    val nom: String,
    val email: String,
    val role: String,
    val photo: String? = null,
    val telephone: String? = null,
    val adresse: String? = null
)

data class AuthResponse(
    val success: Boolean,
    val message: String?,
    val data: AuthData?
)

data class AuthData(
    val token: String,
    val user: User
)

data class LoginRequest(
    val email: String,
    val password: String
)

data class RegisterRequest(
    val nom: String,
    val email: String,
    val password: String,
    val role: String = "acheteur"
)