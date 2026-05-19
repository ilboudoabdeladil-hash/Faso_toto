package com.AbdelAdil.myapplication.data.local

import com.AbdelAdil.myapplication.data.models.CartItem
import com.AbdelAdil.myapplication.data.models.Product
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

object CartManager {
    private val _items = MutableStateFlow<List<CartItem>>(emptyList())
    val items: StateFlow<List<CartItem>> = _items.asStateFlow()

    fun addProduct(product: Product) {
        val currentList = _items.value.toMutableList()
        val existingItem = currentList.find { it.product.id == product.id }
        
        if (existingItem != null) {
            val index = currentList.indexOf(existingItem)
            currentList[index] = existingItem.copy(quantity = existingItem.quantity + 1)
        } else {
            currentList.add(CartItem(product, 1))
        }
        _items.value = currentList
    }

    fun removeProduct(productId: Int) {
        val currentList = _items.value.toMutableList()
        currentList.removeAll { it.product.id == productId }
        _items.value = currentList
    }

    fun updateQuantity(productId: Int, quantity: Int) {
        val currentList = _items.value.toMutableList()
        val existingItem = currentList.find { it.product.id == productId }
        if (existingItem != null) {
            val index = currentList.indexOf(existingItem)
            if (quantity > 0) {
                currentList[index] = existingItem.copy(quantity = quantity)
            } else {
                currentList.removeAt(index)
            }
        }
        _items.value = currentList
    }

    fun clear() {
        _items.value = emptyList()
    }
    
    fun getTotal(): Double {
        return _items.value.sumOf { it.product.prix * it.quantity }
    }
}