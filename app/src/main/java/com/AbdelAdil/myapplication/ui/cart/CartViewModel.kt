package com.AbdelAdil.myapplication.ui.cart

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.local.CartManager
import com.AbdelAdil.myapplication.data.models.CartItem
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class CartViewModel : ViewModel() {
    val items: StateFlow<List<CartItem>> = CartManager.items

    fun updateQuantity(productId: Int, quantity: Int) {
        CartManager.updateQuantity(productId, quantity)
    }

    fun removeProduct(productId: Int) {
        CartManager.removeProduct(productId)
    }

    fun getTotal(): Double = CartManager.getTotal()
}