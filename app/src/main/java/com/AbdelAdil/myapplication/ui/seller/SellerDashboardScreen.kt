package com.AbdelAdil.myapplication.ui.seller

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.BarChart
import androidx.compose.material.icons.filled.Inventory
import androidx.compose.material.icons.filled.ListAlt
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SellerDashboardScreen() {
    Scaffold(
        topBar = { CenterAlignedTopAppBar(title = { Text("Tableau de bord Vendeur") }) },
        floatingActionButton = {
            FloatingActionButton(onClick = { }) {
                Icon(Icons.Default.Add, contentDescription = "Ajouter un produit")
            }
        }
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).padding(16.dp)) {
            Text("Ma Boutique", fontSize = 24.sp, fontWeight = FontWeight.Bold)
            
            Spacer(modifier = Modifier.height(24.dp))
            
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                DashboardCard(title = "Ventes", value = "1,250 €", icon = Icons.Default.BarChart, modifier = Modifier.weight(1f))
                DashboardCard(title = "Commandes", value = "12", icon = Icons.Default.ListAlt, modifier = Modifier.weight(1f))
            }
            
            Spacer(modifier = Modifier.height(24.dp))
            
            Text("Mes Produits", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            
            // Placeholder list
            LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp), modifier = Modifier.padding(top = 8.dp)) {
                items(5) { index ->
                    ListItem(
                        headlineContent = { Text("Produit Vendeur #$index") },
                        supportingContent = { Text("Stock: 10 | Prix: 49.99 €") },
                        leadingContent = { Icon(Icons.Default.Inventory, contentDescription = null) },
                        trailingContent = { TextButton(onClick = {}) { Text("Modifier") } }
                    )
                    Divider()
                }
            }
        }
    }
}

@Composable
fun DashboardCard(title: String, value: String, icon: ImageVector, modifier: Modifier = Modifier) {
    Card(modifier = modifier, colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.secondary.copy(alpha = 0.1f))) {
        Column(modifier = Modifier.padding(16.dp)) {
            Icon(icon, contentDescription = null, tint = MaterialTheme.colorScheme.primary)
            Text(title, fontSize = 14.sp, modifier = Modifier.padding(top = 8.dp))
            Text(value, fontSize = 20.sp, fontWeight = FontWeight.Bold)
        }
    }
}