package com.AbdelAdil.myapplication.data.api

import com.AbdelAdil.myapplication.data.models.*
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

interface ApiService {
    @POST("auth/inscription")
    suspend fun register(@Body request: RegisterRequest): AuthResponse

    @POST("auth/connexion")
    suspend fun login(@Body request: LoginRequest): AuthResponse

    @GET("produits")
    suspend fun getProducts(
        @Query("categorie") categoryId: Int? = null,
        @Query("vendeur") sellerId: Int? = null
    ): ApiResponse<List<Product>>

    @GET("produits/{id}")
    suspend fun getProductDetail(
        @retrofit2.http.Path("id") id: Int
    ): ApiResponse<Product>

    @GET("categories")
    suspend fun getCategories(): ApiResponse<List<Category>>
}

data class ApiResponse<T>(
    val success: Boolean,
    val message: String?,
    val data: T
)