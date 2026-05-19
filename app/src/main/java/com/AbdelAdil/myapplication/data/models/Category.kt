package com.AbdelAdil.myapplication.data.models

data class Category(
    val id: Int,
    val nom: String,
    val slug: String,
    val image: String? = null
)