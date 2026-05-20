package com.AbdelAdil.myapplication.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = RedMarket,
    secondary = YellowMarket,
    tertiary = GreenMarket,
    background = Color(0xFF212121),
    surface = Color(0xFF212121),
    onPrimary = Color.White,
    onSecondary = Color(0xFF212121),
    onTertiary = Color.White,
    onBackground = Color.White,
    onSurface = Color.White
)

private val LightColorScheme = lightColorScheme(
    primary = RedMarket,
    secondary = YellowMarket,
    tertiary = GreenMarket,
    background = GreyLight,
    surface = Color.White,
    onPrimary = Color.White,
    onSecondary = Color(0xFF212121),
    onTertiary = Color.White,
    onBackground = Color(0xFF212121),
    onSurface = Color(0xFF212121)
)

@Composable
fun MyApplicationTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
