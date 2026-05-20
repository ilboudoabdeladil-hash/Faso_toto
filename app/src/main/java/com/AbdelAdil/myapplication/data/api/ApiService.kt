package com.AbdelAdil.myapplication.data.api

import com.AbdelAdil.myapplication.data.models.AuthResponse
import com.AbdelAdil.myapplication.data.models.Category
import com.AbdelAdil.myapplication.data.models.LoginRequest
import com.AbdelAdil.myapplication.data.models.Product
import com.AbdelAdil.myapplication.data.models.RegisterRequest
import com.AbdelAdil.myapplication.data.models.User
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Path

interface ApiService {

    @POST(ApiConstants.AUTH_LOGIN)
    suspend fun login(@Body request: LoginRequest): Response<AuthResponse>

    @POST(ApiConstants.AUTH_REGISTER)
    suspend fun register(@Body request: RegisterRequest): Response<AuthResponse>

    @POST(ApiConstants.AUTH_LOGOUT)
    suspend fun logout(): Response<Unit>

    @GET(ApiConstants.PRODUCTS)
    suspend fun getProducts(): Response<ApiListResponse<Product>>

    @GET(ApiConstants.PRODUCT_DETAIL)
    suspend fun getProductById(@Path("id") id: Int): Response<ApiResponse<Product>>

    @GET(ApiConstants.CATEGORIES)
    suspend fun getCategories(): Response<ApiListResponse<Category>>

    @GET(ApiConstants.PRODUCTS_BY_CATEGORY)
    suspend fun getProductsByCategory(@Path("slug") slug: String): Response<ApiListResponse<Product>>

    @GET(ApiConstants.USER_PROFILE)
    suspend fun getProfile(): Response<ApiResponse<User>>

    @PUT(ApiConstants.USER_UPDATE)
    suspend fun updateProfile(@Body user: User): Response<ApiResponse<User>>
}
