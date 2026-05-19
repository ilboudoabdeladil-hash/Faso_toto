package com.AbdelAdil.myapplication.ui.checkout

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Payment
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CheckoutScreen(
    total: Double,
    onOrderPlaced: () -> Unit,
    onBackClick: () -> Unit
) {
    var address by remember { mutableStateOf("") }
    var paymentMethod by remember { mutableStateOf("Stripe") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Paiement") },
                navigationIcon = {
                    IconButton(onClick = onBackClick) {
                        Icon(Icons.Default.ArrowBack, contentDescription = null)
                    }
                }
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text("Adresse de livraison", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            OutlinedTextField(
                value = address,
                onValueChange = { address = it },
                label = { Text("Votre adresse") },
                modifier = Modifier.fillMaxWidth(),
                leadingIcon = { Icon(Icons.Default.LocationOn, contentDescription = null) },
                shape = RoundedCornerShape(12.dp)
            )
            
            Spacer(modifier = Modifier.height(8.dp))
            
            Text("Méthode de paiement", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Row(verticalAlignment = Alignment.CenterVertically) {
                RadioButton(selected = paymentMethod == "Stripe", onClick = { paymentMethod = "Stripe" })
                Text("Stripe / Carte Bancaire", modifier = Modifier.padding(start = 8.dp))
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                RadioButton(selected = paymentMethod == "Livraison", onClick = { paymentMethod = "Livraison" })
                Text("Paiement à la livraison", modifier = Modifier.padding(start = 8.dp))
            }
            
            Spacer(modifier = Modifier.weight(1f))
            
            Surface(
                tonalElevation = 8.dp,
                shape = RoundedCornerShape(topStart = 24.dp, topEnd = 24.dp),
                color = Color.White
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text("Total à payer", fontSize = 20.sp, fontWeight = FontWeight.Bold)
                        Text("${String.format(java.util.Locale.US, "%.2f", total)} €", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = MaterialTheme.colorScheme.tertiary)
                    }
                    Spacer(Modifier.height(16.dp))
                    Button(
                        onClick = onOrderPlaced,
                        modifier = Modifier.fillMaxWidth().height(50.dp),
                        shape = RoundedCornerShape(12.dp),
                        enabled = address.isNotBlank()
                    ) {
                        Text("Confirmer la commande", fontSize = 18.sp)
                    }
                }
            }
        }
    }
}