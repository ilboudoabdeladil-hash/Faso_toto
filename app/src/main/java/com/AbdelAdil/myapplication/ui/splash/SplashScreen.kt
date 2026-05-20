package com.AbdelAdil.myapplication.ui.splash

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.Image
import androidx.compose.ui.res.painterResource
import com.AbdelAdil.myapplication.R
import kotlinx.coroutines.delay

@Composable
fun SplashScreen(onNextScreen: () -> Unit) {
    val infiniteTransition = rememberInfiniteTransition(label = "scale")
    val scale by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 1.1f,
        animationSpec = infiniteRepeatable(
            animation = tween(1000),
            repeatMode = RepeatMode.Reverse
        ),
        label = "scale"
    )

    LaunchedEffect(Unit) {
        delay(2500)
        onNextScreen()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Image(
                painter = painterResource(id = R.drawable.logo_faso_toto),
                contentDescription = "Logo Faso tôtô",
                modifier = Modifier
                    .size(200.dp)
                    .scale(scale)
            )

    LaunchedEffect(Unit) {
        delay(2500)
        onNextScreen()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White), // Fond blanc pour faire ressortir le logo rond
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            AsyncImage(
                model = R.drawable.logo_faso_toto,
                contentDescription = "Logo Faso tôtô",
                modifier = Modifier
                    .size(200.dp)
                    .scale(scale)
            )
            Spacer(modifier = Modifier.height(24.dp))
            Text(
                text = "Faso tôtô",
                color = MaterialTheme.colorScheme.primary,
                fontSize = 32.sp,
                fontWeight = FontWeight.ExtraBold
            )
            Text(
                text = "Votre marketplace de proximité",
                color = Color.Gray,
                fontSize = 14.sp
            )
        }
    }
}
