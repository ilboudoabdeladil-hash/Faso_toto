package com.AbdelAdil.myapplication.ui.order

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.DeliveryDining
import androidx.compose.material.icons.filled.LocalMall
import androidx.compose.material.icons.filled.Receipt
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun OrderTrackingScreen(orderId: Int, onBackClick: () -> Unit) {
    Scaffold(
        topBar = {
            CenterAlignedTopAppBar(
                title = { Text("Suivi Commande #$orderId") },
                navigationIcon = {
                    IconButton(onClick = onBackClick) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Retour")
                    }
                }
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                "Statut actuel : En cours de livraison",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.primary
            )
            
            Spacer(modifier = Modifier.height(32.dp))
            
            TrackingStep(icon = Icons.Default.Receipt, title = "Commande validée", isCompleted = true)
            TrackingLine(isCompleted = true)
            TrackingStep(icon = Icons.Default.LocalMall, title = "Préparation par le vendeur", isCompleted = true)
            TrackingLine(isCompleted = true)
            TrackingStep(icon = Icons.Default.DeliveryDining, title = "En cours de livraison", isCompleted = true, isCurrent = true)
            TrackingLine(isCompleted = false)
            TrackingStep(icon = Icons.Default.Check, title = "Livré", isCompleted = false)
            
            Spacer(modifier = Modifier.weight(1f))
            
            Button(
                onClick = onBackClick,
                modifier = Modifier.fillMaxWidth().height(50.dp),
                shape = androidx.compose.foundation.shape.RoundedCornerShape(12.dp)
            ) {
                Text("Retour à l'accueil")
            }
        }
    }
}

@Composable
fun TrackingStep(icon: ImageVector, title: String, isCompleted: Boolean, isCurrent: Boolean = false) {
    Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth()) {
        Box(
            modifier = Modifier
                .size(40.dp)
                .background(
                    if (isCompleted) MaterialTheme.colorScheme.tertiary else Color.LightGray,
                    CircleShape
                ),
            contentAlignment = Alignment.Center
        ) {
            Icon(icon, contentDescription = null, tint = Color.White, modifier = Modifier.size(24.dp))
        }
        Text(
            text = title,
            modifier = Modifier.padding(start = 16.dp),
            fontSize = 16.sp,
            fontWeight = if (isCurrent) FontWeight.Bold else FontWeight.Normal,
            color = if (isCompleted) Color.Black else Color.Gray
        )
    }
}

@Composable
fun TrackingLine(isCompleted: Boolean) {
    Box(
        modifier = Modifier
            .padding(start = 20.dp)
            .width(2.dp)
            .height(30.dp)
            .background(if (isCompleted) MaterialTheme.colorScheme.tertiary else Color.LightGray)
    )
}