package com.AbdelAdil.myapplication.data.api

data class ApiListResponse<T>(
    val success: Boolean,
    val data: List<T>,
    val meta: PaginationMeta? = null
)

data class ApiResponse<T>(
    val success: Boolean,
    val data: T?,
    val message: String? = null
)

data class PaginationMeta(
    val current_page: Int,
    val last_page: Int,
    val total: Int
)
